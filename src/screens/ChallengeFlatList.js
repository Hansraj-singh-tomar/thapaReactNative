import { Text, FlatList, View } from 'react-native'
import React from 'react'

export default function ChallengeFlatList() {
    const netflixSeries = [
    {
        name: "Archive 81",
        year: "2022",
        Creator: "Rebecca Sonnenshine",
        Gener: "Horror, thriller"
    },
    {
        name: "Archive 81",
        year: "2022",
        Creator: "Rebecca Sonnenshine",
        Gener: "Horror, thriller"
    },
    {
        name: "Archive 81",
        year: "2022",
        Creator: "Rebecca Sonnenshine",
        Gener: "Horror, thriller"
    },
    {
        name: "Archive 81",
        year: "2022",
        Creator: "Rebecca Sonnenshine",
        Gener: "Horror, thriller"
    },
    {
        name: "Archive 81",
        year: "2022",
        Creator: "Rebecca Sonnenshine",
        Gener: "Horror, thriller"
    },
    ]
  return (
    <View>
    <Text style={styles.textStyle}> List of Top 10 Series in Netflix </Text>
    <FlatList 
        style={styles.listStyle}
        keyExtractor={(key) => {
            return key.name;
        }}
        horizontal
        data={netflixSeries}
        renderItem={({ item }) => {
            console.log(item);
            return (
            <View style={styles.viewStyleOne}>
                <Text style={styles.textStyle}> Name: {item.name}</Text>
                <Text style={styles.textStyle}> Creator: {item.Creator}</Text>
                <Text style={styles.textStyle}> Gener: {item.Gener}</Text>
                <Text style={styles.textStyle}> Year: {item.year}</Text>
            </View>
            )
        }}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        color: "white",
        fontSize: 30,
        backgroundColor: "#009688",
        padding: 5,
    },
    listStyle: {
        textAlign: "center",
        margin: 20,
        padding: 5,
    },
    viewStyle: {
        margin: 20,
        padding: 5,
    },
    viewStyleOne: {
        margin: 30,
        fontSize: 50,
    }
})