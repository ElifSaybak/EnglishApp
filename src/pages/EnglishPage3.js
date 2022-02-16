import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function EnglishPage3({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Engslih page 3 </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
