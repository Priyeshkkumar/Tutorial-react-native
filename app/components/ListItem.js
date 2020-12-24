import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/AppText";
// Handeling Swipes
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({ title, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.primary} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    marginLeft: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ListItem;
