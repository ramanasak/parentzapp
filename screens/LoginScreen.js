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
    Switch, CheckBox,
    Modal,
    TouchableHighlight
} from 'react-native';


export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
        //const studentCount = 0;

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
            <TouchableOpacity style={styles.list} onPress={() => ToastAndroid.show(item.type, ToastAndroid.SHORT)}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center' }}>
                    <View style={{
                        flex: 2, justifyContent: 'center', marginLeft: 15, backgroundColor: 'white',
                        borderColor: 'black', borderWidth: 1, borderRadius: 10, borderColor: 'white'
                    }}>
                        <Text
                            style={{
                                fontSize: 18, color: '#3f51b5', marginBottom: 1, marginTop: 1,
                                justifyContent: 'center', marginLeft: 20
                            }}  >
                            {item.id}, {item.type}
                        </Text>
                        <Text style={{ fontSize: 14, color: '#3f51b5', marginBottom: 5, marginLeft: 20 }}>
                            {item.Amount}
                        </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 18, color: '#3f51b5', marginBottom: 1, marginTop: 1, justifyContent: 'center' }}>

                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }

    // componentDidMount() {

    //     return fetch('https://facebook.github.io/react-native/movies.json')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             console.log(responseJson);
    //             this.setState({
    //                 dataSource: responseJson.movies,
    //                 isLoading: false
    //             }, function () { }
    //             );

    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // }//compo

    // componentDidMount() {
    //     console.log("responseJson");
    //     return fetch('http://192.168.1.99:8080//digitalcampus.in/ParentzApp/parentapp_login.jsp?username=11350&password=Digital@123&schoolcode=VERSION-DEMO')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             //alert("response");
    //             console.log(responseJson);
    //             const res = responseJson;
    //             if (responseJson.login == "success" && responseJson.count == 2) {
    //                 //alert("Login Successful");
    //                 //this.setState({ button_toggle: false });
    //                 this.props.navigation.navigate('SiblingSelect', {
    //                     studentCount: responseJson.count,
    //                     myJSON: responseJson,
    //                     siblings: responseJson.siblings,
    //                     res: res
    //                 })
    //             } else {
    //                 alert("Login Failed ");
    //                 // this.setState({ button_toggle: false });
    //             }
    //             this.setState({
    //                 dataSource: responseJson.siblings,
    //                 isLoading: false
    //             }, function () { }
    //             );

    //         }).catch((error) => {
    //             console.log(error);
    //             alert(error);
    //         })
    // }




    // componentDidMount() {
    //   return fetch('https://facebook.github.io/react-native/movies.json')
    //     .then((response) => response.json())
    //     .then((responseJson) => {

    //       this.setState({
    //         isLoading: false,
    //         dataSource: responseJson.movies,
    //       }, function () {

    //       });

    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }

    // render() {
    //   // if (this.state.isLoading == true) {
    //   //   return (
    //   //     <View Style={StyleSheet.container}>
    //   //       <ActivityIndicator size="Large" animating />
    //   //     </View>
    //   //   )
    //   // } else {
    //   return (
    //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
    //       <Text>Notice Screen</Text>
    //       {/* <Button title="Go to Details"
    //                 onPress={() => this.props.navigation.navigate('Details')} /> 
    //                  //data={this.state.dataSource}
    //                  */}

    //       {/* <FlatList
    //           data={[{ key: 'a' }, { key: 'b' }]}
    //           renderItem={({ item }) => <Text>{item.key}</Text>}
    //         /> */}
    //       <FlatList
    //         data={this.state.dataSource}
    //         renderItem={this.state.renderItem}
    //       />
    //     </View>
    //   );
    //   //}else
    // }

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
                {/* <StudentInfoScreen /> */}
                {/* <View style={{ backgroundColor: 'blue', flexDirection: 'row', flex: 1 }}>
              <View style={{ backgroundColor: 'red', flexDirection: 'row', flex: 1 }}>
                <View style={{ backgroundColor: 'orange', flexDirection: 'column', flex: 1 }}>
                  <Text style={{ color: "#303f9f", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
                    <Icon name="file-text" size={20} />  test</Text>
                  <Text style={{ color: "#303f9f", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
                    <Icon name="file-text" size={20} />  test</Text>
                </View>
              </View>
              <View style={{ backgroundColor: 'yellow', flexDirection: 'row', flex: 1 }}>
                <Text style={{ color: "#303f9f", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
                  <Icon name="file-text" size={20} />  test</Text>
              </View>
            </View> */}
            </ScrollView>
        );
    }

}//test


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 5,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#ffffff",
        marginVertical: 5,
        borderColor: 'grey',
        borderWidth: 1,
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
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: "#ffffff",
        textAlign: "center",
    },
    button: {
        backgroundColor: '#89abc6',
        borderRadius: 25,
        width: 300,
        paddingVertical: 12,
        marginVertical: 10,
        // fontWeight: '500',
        // color: "#ffffff",
        // fontSize: 16,
    },
    customButton: {
        width: 300,
        backgroundColor: '#ff00ff',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#ffffff",
        marginVertical: 10,
    },
    loginButton: {
        width: 300,
        backgroundColor: '#ff00ff',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#ffffff",
        marginVertical: 10,
    }
});