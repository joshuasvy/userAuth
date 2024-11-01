import React, { useState } from "react";
import { Text, View, StatusBar, ImageBackground, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "../layout/SigninLayout";
import { signIn as signInFunction } from "../firebase/AuthFunction";

const SigninScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    if (!email && !password) {
      Alert.alert("Missing Fields", "Please fill out all fields.");
      return;
    }
    if (!email) {
      Alert.alert("Missing Fields", "Please enter your email address.");
      return;
    }
    if (!password) {
      Alert.alert("Missing Fields", "Please enter your password.");
      return;
    }
    try {
      await signInFunction(email, password, navigation);
    } catch (error) {
      console.log("Login error");
    }
  };

  return (
    <ImageBackground style={styles.container}
    source={require('../image/backgroundSignup.jpg')}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true}/>
      <Text style={styles.title}>Sign in</Text>
      <View style={styles.emailInput}>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.passwordInput}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <Text style={{fontSize: 14, color: 'white', marginLeft: 60, marginTop: 8}}>Forgot password?</Text>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.buttonTxt}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.buttonTxt}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default SigninScreen;
