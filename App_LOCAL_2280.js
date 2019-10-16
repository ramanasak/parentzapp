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
  Modal,
  TouchableHighlight
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

//importing screens 
import GalleryScreen from './screens/GalleryScreen';
import NoticesDisplayScreen from './screens/NoticesDisplayScreen';
import StudentInfoScreen from './screens/StudentInfoScreen';
import NoticesDisplayPdfScreen from './screens/NoticesDisplayPdfScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import AttendanceGraphScreen from './screens/AttendanceGraphScreen';
import Form from './screens/Form';
import FeeTransactions from './screens/FeeTransactions';
import DashboardScreen from './screens/DashboardScreen';
import FeeDues from './screens/FeeDues';
import PayuScreen from './screens/PayuScreen';
import SiblingInfoScreen from './screens/SiblingInfoScreen';
import FeeDetailsView from './screens/FeeDetailsView';
import ContentComponent from './screens/ContentComponent';
import Registration from './remove/Registration';
import Login from './remove/Login';
//importing styles
//import Mainstyles from './screens/Mainstyles.js';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Text>welcome </Text> */}
        <Button title="Login"
          onPress={() => this.props.navigation.navigate('Dashboard')} />
        {/* <Button title="SignUp"
          onPress={() => alert("signup")} /> */}
      </View>
    );
  }
}
class A extends React.Component {
  static navigationOptions = {
    title: 'A',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Text>welcome </Text> */}
        <Button title="A"
          onPress={() => this.props.navigation.navigate('Dashboard')} />
        {/* <Button title="SignUp"
          onPress={() => alert("signup")} /> */}
      </View>
    );
  }
}
class B extends React.Component {
  static navigationOptions = {
    title: 'B',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Text>welcome </Text> */}
        <Button title="B"
          onPress={() => this.props.navigation.navigate('Dashboard')} />
        {/* <Button title="SignUp"
          onPress={() => alert("signup")} /> */}
      </View>
    );
  }
}
class Fee2 extends React.Component {
  static navigationOptions = {
    title: 'Fee2',
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
    title: 'Payment Mode',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.PModeButtons}>
          <View>
            <Text style={styles.buttonText}
              onPress={() => this.props.navigation.navigate('PayuScreen')} >
              <Icon name="credit-card" size={20} />   Credit Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.PModeButtons}>
          <View>
            <Text style={styles.buttonText}
              onPress={() => this.props.navigation.navigate('PayuScreen')} >
              <Icon name="credit-card" size={20} />   Debit Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.PModeButtons}>
          <View>
            <Text style={styles.buttonText}
              onPress={() => this.props.navigation.navigate('PayuScreen')} >
              <Icon name="globe" size={20} />   Net banking</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


//Navigation
// const NoticeTabNavigator = createBottomTabNavigator(
//   {
//     // NoticesDisplayScreen,
//     // NoticesDisplayPdfScreen
//     //A,
//     //B
//   },
//   {
//     navigationOptions: ({ navigation }) => {
//       const { routeName } = navigation.state.routes[navigation.state.index];
//       return {
//         header: null,
//         headerTitle: routeName
//       };
//     }
//   }
// );

