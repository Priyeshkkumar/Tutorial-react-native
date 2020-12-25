import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup";

import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";

// Validation schema: An object that determines rules
// for validating our form. We are defining it outside our function
// as we don't want it to re-define every time function get rendered
const validationSchema = Yup.object().shape({
  email: Yup.string().email().label("Email").required("Required"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Formik
        initialValues={{ email: "", password: " " }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
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
            <ErrorMessage>{errors.email}</ErrorMessage>
            <AppTextInput
              autoCaaitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              secureTextEntry={true}
              placeholder="Password"
              textContentType="password" //only works on ios
            />
            <ErrorMessage>{errors.password}</ErrorMessage>
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
