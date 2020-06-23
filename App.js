import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreens';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import ENV from './env.json';

require("firebase/firestore");

const firebaseConfig = {
  apiKey:                ENV.FIREBASE_API_KEY,
  authDomain:            ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:           ENV.FIREBASE_DB_URL,
  projectId:             ENV.FIREBASE_PRJ_ID,
  storageBucket:         ENV.FIREBASE_STORAGE,
  messagingSenderId:     ENV.FIREBASE_SENDER_ID,
  appId:                 ENV.FIREBASE_APP_ID,
  measurementId:         ENV.FIREBASE_MESUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);

const App = createStackNavigator ({
  Login:      { screen: LoginScreen },
  Signup:     { screen: SignupScreen },
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
  MemoCreate: { screen: MemoCreateScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'メモ帳',
    headerTintColor: '#fff',
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: "#4149A2",
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 20,
    },
  },
});


export default createAppContainer(App);