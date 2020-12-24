import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 20,
          // Android and ios support different fonts, Therefore we need to
          // to use platform API to check fonts according to OS
          fontStyle: "italic",
          fontWeight: "bold",
          textTransform: "capitalize",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        React Native
        iasdbiabdibaosdblaibadisbdabsdibasidbaidbiabsdiasbdiasbdiabsdib
      </Text>
    </View>
  );
}
