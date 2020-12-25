import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";
import colors from "../../config/colors";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      //   setting the width of the button
      style={{
        width: "95%",
        height: 60,
        margin: 10,
        backgroundColor: colors.secondary,
      }}
      title={title}
      onPress={handleSubmit} // onSubmit props of Formik will be called by handleSubmit
    />
  );
}

export default SubmitButton;
