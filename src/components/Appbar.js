import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appbar extends React.Component {
    render() {
        return (
            <View style={styles.appbar}>
                <View>
                    <Text style={styles.appbarTitle}>メモ帳</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#1D1B5F',
        height: 100,
        paddingTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0, },
        shadowOpacity: 0.6,
        shadowRadius: 3,
        zIndex: 10,
    },
    appbarTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Appbar;