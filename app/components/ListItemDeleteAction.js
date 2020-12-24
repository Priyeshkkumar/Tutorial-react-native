import React from "react";
import { View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback style={styles.constainer} onPress={onPress}>
      <View>
        <MaterialCommunityIcons name="trash-can" size={30} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: "#ff5252",
    width: 80,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
