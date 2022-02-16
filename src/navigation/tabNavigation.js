import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen";
import MyFavoriteScreen from "../MyFavoriteScreen";
import MyAccountScreen from "../MyAccountScreen";

const Tab = createBottomTabNavigator();

export function TabNavigation({navigation}) {
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
    </Tab.Navigator>
  );
}
