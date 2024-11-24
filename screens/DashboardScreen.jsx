import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ImageBackground, ScrollView, Touchable } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import styles from '../layout/DashboardLayout';
import { database } from '../firebaseConfig';
import { ref, onValue, set } from 'firebase/database';

const DashboardScreen = ({navigation}) => {

  const [quantity, setQuantity] = useState(0); // useState for quantity setting the value to 0.

  useEffect (() => { // Handling side effects in components, such as fetching data or subscribing to events.
    const dbValue = ref(database, "quantity"); // rendering data from firebase database; updating the changes in "quantity" from in useState..
    return onValue(dbValue, (snapshot) => {  // snapshot function - updating the changes whenever the data on dvValue change, the snapshop function will be executed.
      setQuantity(snapshot.val()); // updating realtime whenever the value changes in "setQuantity" and executed by snapshot function.
    }); 
  }, []); // when the component mounts, the useEffect will be executed.

  const addFunction =  () => { // adding functionality
    const dbValue = ref(database, "quantity"); // calling the "quantity" value from useState
    set(dbValue, quantity + 1); // updating the value
  }

  const deducFunction = () => { // deducting functionality
    const dbValue = ref(database, "quantity");
    set(dbValue, quantity - 1);
  }

  return (
    <ImageBackground style={styles.container}
    source={require('../image/backgroundDashboard.jpg')}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
      <View style={styles.quantityContainer}>
        <Text style={styles.title}>Counter</Text>
        <Text style={styles.quantityText}>{quantity}</Text>
        {/* calling the quantity value from useState, and update automatically in real time because of the useEffect */}
        <View style={styles.quantityBtn}>
        <TouchableOpacity style={styles.deducBtn}
          onPress={deducFunction}>
          {/* calling the minus functionality using addFunction */}
            <Text style={styles.deducBtnText}>—</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtn}
          onPress={addFunction}>
          {/* calling the adding functionality using addFunction */}
            <Text style={styles.addBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutBtn}
      onPress={() => navigation.navigate("Signin")}>
        <Text style={styles.logoutBtnTxt}>Log out</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default DashboardScreen;