import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image
} from "react-native";
import React, { useEffect, useState } from "react";
import {
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold
} from "@expo-google-fonts/josefin-sans"

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const HookEffect = () => {
  const [myData, setMyData] = useState();
  const [isLoaded, setIsLoaded] = useState(true);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const actualResponse = await response.json();
      setMyData(actualResponse);
      setIsLoaded(false);
      // console.log(actualResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  let [fontsLoad, error] = useFonts({
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold
  });

  return (
    <View style={styles.mainContainer}>
      {isLoaded ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      ) : (
        <View>
          <Text style={styles.mainHeader}> List Of Students </Text>
          <FlatList
            data={myData}
            keyExtractor = { (item)=> item.id }
            renderItem={({ item }) => {
                // console.log('my Item data' + item);
              return (
                <View style={styles.card}>
                  <View style={styles.imgContainer}>
                    <Image
                      style={styles.imgStyle}
                      resizeMode="cover"
                      source={{ uri: item.image }}
                    />
                  </View>
                  <View>
                    <View style={styles.bioDataContainer}>
                      <Text style={styles.bioData}>Bio-Data</Text>
                      <Text style={styles.idNumber}>
                        {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
                      </Text>
                    </View>
                    <View style={styles.imgContainer}>
                      <Text style={styles.myName}>Name: {item.name}</Text>
                      <Text style={styles.myName}>Email: {item.email}</Text>
                      <Text style={styles.myName}>Mobile: {item.mobile}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    width: "100%",
    paddingTop: 50,
    backgroundColor: "#b696d7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
    fontFamily: "josefinSans_400Regular",
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255,255,255,0.5)",
    fontFamily: "JosefinSans_400Regular",
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
  },
  mainHeader: {
    fontSize: 30,
    color: '#fff',
    fontFamily: "JosefinSans_400Regular",
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  }
});

export default HookEffect;
