import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText/AppText";

function Card({ title, description, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={{ paddingBottom: 10, color: "white" }}>{title}</AppText>
        <AppText style={{ paddingBottom: 10, color: "white" }}>
          {description}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#14213d",
    marginBottom: 20,
    // Due to overflow of the image the round corners will
    // not be visible therefore:
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default Card;
