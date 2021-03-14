import React from 'react';
import { StyleSheet, Text, View,ImageBackground, StatusBar } from 'react-native';
import CarItem from './components/CarItem/'
export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
        name = 'Model X'
        price = 'Order Online For ' 
        touchless ='Touchless Delivery' 
        image = {require("./assets/images/ModelX.jpeg")}/>
        <CarItem 
        name = 'Model X'
        price = 'Order Online For ' 
        touchless ='Touchless Delivery' 
        image = {require("./assets/images/ModelX.jpeg")}/>
        <CarItem 
        name = 'Model X'
        price = 'Order Online For ' 
        touchless ='Touchless Delivery' 
        image = {require("./assets/images/ModelX.jpeg")}/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
