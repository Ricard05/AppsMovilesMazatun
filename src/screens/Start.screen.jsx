import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

export default function StartScreen({ navigation }) {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <View style={{ backgroundColor: "#fff", height: "100%" }}>
        <Image
          resizeMode="cover"
          source={require("../../assets/banner.jpg")}
          style={{
            width: "100%",
            height: "68%",
            borderBottomLeftRadius: 60,
            borderBottomRightRadius: 60,
          }}
        />

        <Text
          style={{
            textAlign: "center",
            width: 200,
            fontSize: 23,
            fontWeight: "600",
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          Learn how to cook with Mazatún
        </Text>

        <Text style={{ padding: 15, textAlign: "center", color: "#555" }}>
          An app where you will find a huge of recipies with Mazatún products.
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#352981",
            borderRadius: 50,
            width: "90%",
            padding: 17,
            marginTop: 10,
            marginLeft: 5,
            alignSelf: "center",
          }}
          onPress={goToLogin}
        >
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 20 }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
