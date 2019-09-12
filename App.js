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
  Switch, CheckBox
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

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      button_toggle: false
    }
  }

  colorChange = () => {
    alert("loginAction");
    const newState = !this.state.button_toggle;
    this.setState({ button_toggle: newState });
  }

  render() {
    const { button_toggle } = this.state;
    const buttonBg = button_toggle ? "#3700b3" : "#ff00ff"; //dark purple and magenta
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <StudentInfoScreen />

        <View style={{ backgroundColor: 'white', marginTop: 40 }}>
          <TouchableOpacity style={styles.menuButtons}>
            <View>
              {/* <Text style={styles.buttonText} onPress={this.loginAction}>Login</Text> */}
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Notices')} >
                <Icon name="file-text" size={20} />   Notices</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtons}>
            <View>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Gallery')} >
                <Icon name="film" size={20} />   Gallery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtons}>
            <View>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Attendance')} >
                <Icon name="calendar" size={20} />   Attendance</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtons}>
            <View>
              <Text style={styles.buttonText}
                onPress={() => this.props.navigation.navigate('Welcome')}><Icon name="bar-chart-2" size={20} />   Progress Report</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtons}>
            <View>
              <Text style={styles.buttonText}><Icon name="send" size={20} />   Communication</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtons}>
            <View>

              <Text style={styles.buttonText}
                onPress={() => this.props.navigation.navigate('Fee')} >
                <Icon name="briefcase" size={20} />   Fee  Payment</Text>
              {/* <Icon name="dollar-sign" size={20} />
            <Icon name="credit-card" size={20} /> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtons}>
            <View>
              <Text style={styles.buttonText}><Icon name="book" size={20} />   Digital Campus Diary </Text>
              {/* <Icon name="clipboard" size={20} />  */}
            </View>
          </TouchableOpacity>
        </View>

      </View >
    );
  }
}

class FeeTransactions extends React.Component {
  static navigationOptions = {
    title: 'Fee Transactions',
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', flex: 2, alignItems: "center", justifyContent: "space-around" }}>
              <Text style={{ fontSize: 16, textAlign: 'center' }}>Next Fee To Pay  </Text>
              <Text style={{ fontSize: 16, textAlign: 'center' }}>Amount : 50000 </Text>
              <Text style={{ fontSize: 16, textAlign: 'center' }}>Due on : 9-6-2019 </Text>
              <Button title="Pay Now" color="#2d8d0b"
                onPress={() => this.props.navigation.navigate('FeeDues')} />
            </View>

            <View style={{
              flexDirection: 'column', flex: 4, alignItems: "center",
              borderColor: "skyblue", borderWidth: 1
            }}>
              <ScrollView>
                {/* <View style={{ backgroundColor: "#008ff8" }}>
                  <Text style={{ fontSize: 18, textAlign: 'center', color: "white" }} ></Text>
                </View> */}
                <View style={{ backgroundColor: "#199af8", width: Dimensions.get('window').width }} >
                  <Text style={{ color: "white", fontSize: 20, textAlign: 'center', marginBottom: 10, marginTop: 10 }}>
                    <Icon name="briefcase" size={20} />  Fee Payments History </Text>
                </View>
                <View style={{ backgroundColor: "white" }}>




                  <View style={{ justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                      {/* <CheckBox />  */}
                      <Text style={{ justifyContent: "center", fontSize: 18 }}> 1 </Text>
                    </View>
                    <View style={{ flex: 3, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                      <Text style={{ justifyContent: "center", fontSize: 18 }}>
                        Transport Fee (10-09-2019)</Text>
                    </View>
                    <View style={{ flex: 2, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                      <Text style={{ alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                        Rs.500 </Text>
                    </View>
                  </View>

                  <View style={{ justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                      {/* <CheckBox />  */}
                      <Text style={{ justifyContent: "center", fontSize: 18 }}> 2 </Text>
                    </View>
                    <View style={{ flex: 3, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                      <Text style={{ justifyContent: "center", fontSize: 18 }}>
                        Exam Fee (09-09-2019)</Text>
                    </View>
                    <View style={{ flex: 2, alignItems: "center", justifyContent: "center", flexDirection: 'row', backgroundColor: 'white' }}>
                      <Text style={{ alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                        Rs.500 </Text>
                    </View>
                  </View>


                </View>
              </ScrollView>

            </View>
          </View>
        </View>
      </View>

    );
  }
}
class FeeDues extends React.Component {
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

class PayuScreen extends React.Component {
  static navigationOptions = {
    title: 'PayuScreen',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>PayuScreen </Text>
        <Text>Success </Text>
        <Text>Failure </Text>
        {/* <Button title="Fee2"
          onPress={() => this.props.navigation.navigate('Fee1')} /> */}
      </View>
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
class FeeDetailsView extends React.Component {
  static navigationOptions = {
    title: 'Fee Details View',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Fee Details View </Text>
      </View>
    );
  }
}

//Navigation

const DashboardStackNavigator = createStackNavigator(
  {
    //DashboardTabNavigator: DashboardTabNavigator
    DashboardScreen: DashboardScreen
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
  },

);

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


class Test extends React.Component {

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
  return fetch('http://school.digitalcampus.in/ParentzApp/feeDetailsTermWiseJSON.jsp')
    .then((response) => response.json())
    .then((responseJson) => {
      alert("response");
      console.log(responseJson);
      this.setState({
        dataSource: responseJson.feeList,
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
              <View style={{ marginTop: 10 }}>
                  <Text style={{ color: "#303f9f", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
                       NOTICES</Text>
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







const FeeTransactionsStack = createStackNavigator(
  {
    Test:Test,
    FeeTransactions: FeeTransactions,
    FeeDues: FeeDues,
    PaymentMode: PaymentMode,
    PayuScreen: PayuScreen,
    Fee2: Fee2
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
const FeeDetails = createStackNavigator(
  {
    FeeDetailsView: FeeDetailsView,
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
const FeeTabNavigator = createMaterialTopTabNavigator(
  {
    FeeTransactionsStack,
    FeeDetails
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

const NoticesStackNavigator = createStackNavigator(
  {
    // NoticeTabNavigator: NoticeTabNavigator
    NoticesDisplayScreen,
    NoticesDisplayPdfScreen
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
const GalleryStackNavigator = createStackNavigator(
  {
    // NoticeTabNavigator: NoticeTabNavigator
    GalleryScreen: { screen: GalleryScreen },
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
const AttendanceStackNavigator = createStackNavigator(
  {
    // NoticeTabNavigator: NoticeTabNavigator
    AttendanceScreen: { screen: AttendanceScreen },
    AttendanceGraphScreen: { screen: AttendanceGraphScreen },

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
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

//const AppContainer = createAppContainer(AppSwitchNavigator);//use main

const AppContainer = createAppContainer(FeeTabNavigator);
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
});
