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


export default class LoginTest extends React.Component {


    //https://facebook.github.io/react-native/movies.json
    //https://jsonplaceholder.typicode.com/posts

    loginAction = () => {

        console.log("fetch before");
        fetch('http://192.168.1.99:8080//digitalcampus.in/ParentzApp/parentapp_login.jsp?username=6284&password=Digital@1&schoolcode=MER-BJ1920')
            .then((response) => response.json())
            .then((responseJson) => {
                alert("response");
                console.log(responseJson);
                const res = responseJson;
            }).catch((error) => {
                console.log(error);
                alert(error);
            })

        // fetch('http://192.168.1.99:8080/school.digitalcampus.in/returnjson.jsp?useName="Rusername"&password="Rpass"&schoolCode="Rscholcode"', {
        //     method: 'post',
        //     header: {
        //         'Accept': 'application/json',
        //         'Content-type': ''
        //     },
        //     body: JSON.stringify({
        //         //passing param
        //         userName: userName,
        //         password: userPassword,
        //         schoolCode: schoolCode
        //     })
        // })

        //"http://192.168.1.99:8080/school.digitalcampus.in/returnjson.jsp?userName="userName"&password="userPassword"&schoolCode="schoolCode""
        //var url = 'exampleapi/parameter?class='+this.state.classid+'&section='this.state.secid;
        //local url 
        //var url = 'http://192.168.1.99:8080/school.digitalcampus.in/returnjson.jsp?userName='+this.state.userName+'&password='+this.state.userPassword+'&schoolCode='+this.state.schoolCode;



        // var url = 'http:school.digitalcampus.in/returnjson.jsp?userName=' + this.state.userName + '&password=' + this.state.userPassword + '&schoolCode=' + this.state.schoolCode;
        // fetch(url, {
        //     method: 'post',
        //     header: {
        //         'Accept': 'application/json',
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         //passing param
        //         userName: userName,
        //         password: userPassword,
        //         schoolCode: schoolCode
        //     })
        // })
        //     .then((data) => data.json())
        //     .then((data2) => {
        //         //alert("fetch after");
        //         console.log("fetch AFTER");
        //         console.log(data2);
        //         console.log("fetch AFTER responsejSON ");
        //         //alert(data2.LOGIN);
        //         if (data2.LOGIN == "SUCCESS") {
        //             // alert("Login Successful");
        //             this.setState({ button_toggle: false });
        //         } else {
        //             // alert("Login Failed ");
        //             this.setState({ button_toggle: false });
        //         }

        //         this.setState({ loading: false });
        //         //alert(loading);
        //     })
        //     .catch((error) => {
        //         //alert("error");
        //         console.error(error);
        //     })


    }//ACTION

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'yellow' }} >
                <Text>Login Test</Text>
                <TouchableOpacity style={{
                    backgroundColor: 'red',
                    width: 300,
                    paddingVertical: 8,
                    marginVertical: 10,
                    borderRadius: 25
                }}>
                    <View>
                        <Text style={styles.buttonText} onPress={this.loginAction}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
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