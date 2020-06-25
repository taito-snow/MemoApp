import React from 'react';
import { StyleSheet, View } from 'react-native';

import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreens extends React.Component {
    state = {
        memoList: [],
    }

    UNSAFE_componentWillMount() {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        db.collection(`users/${currentUser.uid}/memos`)
          .get()
          .then((snapshot) => {
              const memoList = [];
              snapshot.forEach((doc) => {
                  memoList.push(doc.data());
              });
              this.setState({ memoList });
          })
          .catch((error) => {
              console.log(error);
          });
    }

    handlePress() {
        this.props.navigation.navigate('MemoCreate');
    }

    render() {
        return(
            <View style={styles.container}>
                <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
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