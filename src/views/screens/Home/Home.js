import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, FlatList, Alert} from 'react-native';
import theme from '../../../themes';

class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        title: ('Home Screen'),
        headerStyle: {
            backgroundColor: theme.colors.buttonColor,
        },
        headerRight: (
            <Button title={('Start Run')}
                    color="#000000"
                    onPress={() => navigation.navigate('Detail')} />
        ),
    });

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#000',
                }}
            />
        );
    };
    //handling onPress action
    getListViewItem = (item) => {
        Alert.alert(item.key);
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Lift Floor 6'},
                        {key: 'Lift Floor 5'},
                        {key: 'Lift Floor 4'},
                        {key: 'Lift Floor 3'},
                        {key: 'Lift Floor 2'},
                        {key: 'Lift Floor 1'},
                        {key: 'Lift Floor G'},
                    ]}
                    renderItem={({item}) =>
                        <Text style={styles.item}
                              onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 100,
    },
});

export default Home;
