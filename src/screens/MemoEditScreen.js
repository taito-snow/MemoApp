import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { InputAccessoryView, ScrollView } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {

    state = {
        body: {},
        key: {},
    }

    UNSAFE_componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({
            body: params.memo.body,
            key: params.memo.key,
        });
    }

    handlePress() {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        const newDate = firebase.firestore.Timestamp.now();
        db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
          .update({
              body: this.state.body,
              createdOn: newDate,
          })
          .then(() => {
              const { navigation } = this.props;
              navigation.state.params.returnMemo({
                  body: this.state.body,
                  key: this.state.key,
                  createdOn: newDate,
              });
              navigation.goBack();
          })
          .catch(() => {
          });
    }

    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TextInput
                        style={styles.memoEditInput}
                        multiline
                        value={this.state.body}
                        onChangeText={(text) => { this.setState({ body: text }) }}
                        textAlignVertical="top"
                    />
                </ScrollView>
                <CircleButton name="check" onPress={ this.handlePress.bind(this) } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    memoEditInput: {
        backgroundColor: '#fff',
        // flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 18,
    }
});

export default MemoEditScreen;