import React from "react";
import { View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteAction(props) {
  return (
    <View style={styles.constainer}>
      <MaterialCommunityIcons name="trash-can" size={30} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: "#ff5252",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
