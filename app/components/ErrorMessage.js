import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText/AppText";

function ErrorMessage(props) {
  if (!props.children) return null;
  return <AppText style={styles.error}>{props.children}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 15,
    marginLeft: 20,
  },
});

export default ErrorMessage;
