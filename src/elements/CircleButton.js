import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
    render() {
        const { style, color } = this.props;

        let bgColor = '#FF50BC';
        let textColor = '#fff';

        if (color === '#fff') {
            bgColor = '#fff';
            textColor = '#FF50BC';
        }

        return (
            <View style={[styles.circleAddButton, style, { backgroundColor: bgColor, }]}>
                <Text style={[styles.circleAddButtonTitle, { color: textColor, }]}>
                    {this.props.children}
                </Text>
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
        fontSize: 44,
        lineHeight: 44,
    },
});

export default CircleButton;