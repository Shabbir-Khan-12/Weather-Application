/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

const App = () => {
  const message = 'Hello this is a Weather Application'
  return (
    <SafeAreaView style={styles.root}>
      <Text style={{backgroundColor: 'pink'}}>{message}</Text>
      <Button title='Press' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
