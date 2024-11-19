import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/bgwp.jpg')} style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>Business Managment</Text>
      <Button title="Invoice Generator" onPress={() => navigation.navigate('Invoice')} />
    </View>
    </ImageBackground> 
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensures the image covers the entire screen
    resizeMode: 'cover', // Ensures the image covers the area while maintaining aspect ratio
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
