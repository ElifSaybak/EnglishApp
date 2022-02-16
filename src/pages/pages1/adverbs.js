import React, { useState, useEffect, useRoute } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Icon } from "react-native-elements";
import {
  Divider,
  List,
  FAB,
  Portal,
  Dialog,
  Button,
  TextInput,
  Provider,
} from "react-native-paper";
import { firestore, auth, database } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref, onValue } from "firebase/database";

import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default function Verbs() {
  //const route = useRoute();
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");

  const [turk, setTurk] = useState([]);
  const [eng, setEng] = useState([]);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const [fireData, setFireData] = useState([]);

  /*
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setEmail(user?.email);
      setUid(user?.uid);
      setName(user?.displayName);
    });
  }, []);
*/
  const addWord = async () => {
    if (!eng || !turk) return;
    try {
      const response = addDoc(collection(firestore, "adverbs"), {
        english: eng,
        turkish: turk,
      });
      console.log("Document written with ID: ", response.id);
      setIsDialogVisible(false);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const readFirebase = async () => {
    try {
      const get = await getDocs(collection(firestore, "adverbs"));
      setFireData([]);
      get.forEach((doc) => {
        console.log(
          `${doc.id} => ${doc.data().english} : ${doc.data().turkish}`
        );

        setFireData((arr) => [
          ...arr,
          {
            english: `${doc.data().english}`,
            turkish: `${doc.data().turkish}`,
          },
        ]);
      });
    } catch (e) {
      console.error("Error readFirebase: ", e);
    }
  };

  return (
    <View style={styles.container}>
      
        <View style={styles.header}>
          <Text style={styles.headerText}>Learn English With Series</Text>
        </View>
      
      <View>
        <Text style={styles.text}>Adverbs</Text>
        <View style={styles.item}>
          <View
            style={{
              ...styles.itemView,
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#01a1f4",
            }}
          >
            <Text style={{ fontSize: 22, color: "black" }}>ENGLISH</Text>
          </View>
          <View
            style={{
              ...styles.itemView,
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#01a1f4",
            }}
          >
            <Text style={{ fontSize: 22, color: "black" }}>TURKISH</Text>
          </View>
        </View>
      </View>

      <SafeAreaView style={{ marginTop:5}}>
        <ScrollView style={{ flexGrow:1, height:388 }}>
          <FlatList
            data={fireData}
            keyExtractor={(index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <View style={styles.itemView}>
                  <Text style={styles.eng}>{item.english}</Text>
                </View>
                <View style={styles.itemView}>
                  <Text style={styles.eng}>{item.turkish}</Text>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </SafeAreaView>

      <Provider>
        <Portal>
          <Dialog
            visible={isDialogVisible}
            onDismiss={() => setIsDialogVisible(false)}
          >
            <Dialog.Title style={{ color: "#01a1f4", fontWeight: "bold" }}>
              New Adverb
            </Dialog.Title>
            <Dialog.Content>
              <TextInput
                style={{ marginBottom: 10 }}
                label="english"
                value={eng}
                onChangeText={(text) => setEng(text)}
              />
              <TextInput
                label="turkish"
                value={turk}
                onChangeText={(text) => setTurk(text)}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                style={{ backgroundColor: "#01a1f4", marginRight: 5 }}
                onPress={() => setIsDialogVisible(false)}
              >
                Cancel
              </Button>
              <Button
                style={{ backgroundColor: "#01a1f4", marginRight: 15 }}
                onPress={() => {
                  addWord(), readFirebase();
                }}
              >
                Save
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
      <FAB
        icon="plus"
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          backgroundColor: "#01a1f4",
        }}
        onPress={() => setIsDialogVisible(true)}
      />

      <FAB
        icon="eye"
        style={{
          position: "absolute",
          bottom: 16,
          left: 16,
          backgroundColor: "#01a1f4",
        }}
        onPress={() => readFirebase()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    marginHorizontal: 30,
  },

  itemView: {
    backgroundColor: "#01a1f4",
    width: "45%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  eng: {
    fontSize: 20,
    color: "white",
  },

  turk: {
    fontSize: 20,
    color: "white",
  },

  text: {
    color: "#01a1f4",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: "5%",
  },
});
