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

export default function App() {
  return <WelcomeScreen></WelcomeScreen>;
}
