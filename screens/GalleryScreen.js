import React, { Component } from 'react';
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
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator, router } from "react-navigation";
export default class GalleryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }//constructor

    //https://facebook.github.io/react-native/movies.json
    //https://jsonplaceholder.typicode.com/posts
    renderItem = ({ item }) => {
        var ImageUrl = "http://" + item.location;
        return (
            <TouchableOpacity style={styles.list}
                onPress={() => ToastAndroid.show(item.eventName, ToastAndroid.SHORT)}>
                {/* styles.container */}
                {/* { width: 100, height: 200, marginTop: 5, marginBottom: 5, borderRadius: 37.5, marginLeft: 15 } */}
                <View style={{
                    backgroundColor: 'white',
                    borderColor: 'green', marginBottom: 5, marginTop: 10, borderWidth: 0.5
                }}>
                    <Image
                        source={{ uri: ImageUrl }}
                        style={styles.imageView2}
                    />
                    {/* Event Name :  */}
                    <Text style={{ marginTop: 2, color: '#00205b', fontSize: 18, fontWeight: '900' }}>   {item.eventName}</Text>
                    <Text style={{
                        marginTop: 2, marginBottom: 8, color: '#0f4c81', fontSize: 18, fontWeight: '500',
                        flexWrap: "wrap"
                    }}>  {item.description} </Text>

                </View>


                {/* <View style={{
                    flex: 1, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center',
                    width: Dimensions.get("window").width
                }}>
                    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: '#3f51b5', marginBottom: 1, marginTop: 1, justifyContent: 'center' }}>
                            <Icon name="message-square" size={20} color={"#004ea8"} />
                        </Text>
                    </View>
                    <Image
                        source={{ uri: ImageUrl }}
                        style={{
                            width: 50,
                            height: 50,
                            marginTop: 5,
                            marginBottom: 5,
                            borderRadius: 37.5,
                            marginLeft: 15
                        }}
                    />
                    <View style={{
                        flex: 11, justifyContent: 'flex-start', marginLeft: 1, backgroundColor: 'white',
                        borderColor: 'black', borderWidth: 1, borderRadius: 10, borderColor: 'white',
                    }}>
                        <Text
                            style={{
                                fontSize: 18, color: 'black', marginBottom: 1, marginTop: 1,
                                justifyContent: 'center', marginLeft: 2
                            }}
                        >
                            {item.eventName}
                        </Text>

                        <Text style={{ fontSize: 14, color: 'green', marginBottom: 5, marginLeft: 2, flexWrap: "wrap" }}>
                            {item.description}
                        </Text>
                    </View> */}


                {/* <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 18, color: '#3f51b5', marginBottom: 1, marginTop: 1, justifyContent: 'center' }}>
                            {/* <Icon name="paperclip" size={20} color={"#004ea8"} 
                        </Text>
                    </View> */}
                {/* </View> */}
            </TouchableOpacity >

        )
    }
    componentDidMount() {

        return fetch("http://www.digitalcampus.in/ParentzApp/events.jsp?schoolCode=" + schoolCode)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("events");
                console.log(responseJson);
                this.setState({
                    dataSource: responseJson.events,
                    isLoading: false
                }, function () { }
                );
                console.log("dataSource =" + this.state.dataSource);
            }).catch((error) => {
                console.log(error)
            })
    }//compo




    render() {

        // if (this.state.isLoading) {
        //     return (
        //         <View style={{ flex: 1, padding: 20 }}>
        //             {/* <ActivityIndicator /> */}
        //             <View style={[styles.container, styles.horizontal]}>
        //                 <ActivityIndicator size="large" color="green" />
        //             </View>
        //         </View>
        //     )
        // }
        //style={{ backgroundColor: 'white' }}
        return (
            <ScrollView style={{ color: "white", fontSize: 18, textAlign: 'center' }}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: "#303f9f", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
                        <Icon name="instagram" size={20} />  Event Gallery</Text>
                </View>
                <ScrollView style={{ flex: 1, alignitems: 'center', backgroundColor: 'white' }}>


                    <FlatList
                        //ItemSeparatorComponent={this.renderSeparator}
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        //keyExtractor={({ id }, index) => id}
                        keyExtractor={item => item.eventId}
                    //ItemSeparatorComponent={this.renderSeparator}
                    />






                    {/* <Image style={styles.imageView2} source={require('./../galleryimages/17.png')} />
                    <Image style={styles.imageView2} source={require('./../galleryimages/2.jpg')} />
                    <Image style={styles.imageView2} source={require('./../galleryimages/3.jpg')} />
                    <Image style={styles.imageView2} source={require('./../galleryimages/4.jpg')} />
                    <Image style={styles.imageView2} source={require('./../galleryimages/5.jpg')} />
                    <Image style={styles.imageView2} source={require('./../galleryimages/6.jpg')} />
                    <Image style={styles.imageView2} source={require('./../galleryimages/7.jpg')} />
                    <Image style={styles.imageView2} source={require('./../galleryimages/8.jpg')} />
                    <Image style={styles.imageView2} source={require('./../galleryimages/9.jpg')} />
                    <Image style={styles.imageView2} source={require('./../galleryimages/10.jpg')} />
                    <Image style={styles.imageView2} source={require('./../galleryimages/11.jpg')} /> */}
                </ScrollView>


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
        //marginTop: 15,
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
        width: Dimensions.get("window").width,
        height: 200,
        marginTop: 1,
        marginBottom: 8,
        //borderRadius: 37.5,
        marginLeft: 5,
        marginRight: 5,
        flex: 1
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