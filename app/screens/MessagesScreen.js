import React from "react";
import { View, FlatList, StyleSheet, Platform, StatusBar } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/3.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/3.jpeg"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log("message selected", item)}
            title={item.title}
            image={item.image}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
