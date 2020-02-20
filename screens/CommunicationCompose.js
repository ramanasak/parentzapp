import React, { Component } from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text,
    ScrollView,
    TouchableHighlight,
    ActivityIndicator,
    TouchableOpacity,
    FlatList,
    Dimensions,
    CheckBox,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Apples', 'Oranges', 'Pears']
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

const renderLabel = (label, style) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* <Image style={{ width: 42, height: 42 }} source={{ uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S' }} /> */}
            <View style={{ marginLeft: 10 }}>
                <Text style={style}>{label}</Text>
            </View>
        </View>
    )
}






export default class CommunicationCompose extends Component {
    state = { selectedFruits: [] }

    onSelectionsChange = (selectedFruits) => {
        // selectedFruits is array of { label, value }
        this.setState({ selectedFruits })
    }

    componentDidMount() {
        console.log("http://www.digitalcampus.in/ParentzApp/communication.jsp");
        //return fetch("http://digitalcampus.in/ParentzApp/communicationCompose.jsp?username=11352&schoolcode=VERSION-DEMO&classNo=" + classId + "&section=" + studentSection)
        return fetch("http://www.digitalcampus.in/ParentzApp/communication.jsp?studentId="
            + studentId + "&schoolCode=" + schoolCode + "&classNo=" + classId + "&section=" + studentSection)
            // return fetch("http://www.digitalcampus.in/ParentzApp/communication.jsp")
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("communication Compose");
                console.log(responseJson);
                //alert("ok");
                this.setState({
                    dataSourceT: responseJson.teacherArray,
                    dataSourceA: responseJson.adminArray,
                    isLoading: false
                }, function () { }
                );

            }).catch((error) => {
                console.log(error)
            })
    }//compo

    renderTeachers = () => {


        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                {/* <SelectMultiple
                    items={this.state.dataSourceT}
                    renderLabel={renderLabel}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange}
                    style={{ flex: 1, width: Dimensions.get('window').width }} /> */}
                <ScrollView style={{ width: Dimensions.get('window').width }}>
                    <FlatList
                        data={this.state.dataSourceT}
                        renderItem={({ item }) =>
                            // <TouchableOpacity
                            //     onPress={() => this.props.navigation.navigate('ReportDisplayScreen', {
                            //         reportType: "Exam",
                            //         id: item.examId,
                            //         desc: item.examDesc,
                            //     })}>
                            //     <CheckBox></CheckBox>
                            //     <Text style={{
                            //         marginTop: 2, marginBottom: 3,
                            //         textAlign: 'center', color: 'green',
                            //         fontWeight: 'bold', fontSize: 18
                            //     }}> {item.emp_Name}</Text>
                            // </TouchableOpacity>
                            // <TouchableOpacity
                            // >

                            // , Alert.alert("check")

                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    value={this.state.checked}
                                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                                />
                                <Text style={{ marginTop: 5 }}> {item.emp_Name} </Text>
                            </View>
                            // {/* </TouchableOpacity> */}
                        }
                        keyExtractor={item => item.emp_Id}
                    />

                </ScrollView>

                {/* <ScrollView style={{ flexDirection: 'column' }}>
                    <CheckBox />
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.state.checked}
                            onValueChange={() => this.setState({ checked: !this.state.checked })}
                        />
                        <Text style={{ marginTop: 5 }}> this is checkbox</Text>
                    </View>
                </ScrollView> */}

            </View>


        );

    }
    renderAdmins = () => {


        return (
            <SelectMultiple
                items={fruits}
                renderLabel={renderLabel}
                selectedItems={this.state.selectedFruits}
                onSelectionsChange={this.onSelectionsChange} />
        );

    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableHighlight style={styles.menuButtons}
                    onPress={() => this.setState({ teachers: !this.state.teachers, administrators: false })}>
                    <View>
                        <Text style={styles.buttonText}>
                            <Icon name="book-open" size={20} />  Teachers List</Text>
                    </View>
                </TouchableHighlight>

                {/* {this.state.teachers ? this.renderTeachers() : null} */}
                {this.state.teachers ? this.renderTeachers() : this.renderTeachers()}

                {/* {this.renderTerms()} */}

                <TouchableHighlight style={styles.menuButtons}
                    onPress={() => this.setState({ administrators: !this.state.administrators, teachers: false })}>
                    <View>
                        <Text style={styles.buttonText}>
                            <Icon name="book-open" size={20} />  Submit </Text>
                    </View>
                </TouchableHighlight>

                {/* {this.state.administrators ? this.renderAdmins() : null} */}



            </View>
        )
    }
}

















