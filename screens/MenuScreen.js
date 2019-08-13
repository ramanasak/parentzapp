import React, { Fragment } from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class MenuScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>MenuScreen </Text>
            </View>
        );
    }
}

