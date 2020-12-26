import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
// Handeling Swipes
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText/AppText";

function ListItem({
  title,
  description,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.primary} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {/* Conditional Rendering */}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {description && (
              <AppText style={styles.description}>{description}</AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
  },
  description: {
    color: colors.medium,
    fontSize: 15,
    marginTop: 10,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
  },
});

export default ListItem;
