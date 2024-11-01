import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import styles from '../layout/DashboardLayout';

const DashboardScreen = ({navigation}) => {
  return (
    <ImageBackground style={styles.container}
    source={require('../image/backgroundDashboard.jpg')}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
      <Text style={styles.title}>Ang ganda {'\n'} mo {'\n'} Ekatrina</Text>
    </ImageBackground>
  )
}

export default DashboardScreen;