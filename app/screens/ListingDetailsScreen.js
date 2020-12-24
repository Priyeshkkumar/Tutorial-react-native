import React from "react";
import { Image, View, StyleSheet, ListViewComponent } from "react-native";
import AppText from "../components/AppText/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/1.jpeg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Wallpaper1</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem image={require("../assets/avatar.png")} title="My name" />
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
  userContainer: {
    marginVertical: 20,
  },
});

export default ListingDetailsScreen;
