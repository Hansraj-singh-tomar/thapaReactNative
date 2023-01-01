import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StatusBarExample from './src/screens/StatusBar';
// import { StatusBar } from 'expo-status-bar';

// Installation For React Native Navigation 
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import CustomComponent from './src/screens/CustomComponent';
// import FlatListDemo from './src/screens/FlatListDemo';
// import FlatListDemo2 from './src/screens/FlatListDemo2';
// import FlatListDemo3 from './src/screens/FlatListDemo3';
// import ChallengeFlatList from './src/screens/ChallengeFlatList';
// import ImageFile from './src/screens/Images';
// import OurButton from './src/screens/OurButton';
// import NetflixCard from './src/Components/NetflixCard';
// import CounterNumber from './src/screens/CounterNumber';
// import ColorGenerator from './src/Projects/ColorGenerator';
// import SectionListExample from './src/screens/SectionListExample';
// import ModalExp from './src/screens/ModalExp';
// import GridViewInFlatList from './src/screens/GridViewInFlatList';
// import AlertDialog from './src/screens/Alert';
// import HookEffect from './src/screens/HookEffect';
// import ContactYoutube from './src/screens/ContactYoutube';
// import HomeYoutube from './src/screens/HomeYoutube';

export default function App() {

  // const Stack = createNativeStackNavigator();
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator  initialRouteName="Login">
  //       <Stack.Screen name="Login" component={ContactYoutube} />
  //       <Stack.Screen name="Home" component={HomeYoutube} />
  //     </Stack.Navigator>
  //   </NavigationContainer>    
  // )

  return (
    <View style={styles.container}>
      {/* <Text style={styles.textStyle}> Hello! Hansraj Singh Tomar </Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* <CustomComponent/> */}
      {/* <FlatListDemo/> */}
      {/* <FlatListDemo2/> */}
      {/* <ChallengeFlatList/> */}
      {/* <ImageFile/> */}
      {/* <OurButton/> */}
      {/* <NetflixCard/> */}
      {/* <CounterNumber /> */}
      {/* <ColorGenerator/> */}
      {/* <HookEffect/> */}
      {/* <ContactYoutube/> */}
      {/* <FlatListDemo3/> */}
      {/* <SectionListExample/> */}
      {/* <ModalExp/> */}
      {/* <GridViewInFlatList/> */}
      {/* <AlertDialog/> */}
      <StatusBarExample/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: "red",
  }
});

// <ScrollView> = <div>
// <view></view> = div (A non scrolling div)
// <text></text> = <p></p>
// <Image> = <img>
// <TextInput> = <input type="text">