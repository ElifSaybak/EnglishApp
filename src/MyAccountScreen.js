import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Icon, Button } from "react-native-elements";
import { Drawer } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { SignInContext } from "../src/context/authContext";
import { auth } from "../src/firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import SignInWelcome from "./auth/SignInWelcome";

export default function MyAccountScreen() {
  const { dispatchSignedIn } = useContext(SignInContext);

  const [name, setName] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    try {
      onAuthStateChanged(auth, (user) => {
        setName(user?.displayName ?? "");
      });
    } catch (e) {
      console.warn(e);
    }
  }, []);

  const logout = async () => {
    signOut(auth)
      .then(() => {
        console.log("USER SUCCESSFULLY SIGNED OUT");
        dispatchSignedIn({
          type: "UPDATE_SIGN_IN",
          payload: { userToken: null },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Learn English With Series</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 20,
          paddingVertical: 10,
          marginHorizontal: 15,
          marginVertical: 15,
        }}
      >
        <Avatar
          rounded
          // avatarStyle={}
          size={140}
          source={require("./images/avatar1.png")}
        />

        <View style={{ marginLeft: 15 }}>
          <Text style={styles.text1}>{name}</Text>
        </View>
      </View>

      <View
        style={{
          paddingLeft: 20,
          paddingVertical: 10,
          marginHorizontal: 15,
          marginVertical: 15,
        }}
      >
        <Drawer.Item
          style={{ borderBottomWidth: 1, borderColor: "grey" }}
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="key-variant"
              color="#8c4297"
              size={30}
            />
          )}
          label="Şifremi Güncelle"
          onPress={() => {}}
        />

        <Drawer.Item
          style={{ borderBottomWidth: 1, borderColor: "grey" }}
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="share-variant"
              color="#8c4297"
              size={30}
            />
          )}
          label="Uygulamayı Paylaş"
          onPress={() => {}}
        />

        <Drawer.Item
          style={{ borderBottomWidth: 1, borderColor: "grey" }}
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="translate"
              color="#8c4297"
              size={30}
            />
          )}
          label="Dil Değiştir"
          onPress={() => {}}
        />
        <Drawer.Item
          style={{ borderBottomWidth: 1, borderColor: "grey" }}
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="logout"
              color="#8c4297"
              size={30}
            />
          )}
          label="Çıkış Yap"
          onPress={() => logout()}
        />
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

  text1: {
    fontSize: 25,
    color: "#8c4297",
    fontWeight: "bold",
  },
});
