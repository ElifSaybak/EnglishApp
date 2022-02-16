import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SignInContextProvider } from "./src/context/authContext";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#8c4297" />

        <RootNavigator />
      </View>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});













/*

import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/HomeScreen";
import MyFavoriteScreen from "./src/MyFavoriteScreen";
import MyAccountScreen from "./src/MyAccountScreen";
import EnglishPage1 from "./src/pages/EnglishPage1";
import EnglishPage2 from "./src/pages/EnglishPage2";
import EnglishPage3 from "./src/pages/EnglishPage3";
import SignIn from "./src/auth/SignIn";
import SignUp from "./src/auth/SignUp";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
      }}
    >
      <Tab.Screen
        name="MyFavoriteScreen"
        component={MyFavoriteScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Favorilerim",
          tabBarIcon: ({ color, size }) => (
            <Icon name="favorite" type="material" color="#ff0101" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Ana Sayfa",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color="#57c100" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Hesabım",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color="#fd6505" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          tabBarLabel: "Giriş Yap",
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          tabBarLabel: "Kayıt Ol",
        }}
      />

      <Tab.Screen
        name="EnglishPage1"
        component={EnglishPage1}
        options={{
          headerShown: false,
          tabBarLabel: "English",
        }}
      />

      <Tab.Screen
        name="EnglishPage2"
        component={EnglishPage2}
        options={{
          headerShown: false,
          tabBarLabel: "English",
        }}
      />

      <Tab.Screen
        name="EnglishPage3"
        component={EnglishPage3}
        options={{
          headerShown: false,
          tabBarLabel: "English",
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabsNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="EnglisPage1"
          component={EnglishPage1}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="EnglisPage2"
          component={EnglishPage2}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="EnglisPage3"
          component={EnglishPage3}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/