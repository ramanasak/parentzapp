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
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import Icon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Feather';
import { createStackNavigator, createAppContainer, createDrawerNavigator, router } from "react-navigation";

export class menuscreen extends React.Component {
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
        <View style={{ flexDirection: 'row', borderWidth: 0 }}>
          <View style={{ flex: 1 }}>
            <Image style={styles.imageView2} source={require('./studentpic.jpg')} />
          </View>
          <View style={{ flex: 3, backgroundColor: 'white' }}>

            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'space-around', backgroundColor: 'white' }}>
              <View style={{ justifyContent: 'space-around', alignItems: 'flex-start', marginLeft: 35 }}>
                <Text style={{ borderWidth: 0, justifyContent: 'space-around', fontSize: 18, alignItems: 'center' }}>
                  <Icon name="user" size={15} /> Ramana Sakhavarapu</Text>
                {/* <Text style={{ fontSize: 10, color: 'grey' }}>NAme</Text> */}
                {/* <Icon name="award" size={30} /> */}
              </View>
            </View>



            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{ alignItems: 'center' }}>
                <Text>6</Text>
                <Text style={{ fontSize: 10, color: 'grey' }}>Class</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text>A</Text>
                <Text style={{ fontSize: 10, color: 'grey' }}>Section</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text>112</Text>
                <Text style={{ fontSize: 10, color: 'grey' }}>Roll</Text>
              </View>
            </View>

          </View>
        </View>

        <View style={{ backgroundColor: 'white', marginTop: 40 }}>
          <TouchableOpacity style={styles.menuButtons}>
            <View>
              {/* <Text style={styles.buttonText} onPress={this.loginAction}>Login</Text> */}
              <Text style={styles.buttonText}><Icon name="file-text" size={20} />   Notices</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtons}>
            <View>
              {/* <Text style={styles.buttonText} onPress={this.loginAction}>Login</Text> */}
              <Text style={styles.buttonText}><Icon name="calendar" size={20} />   Attendance</Text>

            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtons}>
            <View>
              {/* <Text style={styles.buttonText} onPress={this.loginAction}>Login</Text> */}
              <Text style={styles.buttonText}><Icon name="bar-chart-2" size={20} />   Progress Report</Text>

            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtons}>
            <View>
              {/* <Text style={styles.buttonText} onPress={this.loginAction}>Login</Text> */}
              <Text style={styles.buttonText}><Icon name="send" size={20} />   Communication</Text>

            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtons}>
            <View>
              {/* <Text style={styles.buttonText} onPress={this.loginAction}>Login</Text> */}
              <Text style={styles.buttonText}><Icon name="briefcase" size={20} />   Fee  Payment</Text>
              {/* <Icon name="dollar-sign" size={20} />
            <Icon name="credit-card" size={20} /> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtons}>
            <View>
              {/* <Text style={styles.buttonText} onPress={this.loginAction}>Login</Text> */}
              <Text style={styles.buttonText}><Icon name="book" size={20} />   Digital Campus Diary </Text>
              {/* <Icon name="clipboard" size={20} />  */}
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

}//menuscreen
//default
export class Notice extends React.Component {

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
            <Text style={{ fontSize: 18, color: '#3f51b5', marginBottom: 1, marginTop: 1, justifyContent: 'center', marginLeft: 20 }}>
              {item.title}, {item.releaseYear}
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

  }//asdasdad



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

        <View style={{ flexDirection: 'row', borderWidth: 0, backgroundColor: 'white', marginTop: 10 }}>
          <View style={{ flex: 1 }}>
            <Image style={styles.imageView2} source={require('./studentpic.jpg')} />
          </View>
          <View style={{ flex: 3, backgroundColor: 'white' }}>

            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'space-around', backgroundColor: 'white' }}>
              <View style={{ justifyContent: 'space-around', alignItems: 'flex-start', marginLeft: 35 }}>
                <Text style={{ borderWidth: 0, justifyContent: 'space-around', fontSize: 18, alignItems: 'center' }}>
                  <Icon name="user" size={15} /> Ramana Sakhavarapu     <Icon name="chevron-down" size={15} /></Text>
                {/* <Text style={{ fontSize: 10, color: 'grey' }}>NAme</Text> */}
                {/* <Icon name="award" size={30} /> */}

              </View>
            </View>



            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{ alignItems: 'center' }}>
                <Text>6</Text>
                <Text style={{ fontSize: 10, color: 'grey' }}>Class</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text>A</Text>
                <Text style={{ fontSize: 10, color: 'grey' }}>Section</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text>112</Text>
                <Text style={{ fontSize: 10, color: 'grey' }}>Roll</Text>
              </View>
            </View>

          </View>
        </View>





        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "#303f9f", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
            <Icon name="file-text" size={20} />  NOTICES</Text>
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

}//notice 










export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}




















class HomeScreen extends React.Component {
  // static navigationOptions={
  //   headerStyle:{
  //     backgroundColor:'red'
  //   }
  // };
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen h</Text>
        <Button title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')} />
      </View>
    );
  }
}
class DashboardScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'red'
    }
  };
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", borderWidth: 15, borderColor: 'green' }}>
        <Text>Dashboard</Text>
        <Button title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')} />
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Home... again"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

class NoticeScreen extends React.Component {
  //export default class NoticeScreen extends React.Component {
  // static navigationOptions={
  //   headerStyle:{
  //     backgroundColor:'red'
  //   }
  // };
  // static navigationOptions = {
  //   title: 'Notice',
  // };

  Constructor(props) {
    Super(props);
    this.state = {
      // isLoading: true,
      // dataSource: []
    }
    console.log("dataSource");
    console.log(dataSource);
    console.log("dataSource");
  }//constructor

  renderItem = () => {

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          // isLoading: false,
          // dataSource: responseJson
        })
      })
  }//asdasdad


  render() {
    // if (this.state.isLoading == true) {
    //   return (
    //     <View Style={StyleSheet.container}>
    //       <ActivityIndicator size="Large" animating />
    //     </View>
    //   )
    // } else {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
        <Text>Notice Screen</Text>
        {/* <Button title="Go to Details"
                onPress={() => this.props.navigation.navigate('Details')} /> 
                 //data={this.state.dataSource}
                 */}

        {/* <FlatList
          data={[{ key: 'a' }, { key: 'b' }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        /> */}
        <FlatList
          data={this.state.dataSource}
          renderItem={this.state.renderItem}
        />
      </View>
    );
    //}else

  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  //Home: NoticeScreen,
  Details: DetailsScreen
},
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'orange'
      },
      headerTintColor: 'red',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);



const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    //Home: NoticeScreen,
    Dashboard: DashboardScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'blue'
      },
      headerTintColor: 'pink',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const AppContainer = createAppContainer(AppDrawerNavigator);
//const AppContainer = createAppContainer(AppNavigator);





























// const App = () => {
//      return (
//        <View>
//          <Text>SFSDFDSF</Text>
//        </View>
//      );
// };



// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

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
  }
});
// export default App;
// flexDirection: 'row',
// flex: 1