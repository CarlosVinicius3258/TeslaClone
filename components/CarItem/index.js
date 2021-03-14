import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import styles from "./styles.js";
import StyledButton from "../StyledButton";

const CarItem = () => {
    return (
     <View style={styles.carContainer}>
        <ImageBackground
          source={require('../../assets/images/ModelX.jpeg')} 
          style={styles.image}
     />
    <View style={styles.titles}>
        <Text style={styles.title}>Model X</Text> 
        <Text style = {styles.subtitle}>Starting at $69,428</Text>

        
    </View>
       
    <StyledButton 
        type='primary' 
        content='Custom order' 
        onPress={() => {
            console.warn("Custom Order was pressed");
    }}/>

    <StyledButton 
        type='secondary' 
        content='Existing Inventory' 
        onPress={() => {
            console.warn("Existing Inventory was pressed");
    }}/>

     </View>
    )
}

export default CarItem;