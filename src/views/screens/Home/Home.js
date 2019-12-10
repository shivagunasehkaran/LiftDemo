import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import theme from '../../../themes';

class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        title: ('Demo Lift'),
        headerStyle: {
            backgroundColor: theme.colors.buttonColor,
        },
        headerRight: (
            <Icon style={{paddingRight: 15, color: theme.colors.black}}
                  onPress={() => navigation.navigate('Detail')}
                  name="plus"
                  size={20} />
        ),
    });

    render() {
        return (
            <View>
                <Text>
                    {('Home')}
                </Text>
            </View>
        );
    }
}

export default Home;
