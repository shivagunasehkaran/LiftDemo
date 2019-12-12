import React, {Component} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import theme from '../../../themes';
import CustomLiftArrowButton from '../../components/button/CustomLiftArrowButton';

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

    // to get ordered list and values display to details screen
    getOrderedLift = (upLiftArray, downLiftArray) => {
        upLiftArray.sort();
        downLiftArray.sort();
        downLiftArray.reverse();

        const orderedArray = upLiftArray.concat(downLiftArray);

        // navigating to detail screen
        this.props.navigation.navigate('Detail', {
            orderedList: orderedArray,
        });

        return orderedArray;
    };

    //handling Up onPress action
    getUpLiftItem = (item) => {
        this.state.upliftArray.push(item.index);
    };

    //handling Down onPress action
    getDownLiftItem = (item) => {
        this.state.downLiftArray.push(item.index);
    };

    // flat list rendered items in reusable components
    renderItem = (item) => {
        return (
            <CustomLiftArrowButton
                item={item}
                upArrowButtonOnPress={this.getUpLiftItem.bind(this, item)}
                downArrowButtonOnPress={this.getDownLiftItem.bind(this, item)}
            />
        );
    };

    // start run button press
    handleStartRun = () => {
        this.getOrderedLift(this.state.upliftArray, this.state.downLiftArray);
    };

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
    loader: {
        marginTop: 20,
    },
    startRunButton: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: theme.colors.buttonColor,
    },
    startRunText: {
        color: theme.colors.black,
        textAlign: 'center',
        fontSize: 15,
    },
});

export default Home;
