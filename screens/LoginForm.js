import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Button,
    ActivityIndicator, TouchableNativeFeedback, TouchableHighlight, Alert, ScrollView
} from 'react-native';


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //userName: '6284',//local double
            //userPassword: 'Digital@1',//local double

            //userName: '4681',//local single
            //userPassword: 'gaurav',//local single

           // schoolCode: 'MER-BJ1920',//local 

            userName: '1387',//online single
            userPassword: 'weghak',//online single

            schoolCode: 'MER-KP',//online 

            // userName: '',
            // userPassword: '',
            // schoolCode: '',
            loading: false,
            button_toggle: false
        }
    }

    loginAction = () => {
        // Alert.alert(
        //     'Alert Title',
        //     'My Alert Msg',
        //     [
        //         { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        //         {
        //             text: 'Cancel',
        //             onPress: () => console.log('Cancel Pressed'),
        //             style: 'cancel',
        //         },
        //         { text: 'OK', onPress: () => console.log('OK Pressed') },
        //     ],
        //     { cancelable: false },
        // );

        console.log("LOGIN FORM ");
        const R = this.props.navigation.getParam("R");
        console.log("R " + R);

        const newState = !this.state.button_toggle;
        this.setState({ button_toggle: newState });
        console.log("ACTION");
        const { userName } = this.state;
        const { userPassword } = this.state;
        const { schoolCode } = this.state;
        const { loading } = this.state;
        this.setState({ loading: true });
        console.log("fetch before");
        console.log({ userName });
        console.log({ userPassword });
        console.log({ schoolCode });
        
        //"http://192.168.1.99:8080/school.digitalcampus.in/returnjson.jsp?userName="userName"&password="userPassword"&schoolCode="schoolCode""
        //var url = 'exampleapi/parameter?class='+this.state.classid+'&section='this.state.secid;
        //local url 
        //var url = 'http://192.168.1.99:8080/school.digitalcampus.in/returnjson.jsp?userName='+this.state.userName+'&password='+this.state.userPassword+'&schoolCode='+this.state.schoolCode;

        fetch('http://digitalcampus.in/ParentzApp/parentapp_login.jsp?username=' + this.state.userName + '&password=' + this.state.userPassword + '&schoolcode=' + this.state.schoolCode,
            {
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
            .then((response) => response.json())
            .then((responseJson) => {
                //alert("response");
                console.log(responseJson);
                console.log("=======" + responseJson.studentInfo[0]);
                console.log("N=" + responseJson.studentInfo[0].studentName);
                console.log("test-" + responseJson.test[0].A);
                console.log("test-" + responseJson.test[0].B);
                console.log("test-" + responseJson.test[0].C);
                global.student_res = JSON.stringify(responseJson);
                console.log("student_res-" + student_res);
                
                student_res=responseJson;
                console.log("student_res-" + student_res);
                if (responseJson.Login == "Success" && responseJson.count == 21) {
                    //alert("Login Successful 2");
                    this.setState({ button_toggle: false });
                }
                else if (responseJson.Login == "Success" && responseJson.count == 1) {
                    //alert("Login Successful 1");
                    this.setState({ button_toggle: false });
                    this.props.navigation.setParams({ otherParam: responseJson.studentInfo[0].studentName });
                    this.props.navigation.navigate('Dashboard', {
                        //myJSON: responseJson.studentInfo[0],
                        myJSON: responseJson,
                        Login: responseJson.Login,
                        studentName: responseJson.studentInfo[0].studentName,
                        studentId: responseJson.studentInfo[0].studentId,
                        studentRollNumber: responseJson.studentInfo[0].studentRollNumber,
                        studentImage: responseJson.studentInfo[0].studentImage,
                        //studentImage: "",
                        userName: responseJson.studentInfo[0].userName,
                        classDescription: responseJson.studentInfo[0].classDescription,
                        studentSection: responseJson.studentInfo[0].studentSection,
                        classId: responseJson.studentInfo[0].classId,
                        password: responseJson.studentInfo[0].password,
                        studentGender: responseJson.studentInfo[0].studentGender,
                        schoolName: responseJson.studentInfo[0].schoolName,
                        schoolLogo: responseJson.studentInfo[0].schoolLogo,
                        studentPhotoId: responseJson.studentInfo[0].studentPhotoId,
                        schoolCode: responseJson.studentInfo[0].schoolCode,

                    })
                    
                } else {
                    alert("Login Failed ");
                    this.setState({ button_toggle: false });
                }



            }).catch((error) => {
                console.log(error);
                alert(error);
            })

    }//ACTION

    //<ActivityIndicator size="small" color="#00ff00" />
    // <Text style={{ color: "black", fontSize: 18 }}>Parent login</Text>
    render() {
        const { button_toggle } = this.state;
        //const buttonBg = button_toggle ? "#3700b3" : "#ff00ff"; //dark purple and magenta
        const buttonBg = button_toggle ? "#2b388f" : "#3f51b5"; //dark purple and magenta
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    placeholderTextColor="grey"
                    placeholder="User Name"
                    returnKeyType="next"
                    autoCorrect={true}
                    onSubmitEditing={() => this.userPassword.focus()}
                    onChangeText={userName => this.setState({ userName })}
                />
                <TextInput style={styles.inputBox}
                    placeholderTextColor="grey"
                    placeholder="Password"
                    returnKeyType="next"
                    secureTextEntry={true}
                    ref={(input) => this.userPassword = input}
                    onSubmitEditing={() => this.schoolCode.focus()}
                    onChangeText={userPassword => this.setState({ userPassword })}
                />
                <TextInput style={styles.inputBox}
                    placeholderTextColor="grey"
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
                    borderRadius: 5,
                    borderColor: '#2b388f',
                    borderWidth: 2
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
        marginVertical: 3,
        borderColor: 'grey',
        borderWidth: 0.5
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: "white",
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