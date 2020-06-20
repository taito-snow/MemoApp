import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
    render() {
        return (
            <View style={styles.circleAddButton}>
                <Text style={styles.circleAddButtonTitle}>
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
        backgroundColor: '#FF50BC',
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
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CircleButton;