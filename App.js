import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          // For android
          elevation: 20,
          // for ios (will not work on android)
          shadowColor: "grey",
          shadowOffset: { width: 10, height: 10 },
          shadowRadius: 10,
          shadowOpacity: 1,
        }}
      ></View>
    </View>
  );
}
