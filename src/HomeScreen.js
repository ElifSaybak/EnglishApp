import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Image, Icon } from "react-native-elements";
import { auth } from "../src/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function HomeScreen({ navigation }) {
  const [name, setName] = useState();

  useEffect(() => {
    try {
      onAuthStateChanged(auth, (user) => {
        setName(user?.displayName ?? "");
      });
      console.log(user);
    } catch (e) {
      console.warn(e);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Learn English With Series</Text>
      </View>
      <View>
        <View style={styles.body1}>
          <View style={styles.bodyUser}>
            <Text style={styles.bodyText1}>Merhaba,</Text>
            <Text style={styles.bodyText2}>{name}</Text>
          </View>
          <View style={styles.bodyImage}>
            <Image
              resizeMode="contain"
              style={{ width: 200, height: 170 }}
              source={require("./images/home.png")}
            />
          </View>
        </View>
        <View style={styles.body2}>
          <TouchableOpacity
            style={styles.touchableOpacity1}
            onPress={() => navigation.navigate("EnglishPage1")}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  margin: 10,
                  alignItems: "center",
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 100, height: 100 }}
                  source={require("./images/word.png")}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  margin: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
                >
                  İngilizce yeni kelimeler öğrenmek için tıklayınız
                </Text>
                <Icon
                  type="material-community"
                  name="arrow-right"
                  color="white"
                  size={30}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchableOpacity2}
            onPress={() => navigation.navigate("EnglishPage2")}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1,
                  margin: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
                >
                  İngilizce diyalogları görmek için tıklayınız
                </Text>
                <Icon
                  type="material-community"
                  name="arrow-right"
                  color="white"
                  size={30}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  margin: 10,
                  alignItems: "center",
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 100, height: 100 }}
                  source={require("./images/dialog.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchableOpacity3}
            onPress={() => navigation.navigate("EnglishPage3")}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  margin: 10,
                  alignItems: "center",
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 100, height: 100 }}
                  source={require("./images/video.png")}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  margin: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
                >
                  İngilizce videolar izlemek için tıklayınız
                </Text>
                <Icon
                  type="material-community"
                  name="arrow-right"
                  color="white"
                  size={30}
                />
              </View>
            </View>
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

  body1: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: "7%",
    paddingVertical: "2%",
  },

  bodyUser: {
    flex: 1,
    justifyContent: "center",
  },

  bodyImage: {
    flex: 1,
    height: 160,
    alignItems: "flex-end",
  },

  bodyText1: {
    fontSize: 25,
  },

  bodyText2: {
    fontSize: 25,
    color: "#8c4297",
    fontWeight: "bold",
  },

  body2: {
    alignItems: "center",
    justifyContent: "center",
  },

  touchableOpacity1: {
    backgroundColor: "#01a1f4",
    height: 110,
    width: 370,
    marginTop: 10,
    marginBottom: 15,
  },

  touchableOpacity2: {
    backgroundColor: "#ff8912",
    height: 110,
    width: 370,
    marginBottom: 15,
  },

  touchableOpacity3: {
    backgroundColor: "#ff5050",
    height: 110,
    width: 370,
    marginBottom: 15,
  },

  touchableOpacityText: {
    color: "white",
  },
});
