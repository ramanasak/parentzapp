import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    ActivityIndicator,
    TouchableOpacity,
    FlatList
} from "react-native";
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/Feather';
export default class ReportSelectionScreen extends Component {
    state = {
        WEBVIEW_REF: "weViewRed",
        loading: false,
        dataSource: "",
    };
    goBack = () => {
        this.refs[this.state.WEBVIEW_REF].goBack();
    };
    goForward = () => {
        this.refs[this.state.WEBVIEW_REF].goForward();
    };

    componentDidMount() {
        return fetch("http://www.digitalcampus.in/ParentzApp/examinationReport.jsp?studentId="
            + studentId + "&schoolCode=" + schoolCode + "&classNo=" + classId + "&section=" + studentSection)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("Examination");
                console.log(studentId);
                console.log(schoolCode);
                console.log(classId);
                console.log(studentSection);
                console.log(responseJson);
                this.setState({
                    dataSource: responseJson,
                    isLoading: false
                }, function () { }
                );

            }).catch((error) => {
                console.log(error)
            })
    }//compo



    renderExams = () => {
        console.log("exams  dataSource ", this.state.dataSource);
        let ExamData = this.state.dataSource;
        console.log("ExamData====", ExamData)
        console.log("ExamData====", ExamData.examIds)

        console.log("ExamData termPublished====", ExamData.ExamData)
        if (ExamData.examPublished == true) {
            return (
                <ScrollView style={styles.exams}>
                    <FlatList
                        data={ExamData.examInfo}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ReportDisplayScreen', {
                                    reportType: "Exam",
                                    id: item.examId,
                                    desc: item.examDesc,
                                })}>
                                <Text style={{
                                    marginTop: 2, marginBottom: 3,
                                    textAlign: 'center', color: 'green',
                                    fontWeight: 'bold', fontSize: 18
                                }}> {item.examDesc}</Text>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.examId}
                    />

                </ScrollView>
            );
        } else {
            return (
                <TouchableOpacity>
                    <Text style={{
                        marginTop: 2, marginBottom: 3,
                        textAlign: 'center', color: 'green',
                        fontWeight: 'bold', fontSize: 18
                    }}> Exam Report Not Published yet ! </Text>
                </TouchableOpacity>
            );

        }

    }
    renderTerms = () => {

        console.log("terms dataSource ", this.state.dataSource);
        let TermData = this.state.dataSource;
        console.log("TermData====", TermData)
        console.log("TermData termPublished====", TermData)
        if (TermData.termPublished == true) {
            console.log("TermData.termInfo ====", TermData.termInfo)
            console.log("TermData.termInfo.termId ====", TermData.termInfo.termId)
            console.log("TermData.termInfo.termId ====", TermData.termInfo.termDesc)
            // onPress={() => this.props.navigation.navigate('NoticesDisplayPdfScreen', {
            //     pdfUrl: item.pdfUrl
            // })}

            return (
                <ScrollView style={styles.exams}>
                    <FlatList
                        data={TermData.termInfo}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ReportDisplayScreen', {
                                reportType: "Term",
                                id: item.termId,
                                desc: item.termDesc,
                            })}>
                                <Text style={{
                                    marginTop: 2, marginBottom: 3,
                                    textAlign: 'center', color: 'green',
                                    fontWeight: 'bold', fontSize: 18
                                }}> {item.termDesc}</Text>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.termId}
                    />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ReportDisplayScreen', {
                            reportType: "OverAll",
                        })}>
                        <Text style={{
                            marginTop: 2, marginBottom: 3,
                            textAlign: 'center', color: 'green',
                            fontWeight: 'bold', fontSize: 18
                        }}> OverAll Report</Text>
                    </TouchableOpacity>
                </ScrollView>
            );
        } else {
            return (
                <TouchableOpacity>
                    <Text style={{
                        marginTop: 2, marginBottom: 3,
                        textAlign: 'center', color: 'green',
                        fontWeight: 'bold', fontSize: 18
                    }}> Term Report Not Published yet ! </Text>
                </TouchableOpacity>
            );
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header loading={this.state.loading} />
                {/* , justifyContent: "center" */}
                <View style={{ flex: 1, marginTop: 25 }}>
                    <View style={{ justifyContent: "space-around", alignItems: 'center', backgroundColor: 'white' }}>
                        <TouchableHighlight style={styles.menuButtons}
                            onPress={() => this.setState({ term: !this.state.term, exam: false })}>
                            <View>
                                <Text style={styles.buttonText}>
                                    <Icon name="book-open" size={20} />  Term wise report</Text>
                            </View>
                        </TouchableHighlight>

                        {/* {this.state.term ? this.renderTerms() : null} */}

                        {this.renderTerms()}

                        <TouchableHighlight style={styles.menuButtons}
                            onPress={() => this.setState({ exam: !this.state.exam, term: false })} >
                            <View>
                                <Text style={styles.buttonText}>
                                    <Icon name="book-open" size={20} />  Exam wise report</Text>
                            </View>
                        </TouchableHighlight>

                        {/* {this.state.exam ? this.renderExams() : null} */}
                        {this.renderExams()}
                    </View>
                    {/* <View style={{ justifyContent: "space-around", alignItems: 'center', backgroundColor: 'blue' }}>
                        <Text>Exam wise report</Text>
                    </View> */}
                </View>
            </View >
        );
    }
}
const Header = ({ loading }) => (
    <View style={styles.header}>
        <Text style={styles.title}>Academic Performance</Text>
        {loading ? <ActivityIndicator color="blue" /> : null}
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
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "white"
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
    exams: {
        backgroundColor: "white",
        width: 300,
        paddingVertical: 8,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#2b388f"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '900',
        color: "#fff",
        textAlign: "center",
    }
});
//0c084c