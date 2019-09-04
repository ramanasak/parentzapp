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
    Dimensions
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'





export default class AttendanceGraphView extends React.Component {

    // render() {
    //   return (
    //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    //       <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around', alignItems: 'center' }}>
    //         <TouchableOpacity>
    //           <Text style={{ fontSize: 20 }} onPress={() => this.increaseCounter()}>Increase</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <Text style={{ fontSize: 20 }}>{this.state.counter}</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <Text style={{ fontSize: 20 }} onPress={() => this.decreaseCounter()}>Decrease</Text>
    //         </TouchableOpacity>
    //       </View >
    //       <View>
    //         {/* <Calendar
    //           //Collection of dates that have to be marked.Default = {}
    //           markedDates={{
    //             '2012-05-16': { selected: true, marked: true, selectedColor: 'blue' },
    //             '2012-05-17': { marked: true },
    //             '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
    //             '2012-05-19': { disabled: true, disableTouchEvent: true }
    //           }}
    //         /> */}
    //       </View>
    //     </View>
    //   );
    // }


    // render() {

    //   const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    //   return (
    //     <AreaChart
    //       style={{ height: 200 }}
    //       data={data}
    //       contentInset={{ top: 30, bottom: 30 }}
    //       curve={shape.curveNatural}
    //       svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
    //     >
    //       <Grid />
    //     </AreaChart>
    //   )
    // }

    // render() {

    //   const fill = 'rgb(134, 65, 244)';
    //   //const data = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80];
    //   const data = [50, 10];





    render() {

        // const data = [20, 25]
        // const CUT_OFF = 20
        // const Labels = ({ x, y, bandwidth, data }) => (
        //     data.map((value, index) => (
        //         <Text
        //             key={index}
        //             x={x(index) + (bandwidth / 2)}
        //             y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
        //             fontSize={14}
        //             fill={'black'}
        //             // fill={value >= CUT_OFF ? 'white' : 'black'}
        //             alignmentBaseline={'middle'}
        //             textAnchor={'middle'}
        //         >
        //             {value}
        //         </Text >
        //     ))
        // )

        const chartConfig = {
            //backgroundGradientFrom: '#1E2923',
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2 // optional, default 3
        }
        const chartConfig3 = {
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 3 // optional, default 3
        }
        const data2 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,// optional
                strokeWidth: 2 // optional
            }]
        }
        const data3 = {
            labels: ['Student Average', 'Class Average'],
            datasets: [{
                data: [50, 80]
            }]
        }
        const screenWidth = Dimensions.get('window').width

        return (
            <View>
                <View style={{ alignItems: "center", marginTop: 50 }}>
                    <Text style={{ fontSize: 18, color: "#303f9f" }}>Student Attendance Graphical View </Text>

                </View>
                <View style={{ alignItems: "center", marginTop: 15 }}>

                    <BarChart
                        //style={graphStyle}
                        data={data3}
                        width={screenWidth - 10}
                        height={220}
                        //width={200}
                        fromZero={true}
                        //yAxisLabel={'$'}
                        chartConfig={chartConfig3}
                    />
                </View>
            </View >
        )
    }




};


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
//export default App;
