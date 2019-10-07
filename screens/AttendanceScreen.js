// import React, { Fragment } from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     ScrollView,
//     View,
//     Text,
//     StatusBar,
//     Button,
//     FlatList,
//     ActivityIndicator,
//     TouchableOpacity,
//     ToastAndroid,
//     Image,
//     Dimensions
// } from 'react-native';
// import {
//     Header,
//     LearnMoreLinks,
//     Colors,
//     DebugInstructions,
//     ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import Icon from 'react-native-vector-icons/Feather';
// import Pdf from 'react-native-pdf';
// import StudentInfoScreen from './StudentInfoScreen';
// import AttendanceGraphScreen from './AttendanceGraphScreen';
// import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

// export default class AttendanceScreen extends React.Component {
//     static navigationOptions = {
//         //title: 'Attendance',
//     };
//     //http://digitalcampus.in/AppJSPFile/ParentAttendanceReport.jsp?username=1387&password=weghak&schoolcode=MER-KP
//     //https://github.com/wix/react-native-calendars/blob/master/example/src/screens/expandableCalendar.js
//     render() {
//         return (
//             <ScrollView style={{ color: "white", fontSize: 18, textAlign: 'center' }}>
//                 <View>
//                     <StudentInfoScreen />
//                 </View>

//                 <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

//                     <Text style={{ fontSize: 18, marginTop: 35 }}> Attendance </Text>
//                     {/* <Button title="SignUp"
//             onPress={() => alert("signup")} /> */}
//                     <View >
//                         <Calendar
//                             //Collection of dates that have to be marked.Default = {}
//                             markedDates={{
//                                 '2019-08-21': { selected: true, marked: true, selectedColor: 'green' },
//                                 '2012-05-17': { marked: true },
//                                 '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
//                                 '2012-05-19': { disabled: true, disableTouchEvent: true }
//                             }}
//                         />
//                     </View>
//                     <View style={{ marginTop: 35 }}>
//                         {/* <Text style={{ fontSize: 18, marginTop: 35 }}> AttendanceGraphScreen </Text> */}
//                         <View style={{ alignItems: "center", justifyContent: "center" }}>
//                             <Button title="Graphical View"
//                                 onPress={() => this.props.navigation.navigate('AttendanceGraphScreen')} />
//                         </View>
//                         {/* <AttendanceGraphScreen /> */}
//                     </View>
//                 </View>
//             </ScrollView>
//         );
//     }
// }


// const styles = StyleSheet.create({
//     scrollView: {
//         backgroundColor: Colors.lighter,
//     },
//     engine: {
//         position: 'absolute',
//         right: 0,
//     },
//     body: {
//         backgroundColor: Colors.white,
//     },
//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//         color: Colors.black,
//     },
//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//         color: Colors.dark,
//     },
//     highlight: {
//         fontWeight: '700',
//     },
//     footer: {
//         color: Colors.dark,
//         fontSize: 12,
//         fontWeight: '600',
//         padding: 4,
//         paddingRight: 12,
//         textAlign: 'right',
//     },
//     buttonText: {
//         fontSize: 18,
//         fontWeight: '900',
//         color: "#fff",
//         textAlign: "center",
//     },
//     container: {
//         backgroundColor: "#fff",
//         marginTop: 15,
//         //justifyContent: "center",
//         alignItems: "center",
//         flex: 1,
//     },
//     menuButtons: {
//         backgroundColor: "#3f51b5",
//         width: 300,
//         paddingVertical: 8,
//         marginVertical: 10,
//         borderRadius: 5,
//         borderWidth: 1,
//         borderColor: "#2b388f"
//     },
//     list: {
//         backgroundColor: "white",
//         width: 500,
//         paddingVertical: 0,
//         marginVertical: 0,
//         borderRadius: 10
//     },
//     imageView: {
//         width: 70,
//         height: 70,
//         borderRadius: 50
//     },
//     imageView2: {
//         width: 75,
//         height: 75,
//         borderRadius: 37.5,
//         marginLeft: 15
//     },
//     pdfcontainer: {
//         flex: 1,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         marginTop: 25,
//     },
//     pdf: {
//         flex: 1,
//         width: Dimensions.get('window').width,
//     }
// });







import _ from 'lodash';
import React, { Component } from 'react';
import {
    Platform,
    Alert,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button
} from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider, Calendar } from 'react-native-calendars';


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

