import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

// Since there is index.js in AppText folder therefore we do not need
// to specify AppText file
// import AppText from "./app/components/AppText";

import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsMainScreen from "./app/screens/AccountScreen";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        maxLength={5}
        keyboardType="numeric"
        clearButtonMode="always" //only works on ios
        secureTextEntry={true} //Taking Password
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  );
}
