import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from '../layout/DashboardLayout';

const DashboardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DashboardScreen</Text>
    </SafeAreaView>
  )
}

export default DashboardScreen;