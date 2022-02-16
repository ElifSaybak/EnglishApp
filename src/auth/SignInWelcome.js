import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Image, Icon } from "react-native-elements";

export default function SignInWelcome({navigation}) {
 // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Learn English</Text>
      <Text style={styles.text1}>with</Text>
      <Text style={styles.text1}>Words, Dialog and Videos</Text>
      <View style={{ height: 160, alignItems: "center" }}>
        <Image
          resizeMode="contain"
          style={{ width: 200, height: 200, marginVertical: 20 }}
          source={require("../images/home.png")}
        />
      </View>

      <View style={{ alignItems: "center" }}>
        <View
          style={{
            justifyContent: "center",
            marginTop: 90,
            marginBottom: 10,
          }}
        >
          <Text style={styles.text2}>Giriş Yapınız</Text>
        </View>

        <View style={styles.button2}>
          <Button
            title="Sign In"
            color="#edd636"
            onPress={() => navigation.navigate("SignIn")}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Text style={styles.text2}>Hesabınız yoksa kayıt olunuz</Text>
        </View>
        <View style={styles.button1}>
          <Button
            title="Create an account"
            color="#88561f"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    marginHorizontal: 30,
  },
  text1: {
    color: "#8c4297",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  text2: {
    color: "#8c4297",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  button1: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#88561f",
    width: "90%",
    height: 37,
  },

  button2: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#edd636",
    width: "90%",
    height: 38,
  },
});
