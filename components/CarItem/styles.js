import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%"
      },
      image: {
        width: "100%",
        height:"100%",
        resizeMode: "cover",
        position: 'absolute'
      },  
      titles: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center"
      },
      title: {
        fontSize: 40,
        fontWeight: "600"
      }, 
      subtitle: {
        fontSize: 15,
        color: "#5c5e62"
      }
})

export default styles;