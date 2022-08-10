import React from 'react'

import {KeyboardAvoidingView, StyleSheet, Text, View, Button, TouchableOpacity, TextInput} from 'react-native';

export default function Login({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container}>
        <Text >Login Screen </Text>
        <View style={styles.inputContainter}>
        <TextInput
        style={{padding:10}}
        placeholder='Enter Email'
        // value={}
        // onChangeText={}
        />
        <TextInput
        style={{padding:10}}
        placeholder='Enter Password'
        // value={}
        // onChangeText={}
        secureTextEntry
        />
        </View>

        <Button 
        color='#f194ff'
        title="Sign In" 
        onPress={() => navigation.navigate("Register")}/>
        
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});