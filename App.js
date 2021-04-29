/* eslint-disable no-use-before-define */
import React from 'react';
import {
  StyleSheet, Platform, SafeAreaView, StatusBar,
} from 'react-native';
import AppNavigator from './routes/AppNavigator';

export default function App({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.safeAreaBottom}>
        <AppNavigator />
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: '#363946',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  safeAreaBottom: {
    flex: 1,
    backgroundColor: '#819595',
  },
});
