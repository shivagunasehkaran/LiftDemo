import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Alert, ActivityIndicator, TouchableOpacity} from 'react-native';
import theme from '../../../themes';

class Home extends Component {
    static navigationOptions = () => ({
        title: ('Home Screen'),
        headerStyle: {
            backgroundColor: theme.colors.buttonColor,
        },
    });

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        this.setState({
            loading: false,
        });
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: theme.colors.black,
                }}
            />
        );
    };

    handleStartRun = () => {
        Alert.alert('Clicked');
    };

    //handling onPress action
    getListViewItem = (item) => {
        Alert.alert(item.key);
    };

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="orange" />
                </View>
            );
        }
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
                <TouchableOpacity
                    style={styles.startRunButton}
                    onPress={() => this.handleStartRun}
                    underlayColor='#fff'>
                    <Text style={styles.startRunText}>Start Run</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        paddingTop: 30,
        paddingLeft: 10,
        fontSize: 19,
        height: 90,
    },
    startRunButton: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: theme.colors.buttonColor,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: theme.colors.white,
    },
    startRunText: {
        color: theme.colors.white,
        textAlign: 'center',
        fontSize: 15,
    },
});

export default Home;
