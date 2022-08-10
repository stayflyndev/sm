import React from 'react'

import { StyleSheet, Text, View, Button} from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
        <Text >This is the landing page </Text>
        <Button 
        title="Register New Account" 
        onPress={() => navigation.navigate("Register")}/>
        <Button 
        title="Sign Into Account" 
        onPress={() => navigation.navigate("Login")}/>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});