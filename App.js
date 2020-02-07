
import React, { Fragment, Component } from "react";
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
  Switch,
  CheckBox,
  Modal,
  TouchableHighlight,
  Slider, AsyncStorage
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import Icon from "react-native-vector-icons/Feather";
import Pdf from "react-native-pdf";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  router
} from "react-navigation";

import { WebView } from 'react-native-webview';



//importing screens
import GalleryScreen from "./screens/GalleryScreen";
import NoticesDisplayScreen from "./screens/NoticesDisplayScreen";
import StudentInfoScreen from "./screens/StudentInfoScreen";
import NoticesDisplayPdfScreen from "./screens/NoticesDisplayPdfScreen";
import AttendanceScreen from "./screens/AttendanceScreen";
import AttendanceGraphScreen from "./screens/AttendanceGraphScreen";
import Form from "./screens/Form";
import FeeTransactions from "./screens/FeeTransactions";
import DashboardScreen from "./screens/DashboardScreen";
import FeeDues from "./screens/FeeDues";
import ModalExp from "./screens/ModalExp";
import PayuScreen from "./screens/PayuScreen";
import SiblingInfoScreen from "./screens/SiblingInfoScreen";
import FeeDetailsView from "./screens/FeeDetailsView";
import LoginForm from "./screens/LoginForm";
import R from "./screens/R";
import S from "./screens/S";
import LoginScreen from "./screens/LoginScreen";
import LoginTest from "./screens/LoginTest";
import FirstPage from "./screens/FirstPage";
import SecondPage from "./screens/SecondPage";
import InboxScreen from "./screens/InboxScreen";
import CommunicationInbox from "./screens/CommunicationInbox";
import CommunicationSentbox from "./screens/CommunicationSentbox";
import SentboxView from "./screens/SentboxView";
import InboxView from "./screens/InboxView";
import CommunicationAttachmentView from "./screens/CommunicationAttachmentView";
import CommunicationCompose from "./screens/CommunicationCompose";
import ReportSelectionScreen from "./screens/ReportSelectionScreen";
import ReportDisplayScreen from "./screens/ReportDisplayScreen";


import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import WebviewScreen from "./screens/WebviewScreen";


import ContentComponent from "./components/ContentComponent";
//importing styles
//import Mainstyles from './screens/Mainstyles.js';

//http://192.168.1.99:8080//digitalcampus.in/ParentzApp/parentapp_login.jsp?username=6284&password=Digital@1&schoolcode=MER-BJ1920

//http://192.168.1.99:8080//digitalcampus.in/ParentzApp/parentapp_login.jsp?username=4681&password=gaurav&schoolcode=MER-BJ1920 single student

var screen = Dimensions.get("window");
export default class App extends React.Component {
  constructor(props) {
    super(props);
  } //constructor
  render() {
    return <AppContainer />;
  }
}

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Text>welcome </Text> */}
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        />
        {/* <Button title="SignUp"
          onPress={() => alert("signup")} /> */}
      </View>
    );
  }
}

class A extends React.Component {
  static navigationOptions = {
    title: "A"
  };

  render() {
    //() => this.refs.modal4.open();
    return (
      <View>
        <TouchableOpacity style={{ marginTop: 50 }}>
          <View
            style={{
              flex: 2,
              backgroundColor: "white",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "flex-start",
                backgroundColor: "white"
              }}
            >
              <Image
                source={require("./studentpic.jpg")}
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 5,
                  borderRadius: 37.5,
                  marginLeft: 15
                }}
              />
            </View>
            <View
              style={{
                flex: 3,
                marginLeft: 5,
                alignItems: "flex-start",
                backgroundColor: "white",
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  flex: 2,
                  alignItems: "flex-start",
                  backgroundColor: "white"
                }}
              >
                {/* <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.studentName}</Text> */}
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>

