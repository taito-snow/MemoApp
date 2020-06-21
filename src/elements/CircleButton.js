import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
    pencil: '\uf303',
    plus: '\uf067',
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
        const { name, style, color } = this.props;

        let bgColor = '#FF50BC';
        let textColor = '#fff';

        if (color === '#fff') {
            bgColor = '#fff';
            textColor = '#FF50BC';
        }

        return (
            <View style={[styles.circleAddButton, style, { backgroundColor: bgColor, }]}>
                {
                    this.state.fontLoaded ? (
                        <CustomIcon name={name} style={[styles.circleAddButtonTitle, { color: textColor, }]} />
                     ) : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleAddButton: {
        position: 'absolute',
        bottom: 38,
        right: 38,
        width: 52,
        height: 52,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    circleAddButtonTitle: {
        fontFamily: 'FontAwsome',
        fontSize: 28,
        lineHeight: 28,
    },
});

export default CircleButton;