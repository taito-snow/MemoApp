import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoListScreens from './src/screens/MemoListScreens';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      {/* <MemoListScreens /> */}
      {/* <MemoDetailScreen /> */}
      {/* <MemoEditScreen /> */}
      {/* <LoginScreen /> */}
      <SignupScreen />
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
