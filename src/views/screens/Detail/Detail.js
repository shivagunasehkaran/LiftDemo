import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../../themes';

class Detail extends Component {
    static navigationOptions = ({navigation}) => ({
        title: ('Detail Screen'),
        headerStyle: {
            backgroundColor: theme.colors.buttonColor,
        },
    });

    render() {
        const orderedList = this.props.navigation.getParam('orderedList');
        return (
            <View>
                <Text style={styles.titleText}>
                    {('Lift order of execution is')}
                </Text>
                <Text style={styles.detailText}>
                    {orderedList}
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
        marginTop: 25,
    },
});

export default Detail;
