import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function EnglishPage1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Learn English With Series</Text>
      </View>
      <View style={{ marginVertical: 15, marginHorizontal: 50 }}>
        <View style={styles.view1}>
          <TouchableOpacity
            style={{
              ...styles.touchableOpacity1,
              backgroundColor: "#ff8912",
              //marginBottom: 15,
            }}
            onPress={() => navigation.navigate("Verbs")}
          >
            <Text style={styles.text}>VERBS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.touchableOpacity1, backgroundColor: "#ff5050" }}
            onPress={() => navigation.navigate("Nouns")}
          >
            <Text style={styles.text}>NOUNS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view1}>
          <TouchableOpacity
            style={{
              ...styles.touchableOpacity1,
              backgroundColor: "#01a1f4",
              //marginBottom: 15,
            }}
            onPress={() => navigation.navigate("Adverbs")}
          >
            <Text style={styles.text}>ADVERBS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.touchableOpacity1, backgroundColor: "#ff8912" }}
            onPress={() => navigation.navigate("Prepositions")}
          >
            <Text style={styles.text}>PREPOSITIONS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view1}>
          <TouchableOpacity
            style={{
              ...styles.touchableOpacity1,
              backgroundColor: "#ff5050",
              //marginBottom: 15,
            }}
            onPress={() => navigation.navigate("Adjectives")}
          >
            <Text style={styles.text}>ADJECTIVES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.touchableOpacity1, backgroundColor: "#01a1f4" }}
            onPress={() => navigation.navigate("Conjunctions")}
          >
            <Text style={styles.text}>CONJUNCTIONS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    height: 60,
    backgroundColor: "#8c4297",
  },

  headerText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "1%",
  },

  view1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical:30,
  },

  touchableOpacity1: {
    width: "45%",
    height: 100,
  },

  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "30%",
  },
});
