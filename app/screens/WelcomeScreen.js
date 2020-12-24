import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      <AppButton title="Login" textcolor="white" />
      <AppButton title="Register" textcolor="black" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "row",
  },
  logo: {
    width: 200,
    height: 120,
    position: "absolute",
    top: 60,
  },
});

export default WelcomeScreen;
