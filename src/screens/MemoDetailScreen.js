import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.memoHeader}>
                        <Text style={styles.memoHeaderTitle}>構造のアイデア</Text>
                        <Text style={styles.memoHeaderDate}>2020/6/20</Text>
                    </View>
                </View>

                <View style={styles.memoContents}>
                    <Text>
                        これは構造のアイデアです。
                    </Text>
                </View>

                <CircleButton color="#fff" style={styles.cicleEditButton}>+</CircleButton>
            </View>
        );
    }
}

var styles = StyleSheet.create ({
    container: {
        flex: 1,
        width: '100%',
    },
    memoHeader: {
        height: 150,
        backgroundColor: '#13174E',
        justifyContent: 'center',
        padding: 12,
    },
    memoHeaderTitle: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    memoHeaderDate: {
        color: '#fff',
        fontSize: 17,
    },
    memoContents: {
        paddingTop: 30,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
    cicleEditButton: {
        top: 123,
    },
});

export default MemoDetailScreen;