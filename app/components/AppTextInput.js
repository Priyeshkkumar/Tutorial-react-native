import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      {/* We use `...' to just copy the props */}
      <TextInput
        placeholderTextColor={colors.medium}
        style={[defaultStyles.text, { flex: 1 }]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "95%",
    alignSelf: "center",
    padding: 15,
    margin: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
