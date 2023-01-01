import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CustomComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello! This my custom Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: "red",
  }
});