                  ramana sakhavarapu
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "white"
                }}
              >
                <Icon name="chevron-right" size={30} color={"black"} />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 50 }}>
          <View
            style={{
              flex: 2,
              backgroundColor: "white",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "flex-start",
                backgroundColor: "white"
              }}
            >
              <Image
                source={require("./studentpic.jpg")}
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 5,
                  borderRadius: 37.5,
                  marginLeft: 15
                }}
              />
            </View>
            <View
              style={{
                flex: 3,
                marginLeft: 5,
                alignItems: "flex-start",
                backgroundColor: "white",
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  flex: 2,
                  alignItems: "flex-start",
                  backgroundColor: "white"
                }}
              >
                {/* <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.studentName}</Text> */}
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>

                  ramana sakhavarapu
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "white"
                }}
              >
                <Icon name="chevron-right" size={30} color={"black"} />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* <Modal
          style={[styles.modal, styles.modal4]}
          position={"bottom"}
          ref={"modal4"}
        >
          <Text style={styles.text}>Modal on bottom with backdrop</Text>
          <Text style={styles.text}>Modal on bottom with backdrop</Text>
          <Text style={styles.text}>Modal on bottom with backdrop</Text>
          {/* <Slider style={{ width: 200 }} value={this.state.sliderValue} onValueChange={(value) => this.setState({ sliderValue: value })} />
        </Modal> */}
      </View>
    );
  }
}
class B extends React.Component {
  static navigationOptions = {
    title: "B"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Text>welcome </Text> */}
        <Button
          title="B"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        />
        {/* <Button title="SignUp"
          onPress={() => alert("signup")} /> */}
      </View>
    );
  }
}
class Fee2 extends React.Component {
  static navigationOptions = {
    title: "Fee2"
  };
  render() {
    return (
      // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      //   {/* <Text>welcome </Text> */}
      //   <Button title="Fee2"
      //     onPress={() => this.props.navigation.navigate('Fee1')} />
      // </View>
      <Form />
    );
  }
}

class PaymentMode extends React.Component {
  static navigationOptions = {
    title: "Payment Mode"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.PModeButtons}>
          <View>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("PayuScreen")}
            >
              <Icon name="credit-card" size={20} /> Credit Card
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.PModeButtons}>
          <View>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("PayuScreen")}
            >
              <Icon name="credit-card" size={20} /> Debit Card
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.PModeButtons}>
          <View>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("PayuScreen")}
            >
              <Icon name="globe" size={20} /> Net banking
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}



class SiblingSelect extends React.Component {
  static navigationOptions = {
    header: null,
    title: "SiblingSelect"
  };

  renderSeparator = () => {
    return (
      <View
        style={{ height: 1, width: "100%", backgroundColor: "blue" }}
      ></View>
    );
  };
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.list}
        onPress={() => ToastAndroid.show(item.siblingName, ToastAndroid.SHORT)}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              marginLeft: 15,
              backgroundColor: "white",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "white"
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#3f51b5",
                marginBottom: 1,
                marginTop: 1,
                justifyContent: "center",
                marginLeft: 20
              }}
              onPress={() => this.props.navigation.navigate("DashboardScreen")}
            >
              {item.siblingName}, {item.siblingId}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#3f51b5",
                marginBottom: 5,
                marginLeft: 20
              }}
            >
              {item.gender}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { navigation } = this.props;
    const res = navigation.getParam("res");
    const myJSON = navigation.getParam("myJSON");
    const studentInfo = navigation.getParam("studentInfo");
    const dataSource = res.siblings;
    console.log("res=====" + res);
    console.log("myJSON=====" + myJSON);
    console.log("Login=" + myJSON.Login);
    console.log("test=" + myJSON.test);
    console.log("studentInfo =" + studentInfo);
    console.log(
      "studentInfo [0] studentName=" + myJSON.studentInfo[0].studentName
    );
    //console.log("res====c=" + res.count);
    //console.log("dataSource=====" + dataSource);
    // console.log("res====n=" + JSON.stringify(res.siblings[0].siblingName));

    return (
      <ScrollView>
        {/*  <SiblingInfoScreen studentName={res.siblings[1].siblingName} /> */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 70,
            backgroundColor: "grey"
          }}
        >
          <FlatList
            data={dataSource}
            renderItem={this.renderItem}
            keyExtractor={({ siblingId }, index) => siblingId}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </ScrollView>
    );
  }
}

class success extends React.Component {
  static navigationOptions = {
    header: null,
    title: "success"
  };

