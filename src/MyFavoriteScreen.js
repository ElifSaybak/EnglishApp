import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function MyFavoriteScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Learn English With Series</Text>
      </View>
      <Text>My Favorite</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  header: {
    height: 60,
    //marginTop:10,
    backgroundColor: "#8c4297",
    
  },

  headerText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "1%",
  },
});
