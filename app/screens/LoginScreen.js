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
import AppFormField from "../components/AppFormField";

// Validation schema: An object that determines rules
// for validating our form. We are defining it outside our function
// as we don't want it to re-define every time function get rendered
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
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
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              autoCaaitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress" //only works on ios
            />
            <AppFormField
              autoCaaitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry={true}
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
