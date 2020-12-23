import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row", // horizontal
        justifyContent: "center", //align w.r.t to main axis
        alignItems: "center", // align items w.r.t to secondary axis for each line
        alignContent: "center", // align all items to center(works only when wrapping is done)
        flexWrap: "wrap",
      }}
    >
      <View
        style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
      />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "grey", width: 100, height: 100 }} />
      <View
        style={{ backgroundColor: "greenyellow", width: 100, height: 100 }}
      />
    </View>
  );
}
