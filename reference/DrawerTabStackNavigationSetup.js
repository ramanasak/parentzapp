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
    Button,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    ToastAndroid,
    Image
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Feather';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator, router } from "react-navigation";

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
class WelcomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>welcome </Text>
                <Button title="Login"
                    onPress={() => this.props.navigation.navigate('Dashboard')} />
                <Button title="SignUp"
                    onPress={() => alert("signup")} />
            </View>
        );
    }
}

class Feed extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>feed </Text>
                <Button title="Notices"
                    onPress={() => this.props.navigation.navigate('NoticeDiplayScreen')} />
            </View>
        );
    }
}

class Profile extends React.Component {
    static navigationOptions = {
        title: 'profile',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Profile </Text>
                <Button title="profiledisplay"
                    onPress={() => this.props.navigation.navigate('ProfileDiplayScreen')} />
            </View>
        );
    }
}

class Settings extends React.Component {
    static navigationOptions = {
        title: 'settings',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>settings </Text>
                <Button title="settings"
                    onPress={() => this.props.navigation.navigate('SettingsDisplayScreen')} />
            </View>
        );
    }
}
class NoticeDisplay extends React.Component {
    static navigationOptions = {
        title: 'NoticeDisplay',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>NoticeDisplay </Text>
            </View>
        );
    }
}
class ProfileDisplay extends React.Component {
    static navigationOptions = {
        title: 'ProfileDisplay',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>ProfileDisplay </Text>
            </View>
        );
    }
}
class SettingsDisplay extends React.Component {
    static navigationOptions = {
        title: 'SettingsDisplay',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>SettingsDisplay </Text>
            </View>
        );
    }
}
const FeedStack = createStackNavigator(
    {
        Feed: {
            screen: Feed,
            navigationOptions: ({ navigation }) => {
                return {
                    headerLeft: (<Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="menu"
                        size={30}
                    />)
                }
            }
        },
        NoticeDiplayScreen: {
            screen: NoticeDisplay
        }
    },
    {
        defaultNavigationOptions: {
            gesturesEnabled: true
        }

    }
);
const ProfileStack = createStackNavigator(
    {
        Profile: {
            screen: Profile,
            navigationOptions: ({ navigation }) => {
                return {
                    headerLeft: (<Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="menu"
                        size={30}
                    />)
                }
            }
        },
        ProfileDiplayScreen: {
            screen: ProfileDisplay
        }
    }
);
const SettingsStack = createStackNavigator(
    {
        Settings: {
            screen: Settings,
            navigationOptions: ({ navigation }) => {
                return {
                    headerLeft: (<Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="menu"
                        size={30}
                    />)
                }
            }
        },
        SettingsDisplayScreen: {
            screen: SettingsDisplay
        }
    }
);
const DashboardTabNavigator = createBottomTabNavigator(
    {
        FeedStack,
        ProfileStack,
        SettingsStack
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                header: null,
                headerTitle: routeName
            };
        }
    }
);
const DashboardStackNavigator = createStackNavigator(
    {
        DashboardTabNavigator: DashboardTabNavigator
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="menu"
                        size={30}
                    />
                )
            };
        }
    }
);


const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator
    },
    Profile: {
        screen: ProfileStack
    },
    Settings: {
        screen: SettingsStack
    }
});

const AppSwitchNavigator = createSwitchNavigator({
    Welcome: { screen: WelcomeScreen },
    Dashboard: { screen: AppDrawerNavigator }
});
const AppContainer = createAppContainer(AppSwitchNavigator);
//const AppContainer = createAppContainer(AppDrawerNavigator);
//const AppContainer = createAppContainer(DashboardBottomTabNavigator);

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
    }
});
