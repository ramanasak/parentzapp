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
    Dimensions
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
export default class SentboxView extends React.Component {

    static navigationOptions = {
        title: 'Attachments',
    };
    render() {
        const To = this.props.navigation.getParam("To");
        const cc = this.props.navigation.getParam("cc");
        const datetime = this.props.navigation.getParam("datetime");
        const sub_name = this.props.navigation.getParam("sub_name");
        const attachment = this.props.navigation.getParam("attachment");
        const msg = this.props.navigation.getParam("msg");

        console.log("To====" + To);
        console.log("cc====" + cc);
        console.log("datetime====" + datetime);
        console.log("sub_name====" + sub_name);
        console.log("attachment====" + attachment);
        console.log("msg====" + msg);
        //const source = { uri: 'http://temp.digitalcampus.in/schoollogos/Barasat Indira Gandhi Memorial High School/NoticeFiles/6-23-04-2019.pdf', cache: true };

        //const source = { uri: pdfUrl, cache: true };

        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};
        //http://samples.leanpub.com/thereactnativebook-sample.pdf
        //
        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};

        return (
            <View style={styles.container}>
                <View style={styles.Viewcontainer}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', marginLeft: 5 }}>
                        <Text style={{ fontWeight: 'bold' }}>To : </Text>
                        <Text> {To} </Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', marginLeft: 5 }}>
                        <Text style={{ fontWeight: 'bold' }}>CC : </Text>
                        <Text> {cc} </Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', marginLeft: 5 }}>
                        <Text style={{ fontWeight: 'bold' }}>Subject :  </Text>
                        <Text> {sub_name} </Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', marginLeft: 5 }}>
                        <Text style={{ fontWeight: 'bold' }}>Date & Time : </Text>
                        <Text> {datetime} </Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', marginLeft: 5 }}>
                        <Text style={{ fontWeight: 'bold' }}>Message :  </Text>
                        <Text> {msg} </Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', marginLeft: 5 }}>
                        <Text style={{ fontWeight: 'bold' }}>Attachment :  </Text>
                        <Text> {attachment} </Text>
                    </View>
                </View>
            </View>
        )
    }
}
const HeaderComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', paddingRight: 50 }}>
            <Text style={{ fontSize: 18, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>Parentz App</Text>
        </View>
    )
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
    Viewcontainer: {
        borderColor: 'grey',
        borderWidth: 2,
        width: Dimensions.get('window').width,
        marginTop: 10,
        justifyContent: 'space-around',
        padding: 5

    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    }
});