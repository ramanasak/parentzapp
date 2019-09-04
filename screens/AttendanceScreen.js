import React, { Fragment } from 'react';
import {
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
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Feather';
import Pdf from 'react-native-pdf';
import StudentInfoScreen from './StudentInfoScreen';
import AttendanceGraphScreen from './AttendanceGraphScreen';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class AttendanceScreen extends React.Component {
    static navigationOptions = {
        title: 'Attendance',
    };
    render() {
        return (
            <ScrollView style={{ color: "white", fontSize: 18, textAlign: 'center' }}>
                <View>
                    <StudentInfoScreen />
                </View>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

                    <Text style={{ fontSize: 18, marginTop: 35 }}> Attendance </Text>
                    {/* <Button title="SignUp"
            onPress={() => alert("signup")} /> */}
                    <View >
                        <Calendar
                            //Collection of dates that have to be marked.Default = {}
                            markedDates={{
                                '2019-08-21': { selected: true, marked: true, selectedColor: 'green' },
                                '2012-05-17': { marked: true },
                                '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                                '2012-05-19': { disabled: true, disableTouchEvent: true }
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 35 }}>
                        {/* <Text style={{ fontSize: 18, marginTop: 35 }}> AttendanceGraphScreen </Text> */}
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Button title="Graphical View"
                                onPress={() => this.props.navigation.navigate('AttendanceGraphScreen')} />
                        </View>
                        {/* <AttendanceGraphScreen /> */}
                    </View>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '900',
        color: "#fff",
        textAlign: "center",
    },
    container: {
        backgroundColor: "#fff",
        marginTop: 15,
        //justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    menuButtons: {
        backgroundColor: "#3f51b5",
        width: 300,
        paddingVertical: 8,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#2b388f"
    },
    list: {
        backgroundColor: "white",
        width: 500,
        paddingVertical: 0,
        marginVertical: 0,
        borderRadius: 10
    },
    imageView: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    imageView2: {
        width: 75,
        height: 75,
        borderRadius: 37.5,
        marginLeft: 15
    },
    pdfcontainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    }
});