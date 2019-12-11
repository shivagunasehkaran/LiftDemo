import React, {Component} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
            upliftArray: [],
            downLiftArray: [],
            getOrderedList: [],
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

    getOrderedLift = (uplLftArray, downLiftArray) => {
        uplLftArray.sort();
        downLiftArray.sort();
        downLiftArray.reverse();
        const orderedArray = uplLftArray.concat(downLiftArray);
        this.props.navigation.navigate('Detail', {
            orderedList: orderedArray,
        });
        return orderedArray;
    };

    //handling onPress action
    getUpLiftItem = (item) => {
        this.state.upliftArray.push(item.index);
    };

    //handling onPress action
    getDownLiftItem = (item) => {
        this.state.downLiftArray.push(item.index);
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
                    <Text style={styles.item} onPress={this.getUpLiftItem.bind(this, item)}>{item.upLift}</Text>
                    <Text style={styles.item} onPress={this.getDownLiftItem.bind(this, item)}>{item.downLift}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    handleStartRun = () => {
        this.getOrderedLift(this.state.upliftArray, this.state.downLiftArray);
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
                        {upLift: 'Up Lift 6', downLift: 'Down Lift 6', index: 6},
                        {upLift: 'Up Lift 5', downLift: 'Down Lift 5', index: 5},
                        {upLift: 'Up Lift 4', downLift: 'Down Lift 4', index: 4},
                        {upLift: 'Up Lift 3', downLift: 'Down Lift 3', index: 3},
                        {upLift: 'Up Lift 2', downLift: 'Down Lift 2', index: 2},
                        {upLift: 'Up Lift 1', downLift: 'Down Lift 1', index: 1},
                        {upLift: 'Up Lift G', downLift: 'Down Lift G', index: 0},
                    ]}
                    renderItem={({item}) => this.renderItem(item)}
                    ItemSeparatorComponent={this.renderSeparator}
                />
                <TouchableOpacity
                    style={styles.startRunButton}
                    onPress={this.handleStartRun}
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
        paddingLeft: 50,
        fontSize: 19,
        height: 100,
    },
    startRunButton: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: theme.colors.buttonColor,
    },
    startRunText: {
        color: theme.colors.cardBackground,
        textAlign: 'center',
        fontSize: 15,
    },
});

export default Home;
