import React from "react";
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native'
import ButtonCommon from "../Components/ButtonComponents"
const FirstScreen = () => {
  
    return(
        <View style={{width:"100%"}}>
            <Image 
            source={{uri:'https://img.freepik.com/premium-vector/hand-drawn-people-working-together-illustration_52683-76157.jpg?w=1060'}}
            style={styles.image}
            />
             <Text style={styles.textstyle}>This is First Screen</Text>
            <ButtonCommon title="First Screen" ScreenToGo = "Second"/>
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

export default FirstScreen;