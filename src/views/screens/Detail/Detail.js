import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import theme from '../../../themes';

class Detail extends Component {
    static navigationOptions = ({navigation}) => ({
        title: ('Detail screen'),
        headerStyle: {
            backgroundColor: theme.colors.buttonColor,
        },
        headerRight: (
            <Icon style={{paddingRight: 15, color: theme.colors.black}}
                  onPress={() => navigation.navigate('Home')}
                  name="plus"
                  size={20} />
        ),
    });

    render() {
        return (
            <View>
                <Text>
                    {('Detail')}
                </Text>
            </View>
        );
    }
}

export default Detail;
