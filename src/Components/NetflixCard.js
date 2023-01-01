import { View, Text, Image, Button, StyleSheet, Linking } from 'react-native'
import React from 'react'
import { 
        JosefinSans_100Thin,
        JosefinSans_200ExtraLight,
        JosefinSans_300Light,
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_700Bold,
        JosefinSans_100Thin_Italic,
        JosefinSans_200ExtraLight_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_700Bold_Italic,
} from '@expo-google-fonts/josefin-sans';

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function NetflixCard() {

    let [fontsLoad, error] = useFonts({
        JosefinSans_100Thin,
        JosefinSans_200ExtraLight,
        JosefinSans_300Light,
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_700Bold,
        JosefinSans_100Thin_Italic,
        JosefinSans_200ExtraLight_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_700Bold_Italic,    
    });

    if (!fontsLoad) {
        return <AppLoading />;
    }

    return (
    <View style={styles.container}>
        <Text style={styles.header}>Netflix Card</Text>
        <View style={styles.poster}>
            <Image 
                style={styles.imgStyle}
                source={{
                    uri:"https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTTC_-BK-bDSXRVa_2Kp6i_MozjBYs8vWcf6Nalwv2J1OuS2AnsbHu1-lNnsBwbbzibrLBaM8mFsQVEHvDcJha-dUj2JT4vktF9Bfluoo0N40Punfev73rPuzFw5Q79hQe7K.jpg?r=9c6"
                }}
            />
            <View style={styles.poster_info}>
                <Text style={styles.poster_title}>All Of Us Dead</Text>
                <Text style={styles.poster_text}>
                    Find out why the all of us dead, when an island populated by happy,
                    flightless birds is visited by mysterious green piggies, it's up to
                    three unlikely outcasts - Red, Chuck and Bomb
                </Text>
            </View>
            <Button 
                style={styles.buttonStyle}
                title='Watch Now' 
                onPress={() => Linking.openURL("https://www.netflix.com/browse")}          
            />
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 30,
        marginBottom: 20,
        fontFamily: "JosefinSans_700Medium",
        // color:'red',
        color: "rgb(255,0,0)",
        // fontStyle: "italic",
        fontVariant: ["small-caps"], // array isliye use kiya thaki ham value add kar sake // first latter capital latter me dikhta hai isse

    },
    poster: {
        width: 300,
        borderWidth: 1,
        alignItems: "center",
    },
    poster_info: {
        alignItems: "center",
        marginVertical: 10,
    },
    poster_title: {
        fontSize: 20,
        marginBottom: 20,
        fontFamily: "JosefinSans_400Regular",
        letterSpacing: 1,
        // text-shadow: -1px 1px 10px rgba(0,0,0,0.75)
        textShadowColor:  "rgba(0,0,0,0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textTransform: "uppercase"
    },
    poster_text: {
        color: "#999",
        paddingHorizontal: 20,
        marginBottom: 10,
        fontFamily: "JosefinSans_300Light",
        fontSize: 16,
        letterSpacing: 0.4,
        lineHeight: 22,
        textAlign: 'justify'  // center,right,left // justify me space brabar aa jayegi left/right se 
    },
    imgStyle: {
        width: "100%",
        height: undefined,
        aspectRatio: 1
    },
    buttonStyle: {
        borderWidth: 0,
        borderRadius: 20,
    },
});



// Elements par Multiple css style add karna hai to ham <Text style={[styles.childText,styles.commonStyle]}></Text> ka use karenge 

// Box modal ki react native me two new property add hui hai verical and horizontal like - padding: vertical(top and bottom se padding do)

// React Native Flex 
// react native me flex direction ka default value row ki jagah column hoga
// flexDirection: "column" hone par justifyContent: "center" isse vertically center me aa jayega box
// flexDirection: "column" hone par alignItems: "center" karne par ye horizantally center me aa jayega
// flexDirection: "column" and justifyContent: "center" and alignItems: "center" karne par box web ke center me aa jayega


// rnstyle = pura syntax dedega style ka 
// imrn = import { View } from 'react-native'
// rnfe = react native function export 
// rnfes = react native function export style