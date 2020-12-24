import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      <View style={styles.loginbutton}></View>
      <View style={styles.registerbutton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "row",
  },
  loginbutton: {
    width: "50%",
    height: 70,
    backgroundColor: "#fca311",
    borderWidth: 2,
    borderColor: "#242423",
    alignSelf: "flex-end",
  },
  registerbutton: {
    width: "50%",
    height: 70,
    backgroundColor: "#fca311",
    borderWidth: 2,
    borderColor: "#242423",
    alignSelf: "flex-end",
  },
  logo: {
    width: 200,
    height: 120,
    position: "absolute",
    top: 60,
  },
});

export default WelcomeScreen;
