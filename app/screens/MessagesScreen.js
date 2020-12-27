import React, { useState } from "react"; // Function that starts with 'use' is a hook, only availabe in function component
import { View, FlatList, StyleSheet, Platform, StatusBar } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "Dolor nulla nisi ea aute pariatur in minim irure dolor sit.Velit cillum consequat nisi in sunt occaecat laborum sunt occaecat.Veniam eiusmod anim exercitation ipsum consectetur aliquip qui nulla sit et aute est.",
    description:
      "Cupidatat cupidatat deserunt excepteur irure ex labore ex incididunt minim eiusmod officia enim qui eiusmod. Nisi consectetur ad laborum aliqua est elit. Pariatur Lorem in sunt sunt quis exercitation proident esse reprehenderit voluptate sit deserunt qui commodo.Est id esse nisi ex velit ad dolor deserunt cillum. Irure nulla aliquip pariatur ea laboris labore duis culpa ea officia qui laborum occaecat commodo. Mollit voluptate aute nulla ipsum laboris duis velit qui magna id consequat.Nisi labore irure in veniam deserunt. Non laborum amet laborum eu nulla duis pariatur sit deserunt aliquip aliquip. Esse incididunt culpa excepteur et commodo aliquip ad non eiusmod.",
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handelDelete = (message) => {
    // Delete the message from message array
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log("message selected", item)}
            title={item.title}
            description={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handelDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/3.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
