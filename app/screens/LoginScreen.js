import React from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";

import Screen from "../components/Screen";
import colors from "../config/colors";

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Formik
        initialValues={{ email: "", password: " " }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCaaitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress" //only works on ios
            />
            <AppTextInput
              autoCaaitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
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
              onPress={handleSubmit} // onSubmit props of Formik will be called by handleSubmit
            />
          </>
        )}
      </Formik>

      {/* Since we have built a custom TextInput(for pretty styling), therefore 
      intellisence won't work here, therefore always read offical docs
      for props(goto TextInput on official docs of expo). */}
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
