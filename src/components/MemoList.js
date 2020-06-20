import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
    render() {
        return (
        <View style={styles.memoList}>
          <View style={styles.memoListItems}>
            <Text style={styles.memoTitle}>構造のアイテム</Text>
            <Text style={styles.memoDate}>2020/6/20</Text>
          </View>
          <View style={styles.memoListItems}>
            <Text style={styles.memoTitle}>構造のアイテム</Text>
            <Text style={styles.memoDate}>2020/6/20</Text>
          </View>
          <View style={styles.memoListItems}>
            <Text style={styles.memoTitle}>構造のアイテム</Text>
            <Text style={styles.memoDate}>2020/6/20</Text>
          </View>
          <View style={styles.memoListItems}>
            <Text style={styles.memoTitle}>構造のアイテム</Text>
            <Text style={styles.memoDate}>2020/6/20</Text>
          </View>
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