import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function CardDetails(props) {  
// export default function CardDetails({ text, imgSrc }) {  
  return (
    <View>
        <Text style={styles.textStyle}>{props.text}</Text>
        <Image 
            style={styles.imageStyle} 
            source={props.imgSrc}   
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