// import React, { Component } from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     Slider,
//     ScrollView,
//     Dimensions,
//     TextInput,
//     StatusBar,
//     Image,
//     Picker
// } from "react-native";
// import Modal from "react-native-modalbox";
// import Button from "react-native-button";
// import Icon from "react-native-vector-icons/Feather";

// import StudentInfoScreen from './StudentInfoScreen';


// /**
//  * Store - holds our state - THERE IS ONLY ONE STATE
//  * Action - State can be modified using actions - SIMPLE OBJECTS
//  * Dispatcher - Action needs to be sent by someone - known as dispatching an action
//  * Reducer - receives the action and modifies the state to give us a new state
//  *  - pure functions
//  *  - only mandatory argument is the 'type'
//  * Subscriber - listens for state change to update the ui
//  */

// // const initialState = {
// //   counter: 0
// // }
// // const reducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case 'INCREASE_COUNTER':
// //       return { counter: state.counter + 1 }
// //     case 'DECREASE_COUNTER':
// //       return { counter: state.counter - 1 }
// //   }
// //   return state
// // }

// // const store = createStore(reducer)
// var screen = Dimensions.get("window");
// class ModalExp extends Component {
//     constructor() {
//         super();
//         this.state = {
//             isOpen: false,
//             isDisabled: false,
//             swipeToClose: true,
//             sliderValue: 0.3,
//             userTypes: [{ userType: 'admin', userName: 'Admin User' }, { userType: 'employee', userName: 'Employee User' }, { userType: 'dev', userName: 'Developer User' }],
//             selectedUserType: ''
//         };
//     }

//     onClose() {
//         console.log("Modal just closed");
//     }

//     onOpen() {
//         console.log("Modal just opened");
//     }

//     onClosingState(state) {
//         console.log("the open/close of the swipeToClose just changed");
//     }
//     loadUserTypes() {
//         return this.state.userTypes.map(user => (
//             <Picker.Item label={user.userName} value={user.userType} />
//         ))
//     }


//     componentDidMount() {
//         return fetch("http://digitalcampus.in/ParentzApp/parentinbox.jsp?username=11352&schoolcode=VERSION-DEMO&classNo=" + classId + "&section=" + studentSection)
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 console.log("inbox");
//                 console.log(responseJson);

//                 this.setState({
//                     dataSource: responseJson.inbox,
//                     isLoading: false
//                 }, function () { }
//                 );

//             }).catch((error) => {
//                 console.log(error)
//             })
//     }//compo






//     renderList() {
//         var list = [];

//         for (var i = 0; i < 50; i++) {
//             list.push(
//                 <Text style={styles.text} key={i}>
//                     Elem {i}
//                 </Text>
//             );
//         }

//         return list;
//     }

//     render() {
//         var BContent = (
//             <Button
//                 onPress={() => this.setState({ isOpen: false })}
//                 style={[styles.btn, styles.btnModal]}
//             >
//                 X
//       </Button>
//         );

//         return (
//             // <ScrollView style={{ flex: 2, backgroundColor: "black" }}>
//             //     <StatusBar backgroundColor="#fff" barStyle="dark-content" />

//             //     <StudentInfoScreen />


//             //     <View style={{ marginTop: 10 }}>
//             //         <Text style={{ color: "#0e9ed8", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
//             //             <Icon name="mail" size={20} color={'#303f9f'} />  Compose</Text>
//             //     </View>


//             <View style={styles.wrapper}>
//                 <StatusBar backgroundColor="#fff" barStyle="dark-content" />
//                 {/* <StudentInfoScreen /> */}
//                 <View style={{ marginTop: 10 }}>
//                     <Text style={{ color: "#0e9ed8", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
//                         <Icon name="edit" size={20} color={'#303f9f'} />  Compose</Text>
//                 </View>

