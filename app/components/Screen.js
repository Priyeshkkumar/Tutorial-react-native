import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

function Screen(props) {
  return (
    <SafeAreaView style={[styles.screen, props.style]}>
      <View style={props.style}>{props.children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // We can alos use a library expo-constants:
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "dodgerblue",
    flex: 1,
  },
});

export default Screen;
