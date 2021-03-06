import React from 'react'
import {Button, View, Text, Pressable} from 'react-native'
import styles from './styles.js';

const StyledButton = (props) => {

    
    const {type, content, onPress} = props;
    const backgroundColor = type==='primary'?'#171A20CC':'#FFFFFFA6';
    const textColor = type==='primary'?'#FFF':'#171A20';

    
    

    return(
        <View style={styles.container}>
            <Pressable
                style={[styles.button,{backgroundColor: backgroundColor}]}
                onPress={onPress}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
            
        </View>
    )
}

export default StyledButton;