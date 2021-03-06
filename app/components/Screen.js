import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function Screen(props) {
  return (
    <SafeAreaView style={[styles.screen, props.style]}>
      <View style={[props.style, styles.view]}>{props.children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // We can alos use a library expo-constants:
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
