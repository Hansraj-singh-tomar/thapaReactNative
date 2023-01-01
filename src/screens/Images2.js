import React from 'react'
import { View } from 'react-native'
import CardDetails from '../Components/CardDetails'

export default function ImageFile() {
    return (
        <View>
            <CardDetails 
                text = "First Image" 
                imgSrc = {require("../../assets/text1.jpg")} 
            />
            <CardDetails 
                text = "Second Image" 
                imgSrc = {require("../../assets/text1.jpg")} 
            />
            <CardDetails 
                text = "Third Image" 
                imgSrc = {require("../../assets/text1.jpg")} 
            />
        </View>
    )
}