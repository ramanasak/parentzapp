import React, { Component } from "react";
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
  AsyncStorage
} from "react-native";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import Icon from "react-native-vector-icons/Feather";
import { BottomTabBar } from "react-navigation";
export default class ContentContainer extends Component {
  constructor(props) {
    super(props);
  }
  _Logout = async () => {
    console.log("_Logout");
    AsyncStorage.clear();
    this.props.navigation.navigate('LoginScreen')
  }
  render() {
    //console.log("global.student_res=" + global.student_res);
    const myObjStr = JSON.stringify(global.student_res);
    //console.log("myObjStr=" + myObjStr);
    //const school_name=global.student_res.studentInfo[0].schoolName;
    //const student_name=global.student_res.studentInfo[0].studentName;

    // console.log("myObjStr=" + myObjStr);

    return (
      <TouchableOpacity activeOpacity={1}>
        <TouchableOpacity activeOpacity={1}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "flex-start"
              }}
            >
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
                    source={{ uri: global.studentImageUrl }}
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
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                      {studentName}
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      backgroundColor: "white"
                    }}
                  >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SiblingInfoScreen")}>
                      <Icon name="chevron-down" size={20} color={"blue"} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: "grey",
                  borderBottomWidth: 0.5,
                  marginBottom: 5,
                  marginTop: 15
                }}
              />
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
                    backgroundColor: "white "
                  }}
                >
                  <Text style={{ fontSize: 15 }}>
                    <Icon name="award" size={15} color="orange" /> {schoolName}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                borderBottomColor: "grey",
                borderBottomWidth: 0.5,
                marginBottom: 5,
                marginTop: 15
              }}
            />

            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "flex-start",
                height: 40,
                justifyContent: "center",
                marginLeft: 20,
                marginBottom: 10
              }}
            >
              <TouchableHighlight underColor={"rgba(0,0,0,0.2)"}>
                <View
                  style={{
                    //flex: 1,
                    flexDirection: "row",
                    backgroundColor: "white"
                    //alignItems: "center"
                  }}
                >
                  <Text
                    style={styles.buttonText}
                    onPress={() => this.props.navigation.navigate("Notices")}
                  >
                    <Icon name="file-text" size={20} color={'#008080'} /> Notices
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "flex-start",
                height: 40,
                justifyContent: "center",
                marginLeft: 20,
                marginBottom: 10
              }}
            >
              <TouchableHighlight underColor={"rgba(0,0,0,0.2)"}>
                <View
                  style={{
                    //flex: 1,
                    flexDirection: "row",
                    backgroundColor: "white"
                    //alignItems: "center"
                  }}
                >
                  {/* onPress={() => this.props.navigation.navigate("Gallery")}
                
                onPress={() => this.props.navigation.navigate("Welcome")}
                onPress={() => this.props.navigation.navigate("Fee")} */}
                  <Text
                    style={styles.buttonText}
                    onPress={() => this.props.navigation.navigate("Attendance")}
                  >
                    <Icon name="calendar" size={20} color={'#0000ff'} /> Attendance
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "flex-start",
                height: 40,
                justifyContent: "center",
                marginLeft: 20,
                marginBottom: 10
              }}
            >
              <TouchableHighlight underColor={"rgba(0,0,0,0.2)"}>
                <View
                  style={{
                    //flex: 1,
                    flexDirection: "row",
                    backgroundColor: "white"
                    //alignItems: "center"
                  }}
                >

                  <Text
                    style={styles.buttonText}
                    onPress={() => this.props.navigation.navigate('Gallery')}
                  >
                    <Icon name="film" size={20} color={'#660066'} /> Gallery
                  </Text>
                </View>
              </TouchableHighlight>
            </View>



            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "flex-start",
                height: 40,
                justifyContent: "center",
                marginLeft: 20,
                marginBottom: 10
              }}
            >
              <TouchableHighlight underColor={"rgba(0,0,0,0.2)"}>
                <View
                  style={{
                    //flex: 1,
                    flexDirection: "row",
                    backgroundColor: "white"
                    //alignItems: "center"
                  }}
                >
                  <Text
                    style={styles.buttonText}
                    onPress={() => this.props.navigation.navigate('Examination')}
                  >
                    <Icon name="bar-chart-2" size={20} color={'#f7347a'} /> Progress Report
                  </Text>
                </View>
              </TouchableHighlight>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "flex-start",
                height: 40,
                justifyContent: "center",
                marginLeft: 20,
                marginBottom: 10
              }}
            >
              <TouchableHighlight underColor={"rgba(0,0,0,0.2)"}>
                <View
                  style={{
                    //flex: 1,
                    flexDirection: "row",
                    backgroundColor: "white"
                    //alignItems: "center"
                  }}
                >
                  <Text style={styles.buttonText}>
                    <Icon name="send" size={20} color={'#ffa500'} /> Communication
                  </Text>
                </View>
              </TouchableHighlight>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "flex-start",
                height: 40,
                justifyContent: "center",
                marginLeft: 20,
                marginBottom: 10
              }}
            >
              <TouchableHighlight underColor={"rgba(0,0,0,0.2)"}>
                <View
                  style={{
                    //flex: 1,
                    flexDirection: "row",
                    backgroundColor: "white"
                    //alignItems: "center"
                  }}
                >
                  <Text
                    style={styles.buttonText}

                  >
                    <Icon name="briefcase" size={20} color={'green'} /> Fee Payment
                  </Text>
                </View>
              </TouchableHighlight>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "flex-start",
                height: 40,
                justifyContent: "center",
                marginLeft: 20,
                marginBottom: 10
              }}
            >
              <TouchableHighlight underColor={"rgba(0,0,0,0.2)"}>
                <View
                  style={{
                    //flex: 1,
                    flexDirection: "row",
                    backgroundColor: "white"
                    //alignItems: "center"
                  }}
                >
                  <Text style={styles.buttonText}>
                    <Icon name="book" size={20} color={'#660066'} /> Digital Campus Diary
                  </Text>
                </View>
              </TouchableHighlight>
            </View>

            <View
              style={{
                //borderBottomColor: 'grey',
                //background: lineargradient(to border, rgba(255, 0, 0, .4), rgba(255, 0, 0, .4)),
                borderBottomWidth: 0.5,
                marginBottom: 15,
                marginTop: 50,
                margin: 10
              }}
            />

            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "flex-start",
                height: 40,
                justifyContent: "center",
                marginLeft: 20,
                marginBottom: 10
              }}
            >
              <TouchableHighlight underColor={"rgba(0,0,0,0.2)"}>
                <View
                  style={{
                    //flex: 1,
                    flexDirection: "row",
                    backgroundColor: "white"
                    //alignItems: "center"
                  }}
                >
                  <Text style={styles.buttonText} onPress={() => this._Logout()}>
                    <Icon name="power" size={20} color={'red'} /> Logout
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
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
    //fontWeight: "900",
    //color: "grey",
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
  }
});
