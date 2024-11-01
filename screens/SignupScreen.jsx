import { View, Text, ImageBackground, StatusBar, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import styles from '../layout/SignupLayout';
import { signUp } from '../firebase/AuthFunction';

const SignupScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ImageBackground style={styles.background}
    source={require('../image/backgroundSignin.jpg')}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true}/>

      <TouchableOpacity style={styles.backBtn}
      onPress={() => navigation.goBack()}>
        <Image style={styles.backImage}source={require('../image/back.png')}
        onPress={() => navigation.goBack()}/>
      </TouchableOpacity>
    
      <Text style={styles.title}>Create an account</Text>
      <View style={styles.emailInput}>
      <TextInput style={styles.email}
      placeholder='Email'
      value={email}
      onChangeText={setEmail}
      keyboardType='email-address'/>
      </View>

      <View style={styles.passwordInput}>
        <TextInput style={styles.password}
        placeholder='Password'
        secureTextEntry
        onChangeText={setPassword}
        value={password}/>  
      </View>

      <View style={styles.confirmPasswordInput}>
        <TextInput style={styles.confirmPassword}
        placeholder='Confirm Password'
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}/>
      </View>

      <TouchableOpacity style={styles.signUpBtn}
      onPress={() => signUp(email, password, confirmPassword, navigation, setEmail, setPassword, setConfirmPassword)}>
        <Text style={styles.signUptxt}>Sign up</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default SignupScreen;