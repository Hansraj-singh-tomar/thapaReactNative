import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import React, { useState } from 'react'
import CheckBox from "expo-checkbox"
// expo install expo-checkbox // to use CheckBox

import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans"

import AppLoading from 'expo-app-loading'

const ContactYoutube = ({ navigation }) => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [agree, setAgree] = useState(false);

    const submit = () => {
      // return Alert.alert(userName, password);
      if(userName === "vinod" && password === "thapa"){
        Alert.alert(`Thank you ${userName}`);
        navigation.navigate("Home", { myName: `${userName}`, password: `${password}` });
      } else {
        Alert.alert('Username and password is not correct');
      }
    }

    let [fontLoaded, error] = useFonts({ 
      bold: Montserrat_400Regular,
      Montserrat_500Medium,
      Montserrat_700Bold,
      regular: JosefinSans_400Regular,
      JosefinSans_500Medium,
    });

    if(!fontLoaded) {
      return <AppLoading />;
    }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.description}>You can reach anytime via any@thapa.com</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput 
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            value={userName} 
            onChangeText={(actualData) => setUserName(actualData)}    // <input type="text" value={inputValue} onChange={handleChange} ya onChange= {(e) => setUserName(e)}/>
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Password</Text>
        <TextInput 
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true} 
            value={password} 
            onChangeText={(actualData) => setPassword(actualData)}  
        />
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree} onValueChange={()=> setAgree(true)} color= { agree ? "#4630EB" : undefined }/>
        <Text style={styles.wrapperText}>I have read and agreed with the TC</Text>
      </View>
      {/* <View style={styles.button}> */}
      <TouchableOpacity 
        style={[
            styles.buttonStyle, 
            { backgroundColor : agree ? "#4630EB" : "grey" },
        ]}
        disabled={!agree}
        onPress = {() => submit()}
      >
        <Text style={styles.buttonText}>Login</Text>
        
      </TouchableOpacity>
      {/* </View> */}
    </View>
  )
}
export default ContactYoutube

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 10,
    paddingTop: 20,
    // marginBottom: 500,
    backgroundColor: '#fff'
  },
  mainHeader: {
    fontSize: 25,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
    fontFamily: "bold"
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: 'regular',
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: 'regular',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: 'regular',
    fontSize: 18
  }, 
  wrapper: {
    // paddingHorizontal: 10,
    // paddingVertical: 15,
    // paddingBottom: 30
    flexDirection:"row",
    // justifyContent:'center',
    alignItems:"center",
    marginTop: 15,
    marginBottom: 60
    // alignContent:"center"
  },
  wrapperText: {
    // paddingLeft: 30
    marginTop: 0,
    marginLeft: 2,
  },
  // button:{
  //   marginTop: -10,
  // },
  buttonStyle: {
    borderRadius: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: '600'
  },
});



// React Native Navigation

// 1. npm install @react-navigation/native
// 2. npx expo install react-native-screens react-native-safe-area-context - pillar
// 3. npm install @react-navigation/native-stack - Wall