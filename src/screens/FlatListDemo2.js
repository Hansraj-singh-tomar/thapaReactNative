import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatListDemo2() {
    const names = [
        { index : '1', name : "hansraj" },
        { index : '2', name : "singh" },
        { index : '3', name : "tomar" },
        { index : '4', name : "hansraj" },
        { index : '5', name : "hansraj" },
        { index : '6', name : "hansraj" },
        { index : '7', name : "hansraj" },
        { index : '8', name : "hansraj" },
        { index : '9', name : "hansraj" },
        { index : '10', name : "hansraj" },
    ]
  return (
    <FlatList
        style={styles.listStyle}
        keyExtractor={(key) => {
            return key.index;
        }}
        horizontal // ye hame horizontally scroll bar show karega
        // numColumns={2} // 2-2 ke column me dikhenge
        inverted  // left to right data
        showsHorizontalScrollIndicator={false} // scroll indicator ko hide kar dega  
        data={names}
        renderItem={({ item }) => {
            console.log(item);
            return (
                <Text style={styles.textStyle}>{item.name}</Text>
            )
        }}
        // ItemSeparatorComponent = {itemSeperator} // ye props ek view ko accept karta hai 
    />
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        padding: 30,
        backgroundColor: "blue",
        margin: 20,
        color: "white",
    },
    listStyle: {
        textAlign: "center",
        margin: 20,
        padding: 10,
    }
})

// const itemSeperator = () => {
//     return(
//         <View 
//             style = {{
//                 height: 0.5,
//                 width: '100%',
//                 backgroundColor: "#00000"
//             }} 
//         />
//     )
// }