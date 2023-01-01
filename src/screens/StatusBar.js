import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native'

// StatusBar Example
export default function StatusBarExample() {
        return(
            <View style={customeStyle.container}>
                    <StatusBar
                        backgroundColor = "green"
                        barStyle = 'light-content' // dark-content and default 
                        hidden = {true} // true karne par status bar invisible ho jayega
                    />
                   <Text style = {customeStyle.pageTitle}>StatusBar Example 2021</Text> 
                    <View style={customeStyle.image}>
                        <Image style={{width:100, height:100 }} source={require('./assets/image_logo.png')} /> 
                    </View>
            </View>
        ); 
}
const customeStyle = StyleSheet.create({
    container: {
        flex:1,
         backgroundColor:'#DCDCDC', 
         borderColor:"#DCDCDD", 
         borderWidth:2,
         borderRadius:20,
         margin:20, 
         padding:10,
         shadowOpacity:10,
         shadowRadius:10,
         elevation:10
     },
     pageTitle:{
         justifyContent: 'center',
         alignItems: 'center',
         textAlign:'center',
         fontSize: 25,
         fontWeight: 'bold', 
         color: 'green', 
         padding:10 
     },image: {
         justifyContent: 'center',
         alignItems: 'center',
         marginTop: 10
     },
});