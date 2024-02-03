import React from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";

export default function Loginscreen({ navigation }) {
  const goToLogin = () => {
    navigation.navigate("TabScreen");
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "#352981",
          width: "100%",
          height: "100%",
        }}
      >
        <View style={{ padding: 40 }}>
          <Image
            style={{ width: 290, height: 90, marginTop: 70, marginBottom: 70 }}
            source={{
              uri: "https://mazatun.com/wp-content/uploads/2021/04/atun-mazatun-logo.png",
            }}
          ></Image>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: "77%",
            borderTopRightRadius: 60,
            borderTopLeftRadius: 60,
            padding: 30,
          }}
        >
          <Text style={{ fontSize: 30 }}>Login</Text>
          <TextInput
            placeholder="Email"
            style={{
              padding: 15,
              borderColor: "#352981",
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 70,
            }}
          />

          <TextInput
            placeholder="Password"
            style={{
              padding: 15,
              borderColor: "#352981",
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 30,
            }}
          />

          <Text style={{ paddingTop: 10, alignSelf: "flex-end" }}>
            Forgot your password?
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#FFD100",
              padding: 20,
              borderRadius: 60,
              marginTop: 50,
            }}
            onPress={goToLogin}
          >
            <Text style={{ textAlign: "center", fontSize: 20 }}>Login</Text>
          </TouchableOpacity>

          <Text style={{ textAlign: "center", fontSize: 15, marginTop: 10 }}>
            Are you a user? Sign in
          </Text>
        </View>
      </View>
    </>
  );
}
