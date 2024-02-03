import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screens from "../screens/Screens";

export default function Router({ bottomNavigator }) {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={screens.StartScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={screens.Loginscreen}
          options={{ headerShown: false }}
        />

        {/* Envuelve el Tab.Navigator en un Stack.Screen */}
        <Stack.Screen
          name="TabScreen"
          component={bottomNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
