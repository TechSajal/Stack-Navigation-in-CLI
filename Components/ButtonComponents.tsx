import React from "react";
import { Text,View,StyleSheet, Button} from "react-native";
import {useNavigation} from "@react-navigation/native"
type button={
    title:string,
    ScreenToGo:String
}

const button = (props:button) =>{
    const navigation = useNavigation()
 return (
    <View style={styles.button} >
        <Button  title={props.title} onPress={()=>{navigation.navigate(props.ScreenToGo)}} />
    </View>
 )
}
const styles = StyleSheet.create({
    button:{
        margin:15,
        // marginHorizontal:20
    }
})
export default button;