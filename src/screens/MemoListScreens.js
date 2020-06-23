import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreens extends React.Component {
    handlePress() {
        const { params } = this.props.navigation.state;
        this.props.navigation.navigate('MemoCreate', { currentUser: params.currentUser });
    }

    render() {
        return(
            <View style={styles.container}>
                <MemoList navigation={this.props.navigation} />
                <CircleButton name="plus" onPress={this.handlePress.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#E6FFEC',
    },
});

export default MemoListScreens;