import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Button,
    ActivityIndicator, TouchableNativeFeedback, TouchableHighlight, Alert
} from 'react-native';


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userPassword: '',
            schoolCode: '',
            loading: false,
            button_toggle: false
        }
    }

    loginAction = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        );
        const newState = !this.state.button_toggle;
        this.setState({ button_toggle: newState });
        //alert(userName);
        // alert("ok");
        console.log("ACTION");
        // const {userName,userPassword,schoolCode}=this.state;
        const { userName } = this.state;
        const { userPassword } = this.state;
        const { schoolCode } = this.state;
        const { loading } = this.state;
        this.setState({ loading: true });
        // alert(loading);
        //alert(userName);
        //alert(userName);
        console.log("fetch before");
        console.log({ userName });
        console.log({ userPassword });
        console.log({ schoolCode });
        // fetch('http://192.168.1.99:8080/school.digitalcampus.in/returnjson.jsp?useName="Rusername"&password="Rpass"&schoolCode="Rscholcode"',{
        //     method:'post',
        //     header:{
        //         'Accept':'application/json',
        //         'Content-type':''
        //     },
        //     body:JSON.stringify({
        //         //passing param
        //         userName:userName,
        //         password:userPassword,
        //         schoolCode:schoolCode
        //     })
        // })

        //"http://192.168.1.99:8080/school.digitalcampus.in/returnjson.jsp?userName="userName"&password="userPassword"&schoolCode="schoolCode""
        //var url = 'exampleapi/parameter?class='+this.state.classid+'&section='this.state.secid;
        //local url 
        //var url = 'http://192.168.1.99:8080/school.digitalcampus.in/returnjson.jsp?userName='+this.state.userName+'&password='+this.state.userPassword+'&schoolCode='+this.state.schoolCode;
        var url = 'http:school.digitalcampus.in/returnjson.jsp?userName=' + this.state.userName + '&password=' + this.state.userPassword + '&schoolCode=' + this.state.schoolCode;
        fetch(url, {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                //passing param
                userName: userName,
                password: userPassword,
                schoolCode: schoolCode
            })
        })
            .then((data) => data.json())
            .then((data2) => {
                //alert("fetch after");
                console.log("fetch AFTER");
                console.log(data2);
                console.log("fetch AFTER responsejSON ");
                //alert(data2.LOGIN);
                if (data2.LOGIN == "SUCCESS") {
                    // alert("Login Successful");
                    this.setState({ button_toggle: false });
                } else {
                    // alert("Login Failed ");
                    this.setState({ button_toggle: false });
                }

                this.setState({ loading: false });
                //alert(loading);
            })
            .catch((error) => {
                //alert("error");
                console.error(error);
            })

        /*
         //   ?useName="Rusername"&password="Rpass"&schoolCode="Rschoaaaaalcode"
             fetch('http://192.168.1.99:8080/school.digitalcampus.in/returnjson.jsp')
            //    
            .then((data)=>data.json())
            .then((data2)=>{
                console.log("fetch AFTER");
                console.log(data2);
                console.log("fetch AFTER responsejSON "); 
                //alert(responseJson);
                // if(responseJson=="success"){
                //     alert("login successful");
                // }else{
                //     alert("login failed");
                // }
            })
            .catch((error)=>{
                console.error(error);
            })
            //working
        */
        // alert("loginAction END");
    }//ACTION

    //<ActivityIndicator size="small" color="#00ff00" />

    render() {
        const { button_toggle } = this.state;
        const buttonBg = button_toggle ? "#3700b3" : "#ff00ff"; //dark purple and magenta
        return (
            <View style={styles.container}>
                <Text style={{ color: "#ffffff", fontSize: 18 }}>Parent login</Text>
                <TextInput style={styles.inputBox}
                    placeholderTextColor="#ffffff"
                    placeholder="User Name"
                    returnKeyType="next"
                    autoCorrect={true}
                    onSubmitEditing={() => this.userPassword.focus()}
                    onChangeText={userName => this.setState({ userName })}
                />
                <TextInput style={styles.inputBox}
                    placeholderTextColor="#ffffff"
                    placeholder="Password"
                    returnKeyType="next"
                    secureTextEntry={true}
                    ref={(input) => this.userPassword = input}
                    onSubmitEditing={() => this.schoolCode.focus()}
                    onChangeText={userPassword => this.setState({ userPassword })}
                />
                <TextInput style={styles.inputBox}
                    placeholderTextColor="#ffffff"
                    placeholder="School Code"
                    autoCorrect={true}
                    returnKeyType="go"
                    ref={(input) => this.schoolCode = input}
                    onChangeText={schoolCode => this.setState({ schoolCode })}
                />
                <TouchableOpacity style={{
                    backgroundColor: buttonBg,
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
            // style={styles.customButton} color='#ff00ff'
            // <Button title="LOGIN" style={styles.customButton} onPress={this.loginAction}
            //     accessibilityLabel="Click to Login" color='#ff00ff' />

            // /* <TouchableOpacity style={styles.button}>
            //     <Text style={styles.buttonText} onPress={this.loginAction}>Login</Text>
            //     <Button title="signup" onPress={this.loginAction} color='megenta'/>
            // </TouchableOpacity> */

            /*<TouchableOpacity>
    <View style={styles.customButton} >
        <Button title="LOGIN" onPress={this.loginAction} accessibilityLabel="Click to Login" color='#ff00ff' />
    </View>
</TouchableOpacity>*/
            //
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6200ee",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#ffffff",
        marginVertical: 10,
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