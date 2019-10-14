import _ from 'lodash';
import React, { Component } from 'react';
import {
    Platform,
    Alert,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    ToastAndroid,
    Image,
    Dimensions
} from 'react-native';
import { CalendarList, ExpandableCalendar, AgendaList, CalendarProvider, Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Feather';
import Pdf from 'react-native-pdf';
import StudentInfoScreen from './StudentInfoScreen';
import AttendanceGraphScreen from './AttendanceGraphScreen';

const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(9);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(days) {
    const array = [];
    for (let index = 1; index <= days; index++) {
        const date = new Date(Date.now() + (864e5 * index)); // 864e5 == 86400000 == 24*60*60*1000
        const dateString = date.toISOString().split('T')[0];
        array.push(dateString);
    }
    return array;
}

function getPastDate(days) {
    return new Date(Date.now() - (864e5 * days)).toISOString().split('T')[0];
}

// const ITEMS = [
//     { title: dates[0], data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }] },
//     { title: dates[1], data: [{ hour: '4pm', duration: '1h', title: 'Pilates ABC' }, { hour: '5pm', duration: '1h', title: 'Vinyasa Yoga' }] },
//     { title: dates[2], data: [{ hour: '1pm', duration: '1h', title: 'Ashtanga Yoga' }, { hour: '2pm', duration: '1h', title: 'Deep Streches' }, { hour: '3pm', duration: '1h', title: 'Private Yoga' }] },
//     { title: dates[3], data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }] },
//     { title: dates[4], data: [{}] },
//     { title: dates[5], data: [{ hour: '9pm', duration: '1h', title: 'Pilates Reformer' }, { hour: '10pm', duration: '1h', title: 'Ashtanga' }, { hour: '11pm', duration: '1h', title: 'TRX' }, { hour: '12pm', duration: '1h', title: 'Running Group' }] },
//     { title: dates[6], data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }] },
//     { title: dates[7], data: [{}] },
//     { title: dates[8], data: [{ hour: '9pm', duration: '1h', title: 'Pilates Reformer' }, { hour: '10pm', duration: '1h', title: 'Ashtanga' }, { hour: '11pm', duration: '1h', title: 'TRX' }, { hour: '12pm', duration: '1h', title: 'Running Group' }] },
//     { title: dates[9], data: [{ hour: '1pm', duration: '1h', title: 'Ashtanga Yoga' }, { hour: '2pm', duration: '1h', title: 'Deep Streches' }, { hour: '3pm', duration: '1h', title: 'Private Yoga' }] },
//     { title: dates[10], data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }] }
// ];
// const ITEMS = [
//     { title: dates[0] },
//     { title: dates[1] },
//     { title: dates[2] },
//     { title: dates[3] },
//     { title: dates[4] },
//     { title: dates[5] },
//     { title: dates[6] },
//     { title: dates[7] },

// ];





export default class AttendanceScreen extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                absentDates: [],
                holidayDates: [],
                presentDates: [],
            }

    }
    componentDidMount() {

        return fetch("http://www.digitalcampus.in/ParentzApp/studentAttendanceReport.jsp?studentId=" + studentId + "&schoolCode=" + schoolCode)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("attendance");
                console.log(responseJson);
                this.setState({
                    absentDates: responseJson.AbsentDates,
                    holidayDates: responseJson.HolidayDates,
                    //presentDates: responseJson.AbsentDates,
                    isLoading: false
                }, function () { }
                );
                console.log("dataSource=" + this.state.absentDates);
                //const ITEMS = dataSource;
            }).catch((error) => {
                console.log(error)
            })
    }//compo










    onDateChanged = (/* date, updateSource */) => {
        // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
        // fetch and set data for date + week ahead
    }

    onMonthChange = (/* month, updateSource */) => {
        // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
    }

    buttonPressed() {
        Alert.alert('show more');
    }

    itemPressed(id) {
        Alert.alert(id);
    }

    renderEmptyItem() {
        return (
            <View style={styles.emptyItem}>
                <Text style={styles.emptyItemText}>No Events Planned</Text>
            </View>
        );
    }



    // getMarkedDates = () => {
    //     const marked = {};
    //     ITEMS.forEach(item => {
    //         // only mark dates with data
    //       //  if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
    //             marked[item.title] = { marked: true, dotColor: 'red' };
    //        // }
    //     });



    getMarkedDates = () => {
        const marked = {};

        console.log("getMarkedDates absentDates=" + JSON.stringify(this.state.absentDates));

        const absent_dates = this.state.absentDates;
        // const present_dates = this.state.absentDates;
        const holidays_dates = this.state.absentDates;
        //abscent 
        if (this.state.absentDates && this.state.absentDates === 'undefined') {
            // Object is NOT empty
            console.log("###################################   ");

        } else {
            absent_dates.forEach(item => {
                console.log("item===  " + item);
                // only mark dates with data
                //  if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
                //marked[item] = { marked: true, dotColor: 'red', selectedColor: 'red' };
                marked[item] = { selected: true, marked: true, selectedColor: '#ff7373' };
                // }
            });
        }
        //holidays
        // if (this.state.holidays_dates && this.state.holidays_dates === 'undefined') {
        //     // Object is NOT empty
        //     console.log("###################################   ");

        // } else {
        //     holidays_dates.forEach(item => {
        //         console.log("item===  " + item);
        //         // only mark dates with data
        //         //  if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
        //         //marked[item] = { marked: true, dotColor: 'red', selectedColor: 'red' };
        //         marked[item] = { selected: true, marked: true, selectedColor: '#c9c9ff' };
        //         // }
        //     });
        // }


        // ITEMS.forEach(item => {
        //     // only mark dates with data
        //     //  if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
        //     console.log("item.title===  " + item.title);
        //     //marked[item.title] = { marked: true, dotColor: 'red' };
        //     // }
        // });
        return marked;
    }

    static navigationOptions = {
        title: 'Attendance',
    };
    //http://digitalcampus.in/AppJSPFile/ParentAttendanceReport.jsp?username=1387&password=weghak&schoolcode=MER-KP
    //https://github.com/wix/react-native-calendars/blob/master/example/src/screens/expandableCalendar.js
    render() {
        return (
            <ScrollView style={{ color: "white", fontSize: 18, textAlign: 'center' }}>
                <View>
                    <StudentInfoScreen />
                </View>

                <View style={{
                    flex: 1, alignItems: "center", justifyContent: "center",
                    backgroundColor: 'white', marginTop: 50
                }}>

                    {/* <Text style={{ fontSize: 18, marginTop: 35 }}> Attendance </Text> */}

                    {/* <View style={{
                        flex: 1, alignItems: "center", justifyContent: "center",
                        borderWidth: 0.5, marginTop: 25
                    }} >

                        <CalendarList
                            style={{
                                borderWidth: 1,
                                borderColor: 'gray',
                                height: 350,
                                width: 400,

                            }}
                            markedDates={this.getMarkedDates()} />
                    </View> */}
                    <View style={{
                        flex: 1, alignItems: "center", justifyContent: "center",
                        borderWidth: 0.5, marginTop: 25
                    }} >

                        <Calendar
                            style={{
                                borderWidth: 0.5,
                                borderColor: 'green',
                                height: 350,
                                width: 350,

                            }}

                            markedDates={this.getMarkedDates()} />
                    </View>
                    {/* <View style={{ flexDirection: 'row', marginTop: 35 }}>
                        <Icon name="circle" size={20} />
                        <Icon name="circle" size={20} />
                        <Icon name="circle" size={20} />
                    </View> */}

                    {/* <View style={{ marginTop: 35 }}>
                        <Text style={{ fontSize: 18, marginTop: 35 }}> AttendanceGraphScreen </Text>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Button title="Graphical View"
                                onPress={() => this.props.navigation.navigate('AttendanceGraphScreen')} />
                        </View>
                        <AttendanceGraphScreen />
                    </View> */}
                </View>
            </ScrollView >
        );
    }


}

const styles = StyleSheet.create({
    calendar: {
        paddingLeft: 20,
        paddingRight: 20
    },
    section: {
        backgroundColor: '#f0f4f7',
        color: '#79838a'
    },
    item: {
        padding: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e8ecf0',
        flexDirection: 'row'
    },
    itemHourText: {
        color: 'black'
    },
    itemDurationText: {
        color: 'grey',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4
    },
    itemTitleText: {
        color: 'black',
        marginLeft: 16,
        fontWeight: 'bold',
        fontSize: 16
    },
    itemButtonContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    emptyItem: {
        paddingLeft: 20,
        height: 52,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e8ecf0'
    },
    emptyItemText: {
        color: '#79838a',
        fontSize: 14
    }
});
