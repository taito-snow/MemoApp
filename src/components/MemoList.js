import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class MemoList extends React.Component {
    render() {
      console.log(this.props.memoList);
      return (
        <View style={styles.memoList}>
          <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
            <View style={styles.memoListItems}>
              <Text style={styles.memoTitle}>構造のアイテム</Text>
              <Text style={styles.memoDate}>2020/6/20</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
            <View style={styles.memoListItems}>
              <Text style={styles.memoTitle}>構造のアイテム</Text>
              <Text style={styles.memoDate}>2020/6/20</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
            <View style={styles.memoListItems}>
              <Text style={styles.memoTitle}>構造のアイテム</Text>
              <Text style={styles.memoDate}>2020/6/20</Text>
            </View>
          </TouchableHighlight>
        </View>
        );
      }
}

const styles = StyleSheet.create({
    memoList: {
      width: '100%',
      flex: 1,
    },
    memoListItems: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      backgroundColor: '#fff',
    },
    memoTitle: {
      fontSize: 20,
    },
    memoDate: {
      fontSize: 12,
      color: '#8B8B8B',
    },
});

export default MemoList;