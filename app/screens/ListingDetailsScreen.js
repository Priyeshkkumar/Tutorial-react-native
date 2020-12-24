import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/1.jpeg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Wallpaper1</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "500",
  },
});

export default ListingDetailsScreen;
