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

export default class StudentInfoScreen extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', borderWidth: 0, backgroundColor: 'white', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                    <Image style={styles.imageView2} source={require('./../studentpic.jpg')} />
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