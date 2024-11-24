import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";


// Sign up function and conditions
export const signUp = async (
    email: string,
    password: string,
    confirmPassword: string,
    navigation: any,
    setEmail: (email: string) => void,
    setPassword: (password: string) => void,
    setConfirmPassword: (confirmPassword: string) => void ) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        Alert.alert("Invalid Email", "Please enter a valid email address.");
        return;
    }
    if (!email || !password || !confirmPassword) {
        Alert.alert("Missing Fields", "Please fill out all fields.");
        return;
    }
    if (!email.includes("@")) {
        Alert.alert("Invalid Email", "Please enter a valid email address.");
        return;
    }
    if (password !== confirmPassword) { 
        Alert.alert("Invalid Password", "Password did not match.");
        return;
    }
    if (password.length < 8) {
        Alert.alert("Invalid Password", "Password must be at least 8 characters long.");
        return;
    }12345678
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert("Success", "Account created successfully");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigation.navigate("Signin");
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            Alert.alert("Error", "Email already in use.");
        }
        else { console.error("Error signing up:", error);
        }
    }
};

// Sign in function and conditions
export const signIn = async (
    email: string,
    password: string,
    navigation: any ) => {
    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Welcome to our Activity 4");
      navigation.navigate("Dashboard");
      return userInfo.user;
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-credential':
          Alert.alert("Error", "Incorrect password.");
          break;
        case 'auth/user-not-found':
          Alert.alert("Error", "No user found with this email.");
          break;
        case 'auth/invalid-email':
          Alert.alert("Error", "Invalid email address.");
          break;
        default:
          Alert.alert("Error", `Error signing in: ${error.message}`);
          break;
      }
      throw error;
    }
};
