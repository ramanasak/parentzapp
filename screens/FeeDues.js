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

export default class FeeDues extends React.Component {
    static navigationOptions = {
        title: 'FeeDues',
    };


    constructor(props) {
        super(props);
        //this.state = { isLoading: true }
    }//constructor

    // renderSeparator = () => {
    //   return (
    //     <View style={{ height: 1, width: '100%', backgroundColor: 'grey' }}>
    //     </View>
    //   )
    // }
    // renderItem = ({ item }) => {
    //   return (
    //     <TouchableOpacity style={styles.list} onPress={() => ToastAndroid.show(item.type, ToastAndroid.SHORT)}>
    //       <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center' }}>
    //         <View style={{
    //           flex: 2, justifyContent: 'center', marginLeft: 15, backgroundColor: 'white',
    //           borderColor: 'black', borderWidth: 1, borderRadius: 10, borderColor: 'white'
    //           , justifyContent: 'center', flexDirection: 'row'
    //         }}>


    //           <View style={{
    //             flex: 1, backgroundColor: 'white'
    //             , justifyContent: 'center', flexDirection: 'row'
    //           }}>
    //             <CheckBox />
    //           </View>
    //           <View style={{
    //             flex: 3, backgroundColor: 'white'
    //             , justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center'
    //           }}>
    //             <Text
    //               style={{
    //                 fontSize: 18, color: '#3f51b5'
    //               }}
    //               onPress={() => this.props.navigation.navigate('NoticesDisplayPdfScreen')} >{item.type}
    //             </Text>
    //           </View>
    //           <View style={{
    //             flex: 2, backgroundColor: 'white'
    //             , justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', marginRight: 15
    //           }}>
    //             <Text
    //               style={{
    //                 fontSize: 18, color: '#3f51b5'
    //               }}
    //               onPress={() => this.props.navigation.navigate('NoticesDisplayPdfScreen')} >RS.{item.Amount}
    //             </Text>
    //           </View>
    //           {/* <View style={{
    //             flex: 6, backgroundColor: 'white'
    //             , justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-start'
    //           }}>
    //             <Text
    //               style={{
    //                 fontSize: 18, color: '#3f51b5'
    //               }}
    //               onPress={() => this.props.navigation.navigate('NoticesDisplayPdfScreen')} >{item.type} {item.Amount}
    //             </Text>
    //           </View> */}



    //           {/* <Text style={{ fontSize: 14, color: '#3f51b5', marginBottom: 5, marginLeft: 20 }}>
    //             {item.Amount}
    //           </Text> */}
    //         </View>
    //       </View>
    //     </TouchableOpacity >

    //   )
    // }

    // componentDidMount() {

    //   return fetch('http://school.digitalcampus.in/ParentzApp/feeDetailsTermWiseJSON.jsp')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       console.log(responseJson);
    //       this.setState({
    //         dataSource: responseJson.feeList,
    //         isLoading: false
    //       }, function () { }
    //       );

    //     }).catch((error) => {
    //       console.log(error);
    //       alert(error);
    //     })

    // }//compo


    render() {
        return (
            <View style={{ flex: 6 }}>
                {/* <Text>welcome </Text> */}
                {/* <Button title="Proceed"
              onPress={() => this.props.navigation.navigate('PaymentMode')} /> */}
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    {/* <FlatList
                //ItemSeparatorComponent={this.renderSeparator}
                data={this.state.dataSource}
                renderItem={this.renderItem}
                keyExtractor={({ id }, index) => id}
                ItemSeparatorComponent={this.renderSeparator}
              /> */}

                    <View style={{ justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                            <CheckBox />
                        </View>
                        <View style={{ flex: 3, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                            <Text style={{ justifyContent: "center", fontSize: 20 }}>
                                Transport Fee </Text>
                        </View>
                        <View style={{ flex: 2, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                            <Text style={{ alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                                Rs.500 </Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                            <CheckBox />
                        </View>
                        <View style={{ flex: 3, alignItems: "flex-start", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                            <Text style={{ justifyContent: "center", fontSize: 20 }}>
                                Tution Fee </Text>
                        </View>
                        <View style={{ flex: 2, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                            <Text style={{ alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                                Rs.100 </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                            <CheckBox />
                        </View>
                        <View style={{ flex: 3, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                            <Text style={{ justifyContent: "center", fontSize: 20 }}>
                                Exam Fee </Text>
                        </View>
                        <View style={{ flex: 2, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                            <Text style={{ alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                                Rs.500 </Text>
                        </View>
                    </View>



                    {/* <Button title="Fee2"
                onPress={() => this.props.navigation.navigate('Fee2')} /> */}
                </View>
                <Button title="Proceed"
                    onPress={() => this.props.navigation.navigate('PaymentMode')} />
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
