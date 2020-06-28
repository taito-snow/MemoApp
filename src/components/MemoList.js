import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const dateString = (date) => {
  if (date == null) { return ''; }
  const dateObject = date.toDate();
  return dateObject.toISOString().split('T')[0];
};

class MemoList extends React.Component {
  renderMemo({ item }) {
    return(
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail', {memo: item}); }}>
        <View style={styles.memoListItems}>
          <Text style={styles.memoTitle}>{item.body.substring(0, 10)}</Text>
          <Text style={styles.memoDate}>{dateString(item.createdOn)}</Text>
        </View>
      </TouchableHighlight>
    );
  }
  
  render() {
    return (
      <View style={styles.memoList}>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
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