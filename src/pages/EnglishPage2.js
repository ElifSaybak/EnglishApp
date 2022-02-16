import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function EnglishPage2({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Engslih page 2 </Text>
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
