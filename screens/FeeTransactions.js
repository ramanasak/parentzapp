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

export default class FeeTransactions extends React.Component {
    static navigationOptions = {
        title: 'Fee Transactions',
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'column', flex: 2, alignItems: "center", justifyContent: "space-around" }}>
                            <Text style={{ fontSize: 16, textAlign: 'center' }}>Next Fee To Pay  </Text>
                            <Text style={{ fontSize: 16, textAlign: 'center' }}>Amount : 50000 </Text>
                            <Text style={{ fontSize: 16, textAlign: 'center' }}>Due on : 9-6-2019 </Text>
                            <Button title="Pay Now" color="#2d8d0b"
                                onPress={() => this.props.navigation.navigate('FeeDues')} />
                        </View>

                        <View style={{
                            flexDirection: 'column', flex: 4, alignItems: "center",
                            borderColor: "skyblue", borderWidth: 1
                        }}>
                            <ScrollView>
                                {/* <View style={{ backgroundColor: "#008ff8" }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color: "white" }} ></Text>
                  </View> */}
                                <View style={{ backgroundColor: "#199af8", width: Dimensions.get('window').width }} >
                                    <Text style={{ color: "white", fontSize: 20, textAlign: 'center', marginBottom: 10, marginTop: 10 }}>
                                        <Icon name="briefcase" size={20} />  Fee Payments History </Text>
                                </View>
                                <View style={{ backgroundColor: "white" }}>




                                    <View style={{ justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                                            {/* <CheckBox />  */}
                                            <Text style={{ justifyContent: "center", fontSize: 18 }}> 1 </Text>
                                        </View>
                                        <View style={{ flex: 3, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                                            <Text style={{ justifyContent: "center", fontSize: 18 }}>
                                                Transport Fee (10-09-2019)</Text>
                                        </View>
                                        <View style={{ flex: 2, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                                            <Text style={{ alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                                                Rs.500 </Text>
                                        </View>
                                    </View>

                                    <View style={{ justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                                            {/* <CheckBox />  */}
                                            <Text style={{ justifyContent: "center", fontSize: 18 }}> 2 </Text>
                                        </View>
                                        <View style={{ flex: 3, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                                            <Text style={{ justifyContent: "center", fontSize: 18 }}>
                                                Exam Fee (09-09-2019)</Text>
                                        </View>
                                        <View style={{ flex: 2, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                                            <Text style={{ alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                                                Rs.500 </Text>
                                        </View>
                                    </View>


                                </View>
                            </ScrollView>

                        </View>
                    </View>
                </View>
            </View>

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