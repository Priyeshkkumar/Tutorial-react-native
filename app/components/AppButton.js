import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton(props) {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
    >
      <Text style={[styles.text, { color: props.textcolor }]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "40%",
    height: 70,
    alignSelf: "flex-end",
    margin: 20,
  },
  text: { fontSize: 18, fontWeight: "bold" },
});

export default AppButton;
