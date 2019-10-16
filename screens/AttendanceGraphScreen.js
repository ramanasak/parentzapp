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
    StatusBar,
    TouchableOpacity
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import { Text } from 'react-native-svg';

import StudentInfoScreen from './StudentInfoScreen';
import AttendanceGraphView from './AttendanceGraphView';


export default class AttendanceGraphScreen extends React.Component {



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



    //   return (
    //     <BarChart
    //       style={{ height: 200, width: 100 }}
    //       data={data}
    //       svg={{ fill }}
    //       contentInset={{ top: 30, bottom: 30 }}

    //     >
    //       <Grid />
    //     </BarChart>
    //   )
    // }

    render() {

        const data = [10, 5, 25, 15, 20]

        const CUT_OFF = 20
        const Labels = ({ x, y, bandwidth, data }) => (
            data.map((value, index) => (
                <Text
                    key={index}
                    x={x(index) + (bandwidth / 2)}
                    y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
                    fontSize={14}
                    fill={'black'}
                    // fill={value >= CUT_OFF ? 'white' : 'black'}

                    alignmentBaseline={'middle'}
                    textAnchor={'middle'}
                >
                    {value}
                </Text >
            ))
        )

        return (
            <View style={{ flex: 1 }}>
                <View>
                    <StudentInfoScreen />
                </View>
                <View style={{ flex: 1 }}>
                    <View>
                        <AttendanceGraphView />
                    </View>
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