//                 {/* <Button onPress={() => this.refs.modal1.open()} style={styles.btn}>
//           Basic modal
//         </Button>
//         <Button onPress={() => this.refs.modal2.open()} style={styles.btn}>
//           Position top
//         </Button> */}

//                 {/* <Button onPress={() => this.refs.modal3.open()} style={styles.btn}>
//                     Position centered + backdrop + disable
//                 </Button> */}

//                 <TouchableOpacity onPress={() => this.refs.modal3.open()} style={styles.btn}>
//                     <Text>To :  </Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={() => this.refs.modal3.open()} style={styles.btn}>
//                     <Text>Cc :  </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => this.refs.modal3.open()} style={styles.btn}>
//                     <Text>Sub :  </Text>
//                 </TouchableOpacity>



//                 {/* <Button onPress={() => this.refs.modal4.open()} style={styles.btn}>
//           Position bottom + backdrop + slider
//         </Button> */}
//                 {/* <Button
//           onPress={() => this.setState({ isOpen: true })}
//           style={styles.btn}
//         >
//           Backdrop + backdropContent
//         </Button>
//         <Button onPress={() => this.refs.modal6.open()} style={styles.btn}>
//           Position bottom + ScrollView
//         </Button>
//         <Button onPress={() => this.refs.modal7.open()} style={styles.btn}>
//           Modal with keyboard support
//         </Button> */}





//                 <Modal
//                     style={[styles.modal, styles.modal3]}
//                     position={"center"}
//                     ref={"modal3"}
//                     isDisabled={this.state.isDisabled}
//                 >
//                     <Text style={styles.text}>Teachers List</Text>
//                     <TouchableOpacity onPress={() => this.refs.modal7.open()} style={styles.btn}>
//                         <Text>Teachers List </Text>
//                     </TouchableOpacity>
//                     {/* <Picker
//                         selectedValue={this.state.language}
//                         style={{ height: 50, width: 100 }}
//                         onValueChange={(itemValue, itemIndex) =>
//                             this.setState({ language: itemValue })
//                         }>
//                         <Picker.Item label="Java sfsdfff " value="java" />
//                         <Picker.Item label="JavaScript  sdfsdff" value="js" />
//                     </Picker> */}
//                     <TouchableOpacity onPress={() => this.refs.modal.open()} style={styles.btn}>
//                         <Text>Administration List </Text>
//                     </TouchableOpacity>

//                     {/* <Text style={styles.text}>Teachers List</Text> */}
//                     {/* <Picker
//                         selectedValue={this.state.language}
//                         style={{ height: 50, width: 100 }}
//                         onValueChange={(itemValue, itemIndex) =>
//                             this.setState({ language: itemValue })
//                         }>
//                         <Picker.Item label="Java df fsdf sf   dsf sd" value="java" />
//                         <Picker.Item label="JavaScript sdfs sdfdsff sf dsf " value="js" />
//                     </Picker> */}
//                     {/* <View>
//                         <Picker
//                             selectedValue={this.state.selectedUserType}
//                             onValueChange={(itemValue, itemIndex) =>
//                                 this.setState({ selectedUserType: itemValue })}> */}
//                     {/* // Dynamically loads Picker.Values from this.state.userTypes. */}
//                     {/* {this.loadUserTypes()}
//                         </Picker> */}
//                     {/* <Picker
//                             selectedValue={this.state.language}
//                             style={{ height: 50, width: 100 }}
//                             onValueChange={(itemValue, itemIndex) =>
//                                 this.setState({ language: itemValue })
//                             }>
//                             <Picker.Item label="Java" value="java" />
//                             <Picker.Item label="JavaScript" value="js" />
//                         </Picker> */}

//                     {/* </View> */}






//                     <Button
//                         onPress={() =>
//                             this.setState({ isDisabled: !this.state.isDisabled })
//                         }
//                         style={styles.btn}
//                     >
//                         Disable ({this.state.isDisabled ? "true" : "false"})
//                      </Button>
//                 </Modal>

