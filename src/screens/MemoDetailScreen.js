import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
    if (date == null) { return ''; }
    const dateObject = date.toDate();
    return dateObject.toISOString().split('T')[0];
};

class MemoDetailScreen extends React.Component {
    state = {
        memo: {},
    }

    UNSAFE_componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({ memo: params.memo });
    }

    returnMemo(memo) {
        this.setState({ memo });
    }

    render() {
        const { memo } = this.state;
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.memoHeader}>
                        <Text style={styles.memoHeaderTitle}>{memo.body.substring(0, 10)}</Text>
                        <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>
                    </View>
                </View>

                <View style={styles.memoContents}>
                    <Text style={styles.memoBody}>
                        {memo.body}
                    </Text>
                </View>

                <CircleButton
                    name="pencil"
                    color="#fff"
                    style={styles.cicleEditButton}
                    onPress={() => { this.props.navigation.navigate('MemoEdit', { memo, returnMemo: this.returnMemo.bind(this) }); }}
                />
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
    memoBody: {
        lineHeight: 21,
        fontSize: 17,
    },
    cicleEditButton: {
        top: 123,
    },
});

export default MemoDetailScreen;