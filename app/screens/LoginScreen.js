import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText/AppText";
import AppTextInput from "../components/AppTextInput";

import Screen from "../components/Screen";
import colors from "../config/colors";

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      {/* Since we have built a custom TextInput(for pretty styling), therefore 
      intellisence won't work here, therefore always read offical docs
      for props(goto TextInput on official docs of expo). */}
      <AppTextInput
        autoCaaitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress" //only works on ios
      />
      <AppTextInput
        autoCaaitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        placeholder="Password"
        textContentType="password" //only works on ios
      />
      <AppButton
        //   setting the width of the button
        style={{
          width: "95%",
          height: 60,
          margin: 10,
          backgroundColor: colors.secondary,
        }}
        title="Login"
        onPress={() => console.log(email, password)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  logo: {
    width: 160,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
