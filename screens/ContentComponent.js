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
  TouchableHighlight
} from "react-native";
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Feather';
export default class ContentContainer extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={1}>
        <TouchableOpacity activeOpacity={1}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                backgroundColor: "grey",
                alignItems: "center"
              }}
            >
              <Image
                source={require("./../studentpic.jpg")}
                style={{
                  width: 75,
                  height: 75,
                  marginTop: 5,
                  borderRadius: 37.5
                  //marginLeft: 15
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 5
                }}
              >
                My Profile
              </Text>
            </View>
<View  style={{
                flex: 1,
                backgroundColor: "red",
                alignItems: "center",
                height:40,
                justifyContent:'center'
              }}>
<TouchableHighlight underColor={"rgba(0,0,0,0.2)"} >
              <View tyle={{
                flex: 1,
                flexDirection:'row',
                backgroundColor: "black",
                alignItems: "center"
              }}>
                  <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Notices')} >
                                <Icon name="file-text" size={20} />   Notices</Text>
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
  
