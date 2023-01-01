import React from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'

// Alert - Alert Dialog Example
export default function AlertDialog(){
    function showAlertDialog1(){
        Alert.alert(
            'Alert Title',
            'Alert Message'
        );
    }
    function showAlertDialog2(){
        Alert.alert(
            'Alert Title',
            'Alert Message',
            [
                {
                    text: 'No',
                    onPress: () => console.log("click on camcel"),
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => console.log("click on OK")
                }
            ]
        );
    }
    function showAlertDialog3(){
        Alert.alert(
            'Alert Title',
            'Alert Message',
            [
                {
                    text: 'No',
                    onPress: () => console.log("click on camcel"),
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => console.log("click on OK")
                },
                {
                    text: 'Later',
                    onPress: () => console.log("click on Later")
                }
            ],
            {cancelable: true}  
        );
    }

        return(
            <View style={customeStyle.container}>
                   <Text style = {customeStyle.pageTitle}>Alert Dialog Example 2021</Text> 
                    <View style={customeStyle.image}>
                        {/* <Image style={{width:100, height:100 }} source={require('./assets/image_logo.png')} />  */}
                    </View>

                    <TouchableOpacity  style={customeStyle.button}>
                        <Button  title='Alert 1' onPress={() => showAlertDialog1()} />
                    </TouchableOpacity>

                    <TouchableOpacity  style={customeStyle.button}>
                        <Button  title='Alert 2' onPress={() => showAlertDialog2()} />
                    </TouchableOpacity>

                    <TouchableOpacity  style={customeStyle.button}>
                        <Button  title='Alert 3' onPress={()=> showAlertDialog3()}/>
                    </TouchableOpacity>
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
        },
        button: {
            borderRadius: 6,
            backgroundColor: '#1E6738',
            shadowColor: '#2AC062',
            shadowRadius: 25,
            marginTop:50,
            borderRadius:20
        },image: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },
});