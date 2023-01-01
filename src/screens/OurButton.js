import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function OurButton() {
  return (
    <View>
      <Text style={styles.textStyle}>Buttons</Text>
      <Button 
        title='Join Now'
        onPress={() => {
            // console.log("button pressed");
            Alert.alert("Simple Button Pressed");
        }}
        // disabled // ab ham button ko click nhi kar sakte 
      />

      {/* 
        Touchable Opacity is similar to button but is used for complex work  
        isme title props nhi hota hai to ham diract <Text> element ka use karenge
        <Image> bhi add kar sakte hai 
      */}
      <TouchableOpacity 
        // disabled 
        onPress={() => {
            // console.log("button pressed");
            Alert.alert("Simple Button Pressed");
        }}
      >  
        <Text>Join Now</Text>
        <Image source={require("../../assets/text1.jpg")} style={styles.imageStyle}/>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign:"center",
        marginVertical: 200,
        fontSize: 30
    },
    imageStyle: {
      width: 300,
      height: 300
    }
})