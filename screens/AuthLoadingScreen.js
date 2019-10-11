
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

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
        this._loadData();
        //console.log("isLoggedIn= 2 " + _loadData());
    }
    // componentDidMount(){
    //   this._loadData();
    // }
    render() {
        //console.log("isLoggedIn 1=" + this._loadData());
        return (
            <View style={{ backgroundColor: '#3f51b5', flex: 1, justifyContent: 'center' }}>
                {/* <Text> AuthLoadingScreen </Text> */}
                {/* <ActivityIndicator size="large" color="#0000ff" />
                <ActivityIndicator size="small" color="#00ff00" /> */}
                <ActivityIndicator size="large" color="#00ff00" />
                {/* <ActivityIndicator size="small" color="#00ff00" /> */}

            </View>
        );
    }
    _loadData = async () => {
        console.log("_loadData");
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        const R = await AsyncStorage.getItem('R');
        console.log("isLoggedIn 3 =" + isLoggedIn);
        this.props.navigation.navigate(isLoggedIn !== '1' ? 'LoginScreen' : 'SiblingInfoScreen')
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
});