const ITEMS = [
    { title: dates[0], data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }] },
    { title: dates[1], data: [{ hour: '4pm', duration: '1h', title: 'Pilates ABC' }, { hour: '5pm', duration: '1h', title: 'Vinyasa Yoga' }] },
    { title: dates[2], data: [{ hour: '1pm', duration: '1h', title: 'Ashtanga Yoga' }, { hour: '2pm', duration: '1h', title: 'Deep Streches' }, { hour: '3pm', duration: '1h', title: 'Private Yoga' }] },
    { title: dates[3], data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }] },
    { title: dates[4], data: [{}] },
    { title: dates[5], data: [{ hour: '9pm', duration: '1h', title: 'Pilates Reformer' }, { hour: '10pm', duration: '1h', title: 'Ashtanga' }, { hour: '11pm', duration: '1h', title: 'TRX' }, { hour: '12pm', duration: '1h', title: 'Running Group' }] },
    { title: dates[6], data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }] },
    { title: dates[7], data: [{}] },
    { title: dates[8], data: [{ hour: '9pm', duration: '1h', title: 'Pilates Reformer' }, { hour: '10pm', duration: '1h', title: 'Ashtanga' }, { hour: '11pm', duration: '1h', title: 'TRX' }, { hour: '12pm', duration: '1h', title: 'Running Group' }] },
    { title: dates[9], data: [{ hour: '1pm', duration: '1h', title: 'Ashtanga Yoga' }, { hour: '2pm', duration: '1h', title: 'Deep Streches' }, { hour: '3pm', duration: '1h', title: 'Private Yoga' }] },
    { title: dates[10], data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }] }
];

export default class AttendanceScreen extends Component {

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

    renderItem = ({ item }) => {
        if (_.isEmpty(item)) {
            return this.renderEmptyItem();
        }

        return (
            <TouchableOpacity
                onPress={() => this.itemPressed(item.title)}
                style={styles.item}
            >
                <View>
                    <Text style={styles.itemHourText}>{item.hour}</Text>
                    <Text style={styles.itemDurationText}>{item.duration}</Text>
                </View>
                <Text style={styles.itemTitleText}>{item.title}</Text>
                <View style={styles.itemButtonContainer}>
                    <Button title={'Info'} onPress={this.buttonPressed} />
                </View>
            </TouchableOpacity>
        );
    }

    getMarkedDates = () => {
        const marked = {};
        ITEMS.forEach(item => {
            // only mark dates with data
            if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
                marked[item.title] = { marked: true, dotColor: 'red' };
            }
        });
        return marked;
    }

    getTheme = () => {
        const themeColor = '#0059ff';
        const lightThemeColor = '#e6efff';
        const disabledColor = '#a6acb1';
        const black = '#20303c';
        const white = '#ffffff';

        return {
            // arrows
            arrowColor: black,
            arrowStyle: { padding: 0 },
            // month
            monthTextColor: black,
            textMonthFontSize: 16,
            textMonthFontFamily: 'HelveticaNeue',
            textMonthFontWeight: 'bold',
            // day names
            textSectionTitleColor: black,
            textDayHeaderFontSize: 12,
            textDayHeaderFontFamily: 'HelveticaNeue',
            textDayHeaderFontWeight: 'normal',
            // today
            todayBackgroundColor: lightThemeColor,
            todayTextColor: themeColor,
            // dates
            dayTextColor: themeColor,
            textDayFontSize: 18,
            textDayFontFamily: 'HelveticaNeue',
            textDayFontWeight: '500',
            textDayStyle: { marginTop: Platform.OS === 'android' ? 2 : 4 },
            // selected date
            selectedDayBackgroundColor: themeColor,
            selectedDayTextColor: white,
            // disabled date
            textDisabledColor: disabledColor,
            // dot (marked date)
            dotColor: themeColor,
            selectedDotColor: white,
            disabledDotColor: disabledColor,
            dotStyle: { marginTop: -2 }
        };
    }

    render() {
        return (


            <Calendar
                //Collection of dates that have to be marked.Default = {}
                // markedDates={{
                //     '2019-08-21': { selected: true, marked: true, selectedColor: 'green' },
                //     '2012-05-17': { marked: true },
                //     '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                //     '2012-05-19': { disabled: true, disableTouchEvent: true }
                // }}
                markedDates={this.getMarkedDates()}
            />




            // <CalendarProvider
            //     date={ITEMS[0].title}
            //     onDateChanged={this.onDateChanged}
            //     onMonthChange={this.onMonthChange}
            //     theme={{ todayButtonTextColor: '#0059ff' }}
            //     showTodayButton
            //     disabledOpacity={0.6}
            // // todayBottomMargin={16}
            // >
            // <ExpandableCalendar
            //     // horizontal={false}
            //     // hideArrows
            //     // disablePan
            //     // hideKnob
            //     // initialPosition={ExpandableCalendar.positions.OPEN}
            //     firstDay={1}
            //     markedDates={this.getMarkedDates()} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
            //     theme={this.getTheme()}
            //leftArrowImageSource={require('../img/previous.png')}
            //rightArrowImageSource={require('../img/next.png')}
            // calendarStyle={styles.calendar}
            // headerStyle={styles.calendar} // for horizontal only
            // />
            // <AgendaList
            //     sections={ITEMS}
            //     extraData={this.state}
            //     renderItem={this.renderItem}
            // // sectionStyle={styles.section}
            // />
            // </CalendarProvider >
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
