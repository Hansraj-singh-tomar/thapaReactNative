import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
// import { useNavigation } from '@react-navigation/native';
// import { useRoute } from '@react-navigation/native';

export default function HomeYoutube({route, navigation}) {

    // using useNavigation() and useRoute() Hook
    // const navigation = useNavigation();
    // const route = useRoute();
    // const { params } = route;
    // const myName = params.myName;

    // using props
    // const {myName} = route.params.myName;
    const {myName, password} = route.params;

  return (
    <View style= {styles.mainContainer}>
      <Text style= {styles.mainHeader}>Welcome {myName} {password}</Text>
      <Button title='Go Back' onPress={ () => navigation.goBack() }/>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    mainHeader: {
        fontSize: 35,
        color: "#4c5dab",
        marginTop: 0,
        textTransform: "capitalize"
    },
});