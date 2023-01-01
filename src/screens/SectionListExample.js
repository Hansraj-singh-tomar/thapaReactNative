import {Text, View, SectionList, StyleSheet} from 'react-native'
import React from 'react'

const groceryItems = [ 
    {itemsName: 'Fruts', data:['Apple', 'Banana', 'Cherry','Mangoes', 'Kiwi']},
    {itemsName: 'Vegitable', data:['Potatoes', 'Broccoli', 'Carrots',  'Garlic', 'Cabbage']},
    {itemsName: 'Hygienic', data:['Dental', 'HandWash', 'shoap']},
    {itemsName: 'Others', data:['Table', 'Doormat']}
]

export default function SectionListExample() {
    return(
        <View style = {style.container}>
               <Text style = {style.pageTitle}>SectionList Example 2021</Text> 
               <SectionList 
                    sections={groceryItems}
                    renderItem={({item}) => 
                        <Text style={style.sectionItems}>{item}</Text>
                    }
                    renderSectionHeader={({section}) =>
                        <Text style={style.sectionHeaderItem}>{section.itemsName}</Text>
                    }
                    keyExtractor={(item, index) => index} 
               />
        </View>
    );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "#DCDCDC",
    borderRadius: 15,
    elevation: 5,
    shadowOpacity: 5,
    shadowRadius: 5,
  },
  pageTitle: { 
    fontSize: 25, 
    fontWeight: "bold", 
    color: "green", 
    padding: 10 
  },
  sectionHeaderItem: {
    justifyContent: "flex-start",
    fontSize: 25,
    fontWeight: "bold",
    color: "green",
    padding: 5,
    marginTop: 5,
  },
  sectionItems: { 
    fontSize: 20, 
    color: "black", 
    marginStart: 10, 
    padding: 5 
  },
});