//                 {/* <Modal
//           style={[styles.modal, styles.modal4]}
//           position={"bottom"}
//           ref={"modal4"}
//         >        
//         </Modal> */}

//                 {/* <Modal
//           isOpen={this.state.isOpen}
//           onClosed={() => this.setState({ isOpen: false })}
//           style={[styles.modal, styles.modal4]}
//           position={"center"}
//           backdropContent={BContent}
//         >
//           <Text style={styles.text}>Modal with backdrop content</Text>
//         </Modal> */}

//                 {/* <Modal
//           style={[styles.modal, styles.modal4]}
//           position={"bottom"}
//           ref={"modal6"}
//           swipeArea={20}
//         >
//           <ScrollView>
//             <View style={{ width: screen.width, paddingLeft: 10 }}>
//               {this.renderList()}
//             </View>
//           </ScrollView>
//         </Modal> */}

//                 <Modal
//                     ref={"modal7"}
//                     style={[styles.modal, styles.modal4]}
//                     position={"center"}
//                 >

//                     <View>
//                         {/* <FlatList
//                             //ItemSeparatorComponent={this.renderSeparator}
//                             data={this.state.dataSource}
//                             renderItem={this.renderItem}
//                             keyExtractor={({ id }, index) => id}
//                             ItemSeparatorComponent={this.renderSeparator}
//                         /> */}
//                     </View>


//                 </Modal>

//             </View>

//         );
//     }
// }

