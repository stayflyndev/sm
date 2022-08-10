import React, {useState} from 'react'

import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function Register() {

  const [data, setData] = useState({
    email: " ",
    password: " ",
    name: " "
  })
  

  return (
    <View style={styles.container}>
        <Text style={{padding:4}}>Registration Screen</Text>
        <TextInput
        style={{padding:10}}
        placeholder='Enter Name'
        />
        <TextInput
        style={{padding:10}}
        placeholder='Enter Email'
        />
        <TextInput
        style={{padding:10}}
        placeholder='Enter Password'
        />

        <Button 
        title="Register Account" 
        onPress={() => navigation.navigate("Register")}/>
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