  renderSeparator = () => {
    return (
      <View
        style={{ height: 1, width: "100%", backgroundColor: "grey" }}
      ></View>
    );
  };
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.list}
        onPress={() => ToastAndroid.show(item.type, ToastAndroid.SHORT)}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              marginLeft: 15,
              backgroundColor: "white",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "white"
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#3f51b5",
                marginBottom: 1,
                marginTop: 1,
                justifyContent: "center",
                marginLeft: 20
              }}
            >
              {/* {item.gender}, {item.gender} */}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const { navigation } = this.props;

    //const studentCount = navigation.getParam('studentCount', '0');
    const responseJson = navigation.getParam("myJSON");
    const siblings = JSON.stringify(navigation.getParam("siblings"));
    var myJSON = JSON.stringify(responseJson);

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> AAAAAAAAAAAAAAAAAAAAAA </Text>
        <Modal>
          <View style={styles.modalView}>
            <Text> BBBBBBBBBBBBBBBBBBBB </Text>
            {/* <View>
              <FlatList
                //ItemSeparatorComponent={this.renderSeparator}
                data={this.state.myJSON}
                renderItem={this.renderItem}
                keyExtractor={({ id }, index) => id}
                ItemSeparatorComponent={this.renderSeparator}
              />
            </View> */}
          </View>
        </Modal>
      </View>
    );
  }
}

class AndroidFonts extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scroller}>
        <Text style={{ fontFamily: "normal", fontSize: 20 }}> ParentzApp </Text>
        <Text style={{ fontFamily: "notoserif", fontSize: 20 }}>

          ParentzApp
        </Text>
        <Text style={{ fontFamily: "sans-serif", fontSize: 20 }}>

          ParentzApp
        </Text>
        <Text style={{ fontFamily: "sans-serif-light", fontSize: 20 }}>

          ParentzApp
        </Text>
        <Text style={{ fontFamily: "sans-serif-thin", fontSize: 20 }}>

          ParentzApp
        </Text>
        <Text style={{ fontFamily: "sans-serif-condensed", fontSize: 20 }}>

          ParentzApp
        </Text>
        <Text style={{ fontFamily: "sans-serif-medium", fontSize: 20 }}>

          ParentzApp
        </Text>
        <Text style={{ fontFamily: "serif", fontSize: 20 }}> ParentzApp </Text>
        <Text style={{ fontFamily: "Roboto", fontSize: 20 }}> ParentzApp </Text>
        <Text style={{ fontFamily: "monospace", fontSize: 20 }}>

          ParentzApp
        </Text>
      </ScrollView>
    );
  }
}

//AppRegistry.registerComponent('AndroidFonts', () => AndroidFonts);

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    //const studentCount = 0;
  } //constructor

  //https://facebook.github.io/react-native/movies.json
  //https://jsonplaceholder.typicode.com/posts

  renderSeparator = () => {
    return (
      <View
        style={{ height: 1, width: "100%", backgroundColor: "grey" }}
      ></View>
    );
  };
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.list}
        onPress={() => ToastAndroid.show(item.type, ToastAndroid.SHORT)}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              marginLeft: 15,
              backgroundColor: "white",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "white"
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#3f51b5",
                marginBottom: 1,
                marginTop: 1,
                justifyContent: "center",
                marginLeft: 20
              }}
            >
              {item.id}, {item.type}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#3f51b5",
                marginBottom: 5,
                marginLeft: 20
              }}
            >
              {item.Amount}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: "white"
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#3f51b5",
                marginBottom: 1,
                marginTop: 1,
                justifyContent: "center"
              }}
            ></Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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

  componentDidMount() {
    return fetch(
      "http://192.168.1.99:8080//digitalcampus.in/ParentzApp/parentapp_login.jsp?username=4681&password=gaurav&schoolcode=MER-BJ1920"
    )
      .then(response => response.json())
      .then(responseJson => {
        //alert("response");
        console.log(responseJson);
        const res = responseJson;
        if (responseJson.Login == "Success" && responseJson.count == 1) {
          //alert("Login Successful");
          //this.setState({ button_toggle: false });
          this.props.navigation.navigate("SiblingSelect", {
            studentCount: responseJson.count,
            myJSON: responseJson,
            studentInfo: responseJson.studentInfo,
            res: res
          });
        } else {
          alert("Login Failed ");
          // this.setState({ button_toggle: false });
        }
        this.setState(
          {
            dataSource: responseJson.studentInfo,
            isLoading: false
          },
          function () { }
        );
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  }

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
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          {/* <ActivityIndicator /> */}
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="green" />
          </View>
        </View>
      );
    }
    //style={{ backgroundColor: 'white' }}
    return (
      <ScrollView style={{ color: "white", fontSize: 18, textAlign: "center" }}>
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
} //test




class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://github.com/facebook/react-native' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}











const HeaderComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        paddingRight: 50
      }}
    >
      <Text
        style={{
          fontSize: 18,
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          color: "#4f7528"
        }}
      >
        Parentz App
      </Text>
    </View>
  );
};










