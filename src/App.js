import React, {Component} from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import theme from './themes';
import Home from './views/screens/Home/Home';
import Detail from './views/screens/Detail/Detail';
import About from './views/screens/About/About';

const HomeScreen = createStackNavigator({
    Home: {
        screen: Home,
    },
    Detail: {
        screen: Detail,
    },
});

const AboutScreen = createStackNavigator({
    About: {
        screen: About,
    },
});

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{textAlign: 'center', fontSize: 10, color: tintColor}}>
                        {('Home')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="home" size={horizontal ? 20 : 25} color={tintColor} />,
            },
        },
        AboutScreen: {
            screen: AboutScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{textAlign: 'center', fontSize: 10, color: tintColor}}>
                        {('About')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="bars" size={horizontal ? 20 : 25} color={tintColor} />,
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: theme.colors.buttonColor,
            inactiveTintColor: theme.colors.secondaryText,
            style: {
                backgroundColor: theme.colors.divider,
            },
        },
    },
);

const AppContainer = createAppContainer(TabNavigator);

class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

export default App;
