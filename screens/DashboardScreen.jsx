import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import styles from '../layout/DashboardLayout';
import { database } from '../firebaseConfig';
import { ref, onValue, set } from 'firebase/database';

const DashboardScreen = ({navigation}) => {
  return (
    <ImageBackground style={styles.container}
    source={require('../image/backgroundDashboard.jpg')}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
      
    </ImageBackground>
  )
}

export default DashboardScreen;