const DashboardStackNavigator = createStackNavigator(
  {
    //DashboardTabNavigator: DashboardTabNavigator
    DashboardScreen: {
      screen: props => <DashboardScreen {...props} />
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="menu"
            size={30}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerTitle: <HeaderComponent />
      };
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        // header: null,
        headerTitle: routeName
      };
    }
  }
);

const TestStack = createStackNavigator(
  {
    //ModalExp: ModalExp,
    // LoginForm: LoginForm,
    //AndroidFonts: AndroidFonts,
    //Firstpage: FirstPage,
    //SecondPage: SecondPage,
    Webview: WebviewScreen,
    Test: Test,
    success: success,
    SiblingSelect: SiblingSelect
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
);
const ParamStack = createStackNavigator(
  {
    //ModalExp: ModalExp,
    // LoginForm: LoginForm,
    //AndroidFonts: AndroidFonts,
    //Firstpage: FirstPage,
    //SecondPage: SecondPage,
    S: S,
    R: R
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
);
const FeeTransactionsStack = createStackNavigator(
  {
    FeeTransactions: FeeTransactions,
    FeeDues: FeeDues,
    PaymentMode: PaymentMode,
    PayuScreen: PayuScreen,
    Fee2: Fee2,
    Test: Test
  }
  // ,
  // {
  //   navigationOptions: ({ navigation }) => {
  //     const { routeName } = navigation.state.routes[navigation.state.index];
  //     return {
  //       header: null,
  //       headerTitle: routeName
  //     };
  //   }
  // }
);
const FeeDetails = createStackNavigator(
  {
    FeeDetailsView: FeeDetailsView
  }
  //,
  // {
  //   navigationOptions: ({ navigation }) => {
  //     const { routeName } = navigation.state.routes[navigation.state.index];
  //     return {
  //       header: null,
  //       headerTitle: routeName
  //     };
  //   }
  // }
);
const FeeTabNavigator = createMaterialTopTabNavigator(
  {
    Transactions: {
      screen: FeeTransactionsStack
    },
    FeeDetails
  }
  // ,
  // {
  //   navigationOptions: ({ navigation }) => {
  //     const { routeName } = navigation.state.routes[navigation.state.index];
  //     return {
  //       header: null,
  //       headerTitle: routeName
  //     };
  //   }
  // }
);

const NoticesStackNavigator = createStackNavigator(
  {
    // NoticeTabNavigator: NoticeTabNavigator
    NoticesDisplayScreen,
    NoticesDisplayPdfScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="home"
            size={30}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.navigate("Dashboard")}
          />
        ),//woring
        headerTitle: <HeaderComponent />,
        // headerRight: (
        //   <Button
        //     onPress={() => alert('This is a button!')}
        //     title="Info"
        //     color="#fff"
        //   />
        // ),//working
      };
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);






const InboxStack = createStackNavigator(
  {
    // NoticeTabNavigator: NoticeTabNavigator
    InboxScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="home"
            size={30}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.navigate("Dashboard")}
          />
        ),//woring
        headerTitle: <HeaderComponent />,
        // headerRight: (
        //   <Button
        //     onPress={() => alert('This is a button!')}
        //     title="Info"
        //     color="#fff"
        //   />
        // ),//working
      };
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

// Home: {
//   screen: HomeScreen,
//   navigationOptions: {
//     tabBarLabel: 'Home',
//     tabBarIcon: ({ tintColor }) => (
//       <Icon name="ios-home" color={tintColor} size={24} />
//     )
//   }
// },
const NoticeTabNavigator = createBottomTabNavigator(
  {

    Notices: {
      screen: NoticesStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Notices',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="file-text" color={tintColor} size={24} />
        )
      }
    },
    Inbox: {
      screen: InboxStack,
      navigationOptions: {
        tabBarLabel: 'ANNOUNCEMENTS',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="mail" color={tintColor} size={24} />
        )
      }
    },
    //A,

  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        //header: null,
        headerTitle: routeName
      };
    }
  }
);

const CommunicationSentboxStack = createStackNavigator(
  {
    CommunicationSentbox,
    SentboxView
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="home"
            size={30}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.navigate("Dashboard")}
          />
        ),//woring
        headerTitle: <HeaderComponent />,
      };
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);
const CommunicationInboxStack = createStackNavigator(
  {
    CommunicationInbox,
    InboxView,
    CommunicationAttachmentView
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="home"
            size={30}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.navigate("Dashboard")}
          />
        ),//woring
        headerTitle: <HeaderComponent />,
      };
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

