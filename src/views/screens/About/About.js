import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../../themes';

class About extends Component {
    static navigationOptions = ({navigation}) => ({
        title: ('About'),
        headerStyle: {
            backgroundColor: theme.colors.buttonColor,
        },
    });

    render() {
        return (
            <View>
                <Text style={styles.detailText}>
                    {('The sample Lift App developed for demo purpose and This App is only for showing the lift logic and UI designs.')}
                </Text>
                <Text style={styles.addressText}>
                    {('Shiva Gunasehkaran')}
                </Text>
                <Text style={styles.phoneNumberText}>
                    {('Contact me at +91 9500936053')}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    detailText: {
        color: theme.colors.black,
        padding: 20,
        textAlign: 'center',
        fontSize: 18,
        marginTop: 200,
    },
    addressText: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 100,
        fontSize: 22,
    },
    phoneNumberText: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 15,
    },
});

export default About;
