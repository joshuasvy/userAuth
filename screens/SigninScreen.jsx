import React, { useState } from "react";
import { Text, View, StatusBar, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert } from "react-native";
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
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
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
      <TouchableOpacity style={styles.signUpBtn} onPress={signIn}>
        <Text style={styles.signUptxt}>Sign in</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default SigninScreen;