const CommunicationComposeStack = createStackNavigator(
  {
    CommunicationCompose,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="home"
            size={30}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.navigate("Dashboard")}
          />
        ),//woring
        headerTitle: <HeaderComponent />,
      };
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);


const CommunicationTabNavigator = createBottomTabNavigator(
  {


    CommunicationCompose: {
      screen: CommunicationComposeStack,
      navigationOptions: {
        tabBarLabel: 'Compose',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="edit" color={tintColor} size={24} />
        )
      }
    },
    CommunicationInbox: {
      screen: CommunicationInboxStack,
      navigationOptions: {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="mail" color={tintColor} size={24} />
        )
      }
    }, CommunicationSentbox: {
      screen: CommunicationSentboxStack,
      navigationOptions: {
        tabBarLabel: 'Sentbox',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="send" color={tintColor} size={24} />
        )
      }
    }
    //A,

  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        //header: null,
        headerTitle: routeName
      };
    }
  }
);


const GalleryStackNavigator = createStackNavigator(
  {
    GalleryScreen: { screen: GalleryScreen }
  }
  //,
  // {
  //   navigationOptions: ({ navigation }) => {
  //     const { routeName } = navigation.state.routes[navigation.state.index];
  //     return {
  //       header: null,
  //       headerTitle: routeName
  //     };
  //   }
  // }
);
const ExaminationStackNavigator = createStackNavigator(
  {
    ReportSelectionScreen: { screen: ReportSelectionScreen },
    ReportDisplayScreen: { screen: ReportDisplayScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="home"
            size={30}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.navigate("Dashboard")}
          />
        ),
        headerTitle: <HeaderComponent />,
      };
    }
  }
);
const AttendanceStackNavigator = createStackNavigator(
  {

    AttendanceScreen: { screen: AttendanceScreen },
    AttendanceGraphScreen: { screen: AttendanceGraphScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="home"
            size={30}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.navigate("Dashboard")}
          />
        ),//woring
        headerTitle: <HeaderComponent />,

      };
    }
  },
  //,
  // {
  //   navigationOptions: ({ navigation }) => {
  //     const { routeName } = navigation.state.routes[navigation.state.index];
  //     return {
  //       header: null,
  //       headerTitle: routeName
  //     };
  //   }
  // }
);
const AuthStack = createStackNavigator(
  {
    AuthLoading: { screen: AuthLoadingScreen },
    LoginScreen: { screen: LoginForm },
  }

);
const AppDrawerNavigator = createDrawerNavigator(
  {
    //LoginScreen: { screen: LoginForm },
    Dashboard: { screen: DashboardStackNavigator },
    Attendance: { screen: AttendanceStackNavigator },
    //Notices: { screen: NoticesStackNavigator },
    Notices: { screen: NoticeTabNavigator },
    Communication: { screen: CommunicationTabNavigator },
    Gallery: { screen: GalleryStackNavigator },
    Examination: { screen: ExaminationStackNavigator },
    Fee: { screen: FeeTabNavigator },
    Test: { screen: TestStack }
  },
  {
    //initialRouteName: 'Communication',
    //initialRouteName: 'Gallery', 
    //initialRouteName: 'Examination',
    //contentComponent: ContentComponent,
    contentComponent: props => <ContentComponent {...props} />,
    drawerWidth: 300,
    //drawerWidth:Dimensions.get('window').width-100,
    drawerPosition: "left"
    //drawerBackgroundColor:'transparent',
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  //Welcome: { screen: WelcomeScreen },
  //A: { screen: A },
  AuthLoading: AuthLoadingScreen,
  LoginScreen: { screen: LoginForm },
  Dashboard: { screen: AppDrawerNavigator },
  SiblingInfoScreen: { screen: SiblingInfoScreen }
});

const AppContainer = createAppContainer(AppSwitchNavigator); //use main
//const AppContainer = createAppContainer(ParamStack);
//const AppContainer = createAppContainer(TestStack);
//const AppContainer = createAppContainer(FeeTabNavigator);
//const AppContainer = createAppContainer(AppDrawerNavigator);
//const AppContainer = createAppContainer(DashboardBottomTabNavigator);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center"
  },
  container: {
    backgroundColor: "#fff",
    marginTop: 15,
    //justifyContent: "center",
    alignItems: "center",
    flex: 1
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
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width
  },
  modalView: {
    backgroundColor: "#aaa",
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: "center",
    alignItems: "center"
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },
  text: {
    color: "black",
    fontSize: 22
  }
});
