import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button,Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SignInContext } from "../context/authContext";
import { signinUserEmailPass } from "../firebase/firebase";
import { TabNavigation } from "../navigation/tabNavigation";

export default function SignIn() {
  const { dispatchSignedIn } = useContext(SignInContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const signIn = async () => {
    try {
      const user = signinUserEmailPass(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
          if (user) {
            dispatchSignedIn({
              type: "UPDATE_SIGN_IN",
              payload: { userToken: "signed-in" },
            });
          }
        })
        .catch((error) => {
          Alert.alert(
            error.name,
            error.message,
          // ..
        )});

    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Sign In</Text>

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
          <Button title="Sign In" color="#57c100" onPress={() => {signIn(), TabNavigation}} />
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
    color: "#57c100",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  textInput1: {
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#57c100",
    color: "grey",
    fontWeight: "bold",
    height: 45,
    paddingLeft: 10,
  },

  textInput2: {
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#57c100",
    color: "grey",
    fontWeight: "bold",
    height: 45,
    paddingLeft: 10,
  },

  button2: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#57c100",
    width: "50%",
    height: 37,
  },
});
