import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


export default function ImageFile() {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}>Images</Text>
      <Image 
        style={styles.imageStyle} 
        source={require("../../assets/text1.jpg")}   
      />
      <Image 
        style={styles.imageStyle} 
        source={require("../../assets/text1.jpg")}   
      />
      <Image 
        style={styles.imageStyle} 
        source={require("../../assets/text1.jpg")}   
      />
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        margin: 30
    },
    listStyle: {
        // height: 500,
        display: "flex",
        justifyContent: "center",
        alignItem: "center"
    },
    imageStyle: {
        width: 300,
        height: 300
    }
})