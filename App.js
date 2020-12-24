import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppText from "./app/components/AppText";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MaterialCommunityIcons size={200} color="dodgerblue" name="email" />
    </View>
  );
}
