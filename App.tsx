/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Text style={styles.container}>MultiDeli App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
    fontSize: 30,
    textAlign: 'center',
  }
});

export default App;
