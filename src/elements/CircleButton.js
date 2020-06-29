import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';
import { TouchableHighlight } from 'react-native-gesture-handler';

const CustomIcon = createIconSet({
    pencil: '\uf303',
    plus: '\uf067',
    check: '\uf00c',
}, 'FontAwsome');

class CircleButton extends React.Component {
    state = {
        fontLoaded: false,
    }

    async componentDidMount() {
        await Font.loadAsync({
            FontAwsome: fontAwsome,
        });

        this.setState({ fontLoaded: true, });
    }

    render() {
        const { name, style, color, onPress } = this.props;

        let bgColor = '#FF50BC';
        let textColor = '#fff';

        if (color === '#fff') {
            bgColor = '#fff';
            textColor = '#FF50BC';
        }

        return (
            <View style={[styles.container, style]}>
                <TouchableHighlight onPress={onPress} underlayColor="transparent">
                    <View style={[styles.circleAddButton, { backgroundColor: bgColor }]}>
                        {
                            this.state.fontLoaded ? (
                                <CustomIcon name={name} style={[styles.circleAddButtonTitle, { color: textColor }]} />
                             ) : null
                        }
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 52,
        height: 52,
        position: 'absolute',
        bottom: 38,
        right: 38,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    circleAddButton: {
        width: 52,
        height: 52,
        marginBottom: 8,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
    },
    circleAddButtonTitle: {
        fontFamily: 'FontAwsome',
        fontSize: 28,
        lineHeight: 28,
    },
});

export default CircleButton;