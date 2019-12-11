import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../../themes';

class Detail extends Component {
    static navigationOptions = () => ({
        title: ('Detail Screen'),
        headerStyle: {
            backgroundColor: theme.colors.buttonColor,
        },
    });

    render() {
        return (
            <View>
                <Text style={styles.titleText}>
                    {('Order of Execution is')}
                </Text>
                <Text style={styles.detailText}>
                    {('No value')}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        color: theme.colors.black,
        textAlign: 'center',
        fontSize: 25,
        marginTop: 150,
    },
    detailText: {
        color: theme.colors.black,
        textAlign: 'center',
        fontSize: 22,
        marginTop: 20,
    },
});

export default Detail;
