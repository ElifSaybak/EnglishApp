import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { createUserEmailPass } from "../firebase/firebase";
import { updateProfile } from "firebase/auth";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const createAccount = async () => {
    console.log(email, password);
    try {
      createUserEmailPass(email, password).then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            console.log(name);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode);
            // ..
          });
      });
      console.log("USER ACCOUNT CREATED");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Alert.alert("That email address is already inuse");
      }
      if (error.code === "auth/invalid-email") {
        Alert.alert("That email address is invalid");
      } else {
        Alert.alert(error.code);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Sign Up</Text>

      <TextInput
        placeholder="Name"
        style={styles.textInput1}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Email"
        style={styles.textInput1}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput2}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
        }}
      >

        <View style={styles.button2}>
          <Button
            title="Sign Up"
            color="#fd6505"
            onPress={() => {createAccount(), navigation.goBack()}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "40%",
    marginHorizontal: 30,
  },
  text1: {
    color: "#fd6505",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  textInput1: {
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#fd6505",
    color: "grey",
    fontWeight: "bold",
    height: 45,
    paddingLeft: 10,
  },

  textInput2: {
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#fd6505",
    color: "grey",
    fontWeight: "bold",
    height: 45,
    paddingLeft: 10,
  },

  button2: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#fd6505",
    width: "50%",
    height: 37,
  },
});
