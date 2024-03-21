import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { View, Text } from "react-native";
import screens from "../screens/Screens";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#f5f5f5",
  },
};

export default function RouterMenu() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={screens.Home}
        options={{
          tabBarIcon: () => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesomeIcon name="home" size={24} />
              </View>
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Chart"
        component={screens.ChartScreen}
        options={{
          tabBarIcon: () => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesomeIcon name="phone" size={24} />
              </View>
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
