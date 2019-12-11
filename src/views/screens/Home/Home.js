import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Alert, ActivityIndicator, TouchableOpacity} from 'react-native';
import theme from '../../../themes';
import {navigate} from 'react-navigation';

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

    //handling onPress action
    getListViewItem = (item) => {
        Alert.alert(item.key);
    };

    renderItem = (item) => {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                }}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{
                        width: 100,
                        backgroundColor: theme.colors.liftColor,
                    }} />
                    <Text style={styles.item} onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        const {navigate} = this.props.navigation;
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
                    renderItem={({item}) => this.renderItem(item)}
                    ItemSeparatorComponent={this.renderSeparator}
                />
                <TouchableOpacity
                    style={styles.startRunButton}
                    onPress={() => navigate('Detail')}
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
        paddingLeft: 100,
        fontSize: 19,
        height: 90,
    },
    startRunButton: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: theme.colors.buttonColor,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: theme.colors.cardBackground,
    },
    startRunText: {
        color: theme.colors.cardBackground,
        textAlign: 'center',
        fontSize: 15,
    },
});

export default Home;
