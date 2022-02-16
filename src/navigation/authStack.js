import { Icon } from "react-native-elements";
import { 
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import SignInWelcome from "../auth/SignInWelcome";

const Auth = createStackNavigator();
 
export function AuthStack({navigation}) {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInWelcome"
        component={SignInWelcome}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}
