    
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
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/EvilIcons';
import { createStackNavigator, createAppContainer,createDrawerNavigator,router } from "react-navigation";

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
        <Text><Icon  name='trophy' size={30}/>icon</Text>
        <Button title="Go to Details"
        onPress={()=> this.props.navigation.navigate('Details')}/>
      </View>
    );
  }
}
class DashboardScreen extends React.Component {
   static navigationOptions={
    headerStyle:{
      backgroundColor:'red'
    }
  };
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center",borderWidth:15,borderColor:'green' }}>
        <Text>Dashboard</Text>
        <Button title="Go to Details"
        onPress={()=> this.props.navigation.navigate('Details')}/>
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


const AppNavigator = createStackNavigator({
    Home : HomeScreen,
    Details:DetailsScreen
},
{
  initialRouteName:"Home",
    defaultNavigationOptions: {
      headerStyle:{
        backgroundColor:'orange'
      },
      headerTintColor:'red',
      headerTitleStyle:{
        fontWeight:'bold',
      },
    }  
}
);



const AppDrawerNavigator = createDrawerNavigator(
  {
    Home : HomeScreen,
    Dashboard:DashboardScreen,
    Details:DetailsScreen,
},
{
  initialRouteName:"Home",
    defaultNavigationOptions: {
      headerStyle:{
        backgroundColor:'blue'
      },
      headerTintColor:'pink',
      headerTitleStyle:{
        fontWeight:'bold',
      },
    } 
}
);

//const AppContainer = createAppContainer(AppDrawerNavigator);
const AppContainer = createAppContainer(AppNavigator);





























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
});

// export default App;

