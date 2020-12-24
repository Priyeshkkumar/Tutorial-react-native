import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText/AppText";

function ListItem({ title, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
