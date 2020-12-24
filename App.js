import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

// Since there is index.js in AppText folder therefore we do not need
// to specify AppText file
// import AppText from "./app/components/AppText";

import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View style={{ backgroundColor: "#03071e", padding: 20, paddingTop: 100 }}>
      <Card title="Wallpaper 1" image={require("./app/assets/1.jpeg")} />
    </View>
  );
}
