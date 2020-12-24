import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

function Screen(props) {
  return <SafeAreaView style={styles.screen}>{props.children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // We can alos use a library expo-constants:
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#0b132b",
    flex: 1,
  },
});

export default Screen;
