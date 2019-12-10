import React, {Component} from 'react';
import {Text, View} from 'react-native';

import theme from '../../../themes';

class Detail extends Component {
    static navigationOptions = ({navigation}) => ({
        title: ('Detail Screen'),
        headerStyle: {
            backgroundColor: theme.colors.buttonColor,
        },
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
