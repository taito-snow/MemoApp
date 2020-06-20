import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>メモ帳</Text>
        </View>
      </View>

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

      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddButtonTitle}>+</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2FFE8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
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
  memoAddButton: {
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
  memoAddButtonTitle: {
    fontSize: 44,
    lineHeight: 44,
    color: '#fff',
    fontWeight: 'bold',
  },
});
