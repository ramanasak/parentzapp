/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
    Dimensions,
    Switch, CheckBox,
    modal
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
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {
    createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator,
    createBottomTabNavigator, createMaterialTopTabNavigator, router
} from "react-navigation";

import StudentInfoScreen from './StudentInfoScreen';
export default class DashboardScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            button_toggle: false
        }
    }

    colorChange = () => {
        alert("loginAction");
        const newState = !this.state.button_toggle;
        this.setState({ button_toggle: newState });
    }

    render() {
        const { button_toggle } = this.state;
        const buttonBg = button_toggle ? "#3700b3" : "#ff00ff"; //dark purple and magenta
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <View style={{ backgroundColor: 'white', alignSelf: 'stretch' }}>
                    <View style={{ backgroundColor: 'white', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 18 }}>
                            <Icon name="award" size={20} /> VERSION DEMO SCHOOL</Text>
                    </View>
                </View>
                <StudentInfoScreen />







                <View style={{ backgroundColor: 'white', marginTop: 30 }}>
                    <TouchableOpacity style={styles.menuButtons}>
                        <View>
                            {/* <Text style={styles.buttonText} onPress={this.loginAction}>Login</Text> */}
                            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Notices')} >
                                <Icon name="file-text" size={20} />   Notices</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButtons}>
                        <View>
                            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Gallery')} >
                                <Icon name="film" size={20} />   Gallery</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButtons}>
                        <View>
                            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Attendance')} >
                                <Icon name="calendar" size={20} />   Attendance</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButtons}>
                        <View>
                            <Text style={styles.buttonText}
                                onPress={() => this.props.navigation.navigate('Welcome')}><Icon name="bar-chart-2" size={20} />   Progress Report</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButtons}>
                        <View>
                            <Text style={styles.buttonText}><Icon name="send" size={20} />
                                Communication</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButtons}>
                        <View>

                            <Text style={styles.buttonText}
                                onPress={() => this.props.navigation.navigate('Fee')} >
                                <Icon name="briefcase" size={20} />   Fee  Payment</Text>
                            {/* <Icon name="dollar-sign" size={20} />
              <Icon name="credit-card" size={20} /> */}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButtons}>
                        <View>
                            <Text style={styles.buttonText}><Icon name="book" size={20} />   Digital Campus Diary </Text>
                            {/* <Icon name="clipboard" size={20} />  */}
                        </View>
                    </TouchableOpacity>
                </View>

            </View >
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
        marginTop: 5,
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
    PModeButtons: {
        backgroundColor: "#199af8",
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