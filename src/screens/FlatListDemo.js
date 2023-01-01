import { FlatList,Text, StyleSheet } from 'react-native'
import React from 'react'


export default function FlatListDemo() {
    const names = [
    { name : "hansraj" },
    { name : "singh" },
    { name : "tomar" },
    { name : "hansraj2" }
    ]
  return (
    <FlatList 
        data={names}
        renderItem={(element) => {
        // renderItem={({ item }) => { // object destructuring ka use karenge
            const { item } = element; // second way of object destructuring
            // console.log(element);  
            console.log(item.name);  // hansraj singh tomar hansraj2
            return (
                <Text style={styles.textStyle}>{item.name}</Text>
            )
        }}
    />
  )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    }
})

// yha map ki jagah FlatList ka use karenge 