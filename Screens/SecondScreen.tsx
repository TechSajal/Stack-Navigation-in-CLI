import React from "react";
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native'
import ButtonCommon from "../Components/ButtonComponents"
const SecondScreen = () => {
  
    return(
        <View style={{width:"100%"}}>
            <Image 
            source={{uri:'https://img.freepik.com/free-vector/hand-drawn-media-naranja-illustration_23-2150074406.jpg?w=1060&t=st=1683539370~exp=1683539970~hmac=4ab73a8723b839d851987f6e83803b8cdc8908e553642669a49dece3f56fa234'}}
            style={styles.image}
            />
             <Text style={styles.textstyle}>This is Second Screen</Text>
            <ButtonCommon title="Second Screen" ScreenToGo = "First"/>
        </View>
    )
}
const dimensions = Dimensions.get('window');
const styles = StyleSheet.create({
     
    image:{
        height:250,
        margin:10,
        borderRadius:10
    },
    textstyle:{
      fontSize:20,
      fontStyle:"normal",
      fontWeight:"bold",
      color:"black",
      marginLeft:15  
    }
})

export default SecondScreen;