// export default ModalExp;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     wrapper: {
//         paddingTop: 50,
//         flex: 1,
//         //backgroundColor: "blue"
//     },
//     modal: {
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     modal2: {
//         height: 230,
//         backgroundColor: "#3B5998"
//     },
//     modal3: {
//         height: 300,
//          ,
//         // backgroundColor: 'red'
//     },
//     modal4: {
//         height: 200
//     },
//     btn: {
//         margin: 10,
//         //backgroundColor: "#3B5998",
//         color: "white",
//         padding: 10,
//         borderWidth: 2
//     },
//     btnModal: {
//         position: "absolute",
//         top: 0,
//         right: 0,
//         width: 50,
//         height: 50,
//         backgroundColor: "transparent"
//     },
//     text: {
//         color: "black",
//         fontSize: 22
//     }
// });








// // import React, {Fragment} from 'react';
// // import {
// //     SafeAreaView,
// //     StyleSheet,
// //     ScrollView,
// //     View,
// //     Text,
// //     StatusBar,
// //     TextInput,
// //     Button,
// //     FlatList,
// //     ActivityIndicator,
// //     TouchableOpacity,
// //     ToastAndroid,
// //     Image,
// //     Dimensions,
// //     Picker
// // } from 'react-native';
// // import {
// //     Header,
// //     LearnMoreLinks,
// //     Colors,
// //     DebugInstructions,
// //     ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';

// // import Pdf from 'react-native-pdf';
// // import StudentInfoScreen from './StudentInfoScreen';
// // import Icon from 'react-native-vector-icons/Feather';

// // export default class CommunicationCompose extends React.Component {
// //     static navigationOptions = {
// //         title: " "
// //     };
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             isLoading: true,
// //             userTypes: [{ userType: 'admin', userName: 'Admin User' }, { userType: 'employee', userName: 'Employee User' }, { userType: 'dev', userName: 'Developer User' }],
// //             selectedUserType: ''
// //         }
// //         var arr = [];
// //     }//constructor
// //     loadUserTypes() {
// //         return this.state.userTypes.map(user => (
// //             <Picker.Item label={user.userName} value={user.userType} />
// //         ))
// //     }



// //     render() {

// //         // if (this.state.isLoading) {
// //         //     return (
// //         //         <View style={{ flex: 1, padding: 20 }}>
// //         //             {/* <ActivityIndicator /> */}
// //         //             <View style={[styles.container, styles.horizontal]}>
// //         //                 <ActivityIndicator size="large" color="green" />
// //         //             </View>
// //         //         </View>
// //         //     )
// //         // }

// //         //style={{ backgroundColor: 'white' }}
// //         return (
// //             <ScrollView style={{ color: "white", fontSize: 18, textAlign: 'center' }}>
// //                 <StatusBar backgroundColor="#fff" barStyle="dark-content" />

// //                 <StudentInfoScreen />

// //                 <View style={{ marginTop: 10 }}>
// //                     <Text style={{ color: "#0e9ed8", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
// //                         <Icon name="mail" size={20} color={'#303f9f'} />  Compose</Text>
// //                 </View>




// //                 <TouchableOpacity>

// //                     <View style={{ marginTop: 10, backgroundColor: 'yellow' }}>
// //                         <Text style={{
// //                             color: "#0e9ed8", fontSize: 20, textAlign: 'center', marginBottom: 15,
// //                             marginTop: 10
// //                         }}>
// //                             To : </Text>
// //                     </View>
// //                     <View>
// //                         <Picker
// //                             selectedValue={this.state.selectedUserType}
// //                             onValueChange={(itemValue, itemIndex) =>
// //                                 this.setState({ selectedUserType: itemValue })}>

// //                             {/* // Dynamically loads Picker.Values from this.state.userTypes. */}

// //                             {this.loadUserTypes()}
// //                         </Picker>
// //                     </View>
// //                 </TouchableOpacity>
// //             </ScrollView>
// //         );
// //     }

// // }//notice


// // const styles = StyleSheet.create({
// //     scrollView: {
// //         backgroundColor: Colors.lighter,
// //     },
// //     engine: {
// //         position: 'absolute',
// //         right: 0,
// //     },
// //     body: {
// //         backgroundColor: Colors.white,
// //     },
// //     sectionContainer: {
// //         marginTop: 32,
// //         paddingHorizontal: 24,
// //     },
// //     sectionTitle: {
// //         fontSize: 24,
// //         fontWeight: '600',
// //         color: Colors.black,
// //     },
// //     sectionDescription: {
// //         marginTop: 8,
// //         fontSize: 18,
// //         fontWeight: '400',
// //         color: Colors.dark,
// //     },
// //     highlight: {
// //         fontWeight: '700',
// //     },
// //     footer: {
// //         color: Colors.dark,
// //         fontSize: 12,
// //         fontWeight: '600',
// //         padding: 4,
// //         paddingRight: 12,
// //         textAlign: 'right',
// //     },
// //     buttonText: {
// //         fontSize: 18,
// //         fontWeight: '900',
// //         color: "#fff",
// //         textAlign: "center",
// //     },
// //     container: {
// //         backgroundColor: "#fff",
// //         marginTop: 15,
// //         //justifyContent: "center",
// //         alignItems: "center",
// //         flex: 1,
// //     },
// //     menuButtons: {
// //         backgroundColor: "#3f51b5",
// //         width: 300,
// //         paddingVertical: 8,
// //         marginVertical: 10,
// //         borderRadius: 5,
// //         borderWidth: 1,
// //         borderColor: "#2b388f"
// //     },
// //     list: {
// //         backgroundColor: "white",
// //         width: 500,
// //         paddingVertical: 0,
// //         marginVertical: 0,
// //         borderRadius: 10
// //     },
// //     imageView: {
// //         width: 70,
// //         height: 70,
// //         borderRadius: 50
// //     },
// //     imageView2: {
// //         width: 75,
// //         height: 75,
// //         borderRadius: 37.5,
// //         marginLeft: 15
// //     },
// //     pdfcontainer: {
// //         flex: 1,
// //         justifyContent: 'flex-start',
// //         alignItems: 'center',
// //         marginTop: 25,
// //     },
// //     pdf: {
// //         flex: 1,
// //         width: Dimensions.get('window').width,
// //     },
// //     inputBox: {
// //         borderColor: 'red',
// //         borderWidth: 2,
// //     }
// // });
const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: "white"
    },
    title: {
        color: "green",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    icon: {
        //color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    footer: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "white"
    },
    menuButtons: {
        backgroundColor: "#3f51b5",
        //width: 300,
        width: Dimensions.get("window").width,
        paddingVertical: 8,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#2b388f"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '900',
        color: "#fff",
        textAlign: "center",
    }
});
//0c084c