import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/Feather';
export default class WebviewScreen extends Component {
  state = {
    WEBVIEW_REF: "weViewRed",
    loading: false
  };
  goBack = () => {
    this.refs[this.state.WEBVIEW_REF].goBack();
  };
  goForward = () => {
    this.refs[this.state.WEBVIEW_REF].goForward();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header loading={this.state.loading} />
        <WebView
          //source={{ uri: "https://twitter.com" }}
          source={{ uri: "http://digitalcampus.in" }}

          ref={this.state.WEBVIEW_REF}
          onLoadStart={() => this.setState({ loading: true })}
          onLoadEnd={() => this.setState({ loading: false })}
        />
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => this.goBack()}
            disabled={this.state.canGoBack}
          >
            <Text style={styles.icon}><Icon name="arrow-left" size={30} />
              {/* ⬅️ */}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>⭐️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goForward()}>
            <Text style={styles.icon}><Icon name="arrow-right" size={30} />
              {/* ➡️ */}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Header = ({ loading }) => (
  <View style={styles.header}>
    <Text style={styles.title}>Examination Report</Text>
    {loading ? <ActivityIndicator color="blue" /> : null}
  </View>
);

const Footer = context => (
  <View style={styles.footer}>
    <TouchableOpacity>
      <Text style={styles.icon}>
        <Icon name="calendar" size={20} />
        {/* ⬅️ */}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity>
      {/* <Text style={styles.icon}>⭐️</Text> */}
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.icon}>
        <Icon name="arrow-right" size={20} />
        {/* ➡️ */}
      </Text>
    </TouchableOpacity>
  </View>
);
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
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white"
  }
});
//0c084c