import React, { useState } from 'react'
import { auth } from '../../firebase/firebase'

import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register() {

  const [userSignedIn, setUser] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("This is the user info: " + userCredential.user.email)
        userSignedIn(true)
      }).catch((err) => {
        console.log(err)
      })
    const redirect = () => navigation.navigate("Login")
  }


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding">

      <View style={styles.inputContainter}>
        <Text style={{ color: 'white', fontWeight: '300' }}>Register Your Account !</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Email'
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Enter Password'
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>

      {/* BUTTONS */}

      <View style={styles.buttonContainer}>


        <TouchableOpacity
          style={styles.button}
          onPress={registerUser}
        >
          <Text style={[styles.buttonText, styles.buttonOutlineText]}>Register Account</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainter: {
    width: '80%',
    paddingTop: '2%'
  },
  input: {
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 5
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,

  },
  button: {
    backgroundColor: 'violet',
    width: '100%',
    padding: 15,
    borderRadius: 6,
    margin: 3,
    borderColor: 'black',
    borderWidth: 2
  },
  buttonOutline: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 4,
    color: 'white'
  },
  buttonText: {
    color: 'black',
    fontWeight: '800',
    fontSize: 12
  },
  buttonOutlineText: {
    color: 'white',
    fontWeight: '800'
  }


});