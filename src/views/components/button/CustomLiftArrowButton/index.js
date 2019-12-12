import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import theme from '../../../../themes';
import Icon from 'react-native-vector-icons/FontAwesome5';

// NOTE: this button inside the listview to press the up and down arrow buttons.
// with maximum only 1 image & 1 text buttons
const CustomLiftArrowButton = (props) => {
    const {
        item,
        upArrowButtonOnPress,
        downArrowButtonOnPress,
    } = props;

    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{
                width: 100,
                backgroundColor: theme.colors.liftColor,
            }} />
            <TouchableOpacity onPress={upArrowButtonOnPress}>
                <View style={{
                    backgroundColor: theme.colors.cardBackground,
                    width: 120,
                    marginLeft: 30,
                }}>
                    <Icon style={{marginLeft: 45, marginTop: 30, color: theme.colors.black}}
                          name="arrow-up"
                          size={25} />
                    <Text style={{
                        paddingTop: 20,
                        paddingLeft: 20,
                        fontSize: 19,
                        height: 100,
                    }}>{item.upLift}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={downArrowButtonOnPress}>
                <View style={{
                    backgroundColor: theme.colors.cardBackground,
                    width: 120,
                    marginLeft: 30,
                }}>
                    <Icon style={{marginLeft: 50, marginTop: 30, color: theme.colors.black}}
                          name="arrow-down"
                          size={25} />
                    <Text style={{
                        paddingTop: 20,
                        paddingLeft: 10,
                        fontSize: 19,
                        height: 100,
                    }}>{item.downLift}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CustomLiftArrowButton;
