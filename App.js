import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoListScreens from './src/screens/MemoListScreens';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoListScreens />
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
});
