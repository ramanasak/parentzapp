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
import StudentInfoScreen from './StudentInfoScreen';

export default class InboxScreen extends React.Component {
    static navigationOptions = {
        title: "Fee2"
      };
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }//constructor

    //https://facebook.github.io/react-native/movies.json
    //https://jsonplaceholder.typicode.com/posts
    // static navigationOptions = {
    //     title: 'Notices',

    // };
    renderSeparator = () => {
        return (
            // <View style={{ height: 1, width: '100%', backgroundColor: 'grey' }}>
            // </View>
            <View
                style={{
                    borderBottomColor: "grey",
                    borderBottomWidth: 0.5,
                    marginBottom: 5,
                    marginTop: 5
                }}
            />
        )
    }
    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.list} onPress={() => ToastAndroid.show(item.noticeHeading, ToastAndroid.SHORT)}>
                
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center' }}>
                    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white',alignItems:'center' }}>
                        <Text style={{ fontSize: 18, color: '#3f51b5', marginBottom: 1, marginTop: 1, justifyContent: 'center' }}>
                             <Icon name="message-square" size={20} color={"#004ea8"} />
                        </Text>
                    </View>
                    
                    <View style={{
                        flex: 11, justifyContent: 'flex-start', marginLeft: 1, backgroundColor: 'white',
                        borderColor: 'black', borderWidth: 1, borderRadius: 10, borderColor: 'white'
                    }}>
                        <Text
                            style={{
                                fontSize: 18, color: 'black', marginBottom: 1, marginTop: 1,
                                justifyContent: 'center', marginLeft: 2
                            }}
                        >
                            {item.noticeHeading}   
                        </Text>
                        <Text style={{ fontSize: 14, color: 'green', marginBottom: 5, marginLeft: 2 }}>
                            {item.noticeContent}
                        </Text>
                    </View>
                    {/* <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 18, color: '#3f51b5', marginBottom: 1, marginTop: 1, justifyContent: 'center' }}>
                            {/* <Icon name="paperclip" size={20} color={"#004ea8"} 
                        </Text>
                    </View> */}
                </View>
            </TouchableOpacity>

        )
    }
    //digitalcampus.in/ParentzApp/notices.jsp?
    //studentId=13207&password=Digital@123&schoolCode=VERSION-DEMO&classNo=31&section=A
    componentDidMount() {

        return fetch("http://digitalcampus.in/ParentzApp/notices.jsp?studentId="+studentId+"&schoolCode="+schoolCode+"&classNo="+classId+"&section="+studentSection)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("Notices");
                console.log(responseJson);
                this.setState({
                    dataSource: responseJson.studentNotice,
                    isLoading: false
                }, function () { }
                );

            }).catch((error) => {
                console.log(error)
            })
    }//compo



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

                <StudentInfoScreen />
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: "#303f9f", fontSize: 20, textAlign: 'center', marginBottom: 15, marginTop: 10 }}>
                        <Icon name="mail" size={20} />  INBOX</Text>
                </View>
                <View style={{ width: Dimensions.get("window").width }}>
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