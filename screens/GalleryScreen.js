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
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator, router } from "react-navigation";
export default class GalleryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }//constructor

    //https://facebook.github.io/react-native/movies.json
    //https://jsonplaceholder.typicode.com/posts

    renderSeparator = () => {
        return (
            <View style={{ height: 1, width: '100%', backgroundColor: 'grey' }}>
            </View>
        )
    }
    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.list} onPress={() => ToastAndroid.show(item.title, ToastAndroid.SHORT)}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center' }}>
                    <View style={{
                        flex: 2, justifyContent: 'center', marginLeft: 15, backgroundColor: 'white',
                        borderColor: 'black', borderWidth: 1, borderRadius: 10, borderColor: 'white'
                    }}>
                        <Text
                            style={{
                                fontSize: 18, color: '#3f51b5', marginBottom: 1, marginTop: 1,
                                justifyContent: 'center', marginLeft: 20
                            }}
                            onPress={() => this.props.navigation.navigate('NoticesDisplayPdfScreen')} >
                            {item.title}, {item.releaseYear} AA
              </Text>
                        <Text style={{ fontSize: 14, color: '#3f51b5', marginBottom: 5, marginLeft: 20 }}>
                            {item.releaseYear}
                        </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 18, color: '#3f51b5', marginBottom: 1, marginTop: 1, justifyContent: 'center' }}>
                            <Icon name="paperclip" size={20} />
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }

    componentDidMount() {

        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    dataSource: responseJson.movies,
                    isLoading: false
                }, function () { }
                );

            }).catch((error) => {
                console.log(error)
            })

    }


    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    {/* <ActivityIndicator /> */}
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="green" />
                    </View>
                </View>
            )
        }
        //style={{ backgroundColor: 'white' }}
        return (
            <ScrollView style={{ color: "white", fontSize: 18, textAlign: 'center' }}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: "#303f9f", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
                        <Icon name="file-text" size={20} />  Gallery</Text>
                </View>
                <View>
                    <FlatList
                        //ItemSeparatorComponent={this.renderSeparator}
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={({ id }, index) => id}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
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