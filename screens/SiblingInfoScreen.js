import React, { Fragment } from "react";
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
  Dimensions
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

export default class SiblingInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  } //constructor

  //https://facebook.github.io/react-native/movies.json
  //https://jsonplaceholder.typicode.com/posts
  // static navigationOptions = {
  //     title: 'Notices',

  // };

  navigationCall = (item) => {
    console.log("Navigation Call" + item.studentName);



    (global.Login = global.student_res.Login),
      (global.studentName = item.studentName),
      (global.studentId = item.studentId),
      (global.studentRollNumber =
        item.studentRollNumber),
      (global.studentImage = item.studentImage),
      //studentImage: "",
      (global.userName = item.userName),
      (global.classDescription =
        item.classDescription),
      (global.studentSection =
        item.studentSection),
      (global.classId = item.classId),
      (global.password = item.password),
      (global.studentGender = item.studentGender),
      (global.schoolName = item.schoolName),
      (global.schoolLogo = item.schoolLogo),
      (global.studentPhotoId =
        item.studentPhotoId),
      (global.schoolCode = item.schoolCode)

    this.props.navigation.navigate("Dashboard");
  }; //ACTION


  componentDidMount() {
    console.log(global.student_res);
    this.setState({
      dataSource: global.student_res.studentInfo,
      isLoading: false
    });
  } //compo

  // renderSeparator = () => {
  //   return (
  //     // <View style={{ height: 1, width: '100%', backgroundColor: 'grey' }}>
  //     // </View>
  //     // <View
  //     //   style={{
  //     //     borderBottomColor: "grey",
  //     //     borderBottomWidth: 0.5,
  //     //     marginBottom: 5,
  //     //     marginTop: 15
  //     //   }}
  //     // />
  //   );
  // };
  renderItem = ({ item }) => {
    var ImageUrl = "http://" + item.studentImage;

    return (
      <TouchableOpacity
        style={styles.list}
        onPress={() => {
          ToastAndroid.show(item.studentName, ToastAndroid.SHORT);
          this.navigationCall(item);
        }
        }
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 5,
            marginBottom: 5,
            justifyContent: "center",
            width: Dimensions.get("window").width,
            height:50,
            borderColor: 'blue',
            borderWidth: 0.2,
            borderRadius: 20,
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
              source={{ uri: ImageUrl }}
              style={{
                width: 50,
                height: 50,
                marginTop: 5,
                marginBottom: 5,
                borderRadius: 37.5,
                marginLeft: 15
              }}
            />
          </View>
          <View
            style={{
              flex: 4,
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
              <Text style={{ fontSize: 18 }}>
                {item.studentName}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "white"
              }}
            >
              <Icon name="chevron-right" size={30} color={"green"} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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


      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white' }}>
        {/* <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} /> */}
        {/* <ScrollView style={{ color: "white", fontSize: 18, textAlign: "center" }}> */}
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View>

          <FlatList
            //ItemSeparatorComponent={this.renderSeparator}
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={item => item.studentId}
          // ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
        {/* </ScrollView > */}






        {/* // <View style={{ 
      //   backgroundColor: "red", flexDirection: "column-reverse", flex: 1, justifyContent: "flex-end", alignItems: "center"
      // }}>
      //   <View style={{
      //     backgroundColor: "blue", flexDirection: "column-reverse", justifyContent: "flex-end", alignItems: "center"
      //   }}>

      //     <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white' }}>
      //       {" "}
      //       ramana sakhavarapu
      //         </Text>
      //   </View>

         <ScrollView style={{ color: "white", fontSize: 18, textAlign: "center" }}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <View>
           
            <FlatList
              //ItemSeparatorComponent={this.renderSeparator}
              data={this.state.dataSource}
              renderItem={this.renderItem}
              keyExtractor={item => item.studentId}
            // ItemSeparatorComponent={this.renderSeparator}
            /> 
      </View>
        </ScrollView >  */}
      </View >

    );
  }
}

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
  siblingImageView: {
    width: 50,
    height: 50,
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
  }
});