class SiblingSelect extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'SiblingSelect',
  };

  renderSeparator = () => {
    return (
      <View style={{ height: 1, width: '100%', backgroundColor: 'blue' }}>
      </View>
    )
  }
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.list} onPress={() => ToastAndroid.show(item.siblingName, ToastAndroid.SHORT)}>
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
              onPress={() => this.props.navigation.navigate('DashboardScreen')} >
              {item.siblingName}, {item.siblingId}
            </Text>
            <Text style={{ fontSize: 14, color: '#3f51b5', marginBottom: 5, marginLeft: 20 }}>
              {item.gender}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { navigation } = this.props;
    const res = navigation.getParam("res");
    const dataSource = res.siblings;
    console.log("res=====" + res);
    //console.log("res====l=" + res.login);
    //console.log("res====c=" + res.count);
    console.log("dataSource=====" + dataSource);
    console.log("res====n=" + JSON.stringify(res.siblings[0].siblingName));

    return (
      <ScrollView >
        {/*  <SiblingInfoScreen studentName={res.siblings[1].siblingName} /> */}
        <View style={{
          flex: 1, alignItems: "center", justifyContent: "center", marginBottom: 70,
          backgroundColor: 'grey'
        }}>
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
    title: 'success',
  };

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
              }}>
              {/* {item.gender}, {item.gender} */}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

    )
  }
  render() {
    const { navigation } = this.props;

    //const studentCount = navigation.getParam('studentCount', '0');
    const responseJson = navigation.getParam("myJSON");
    const siblings = JSON.stringify(navigation.getParam("siblings"));
    var myJSON = JSON.stringify(responseJson);
    //console.log("studentCount.gender");
    //alert(studentCount.siblings);
    //console.log(studentCount);
    //console.log("mjson s");
    //console.log(responseJson.count);
    // console.log(myJSON);
    //console.log(myJSON.gender);
    //console.log("responseJson e");
    // console.log("siblings====================" + siblings);
    // console.log("@@@@@@@@@@@@@@@@@@@@@" + siblings.gender);

    // this.setState({
    //   dataSource2: responseJson.siblings,
    // })
    // console.log("dataSource2=" + dataSource2);
    //const SArray = navigation.getParam('studentArray', '0');
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> AAAAAAAAAAAAAAAAAAAAAA </Text>
        <Modal>
          <View style={styles.modalView} >
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

class Test extends React.Component {

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

  componentDidMount() {
    return fetch('http://192.168.1.99:8080//digitalcampus.in/ParentzApp/parentapp_login.jsp?username=11350&password=Digital@123&schoolcode=VERSION-DEMO')
      .then((response) => response.json())
      .then((responseJson) => {
        //alert("response");
        console.log(responseJson);
        const res = responseJson;
        if (responseJson.login == "success" && responseJson.count == 2) {
          //alert("Login Successful");
          //this.setState({ button_toggle: false });
          this.props.navigation.navigate('SiblingSelect', {
            studentCount: responseJson.count,
            myJSON: responseJson,
            siblings: responseJson.siblings,
            res: res

          })
        } else {
          alert("Login Failed ");
          // this.setState({ button_toggle: false });
        }
        this.setState({
          dataSource: responseJson.siblings,
          isLoading: false
        }, function () { }
        );

      }).catch((error) => {
        console.log(error);
        alert(error);
      })
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
      )
    }
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
const HeaderComponent=()=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white',paddingRight:50}}>
      <Text style={{fontSize:18,justifyContent:'center',alignItems:'center',fontWeight:'bold',
    color:'black'}}>Parentz App</Text>
    </View>
  )
}
const DashboardStackNavigator = createStackNavigator(
  {
    //DashboardTabNavigator: DashboardTabNavigator
    DashboardScreen: DashboardScreen
  }
  ,{
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft:<Icon name="menu" size={30}
        style={{paddingLeft:10}}
        onPress={()=>navigation.openDrawer()}/>,
        headerTitle:<HeaderComponent/>
      };
    }
  }
  ,
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
    Login:Login,
    Registration:Registration,
    Test: Test,
    success: success,
    SiblingSelect: SiblingSelect
  }
  ,
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
    Test: Test,
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
    FeeDetailsView: FeeDetailsView,
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
        screen:FeeTransactionsStack
    } ,
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
   }
   ,
   {
     defaultNavigationOptions: ({ navigation }) => {
       return {
         headerLeft:<Icon name="home" size={30}
         style={{paddingLeft:10}}
         onPress={() => navigation.navigate('Dashboard')}/>,
         //headerTitle:<HeaderComponent/>,
        //  headerRight: (
        //   <Button
        //     onPress={() => alert('This is a button!')}
        //     title="Info"
        //     color="#fff"
        //   />
        // ),
       };
     }
   },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    }
  }
);
const GalleryStackNavigator = createStackNavigator(
  {
    // NoticeTabNavigator: NoticeTabNavigator
    GalleryScreen: { screen: GalleryScreen },
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
const AttendanceStackNavigator = createStackNavigator(
  {
    // NoticeTabNavigator: NoticeTabNavigator
    AttendanceScreen: { screen: AttendanceScreen },
    AttendanceGraphScreen: { screen: AttendanceGraphScreen },

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
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  },
  Notices: {
    screen: NoticesStackNavigator
  },
  Gallery: {
    screen: GalleryStackNavigator
  },
  Attendance: {
    screen: AttendanceStackNavigator
  },
  Fee: {
    screen: FeeTabNavigator
  }
},{
  //initialRouteName:'Notices',
  contentComponent:ContentComponent,
  drawerWidth:300,
  //drawerWidth:Dimensions.get('window').width-100,
  drawerPosition:'left',
  //drawerBackgroundColor:'transparent',
}
);

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

//const AppContainer = createAppContainer(AppSwitchNavigator);//use main
const AppContainer = createAppContainer(TestStack);
//const AppContainer = createAppContainer(FeeTabNavigator);
//const AppContainer = createAppContainer(AppDrawerNavigator);
//const AppContainer = createAppContainer(DashboardBottomTabNavigator);

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
  ,
  modalView: {
    backgroundColor: "#aaa",
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
