import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import EnglishPage1 from "../pages/EnglishPage1";
import EnglishPage2 from "../pages/EnglishPage2";
import EnglishPage3 from "../pages/EnglishPage3";
import { TabNavigation } from './tabNavigation';
import Verbs from '../pages/pages1/verbs';
import Nouns from '../pages/pages1/nouns';
import Adverbs from '../pages/pages1/adverbs';
import Adjectives from '../pages/pages1/adjectives';
import Prepositions from '../pages/pages1/prepositions';
import Conjunctions from '../pages/pages1/conjunctions';


const App = createStackNavigator();

export function AppStack({navigation}){
    return(
        <App.Navigator>
            <App.Screen
                name="App"
                component={TabNavigation}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <App.Screen
                name="EnglishPage1"
                component={EnglishPage1}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             <App.Screen
                name="EnglishPage2"
                component={EnglishPage2}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             <App.Screen
                name="EnglishPage3"
                component={EnglishPage3}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             <App.Screen
                name="Verbs"
                component={Verbs}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             <App.Screen
                name="Nouns"
                component={Nouns}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             <App.Screen
                name="Adverbs"
                component={Adverbs}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             <App.Screen
                name="Prepositions"
                component={Prepositions}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             <App.Screen
                name="Adjectives"
                component={Adjectives}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             <App.Screen
                name="Conjunctions"
                component={Conjunctions}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </App.Navigator>
    )
}