import { Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    color: colors.medium,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avernir",
  },
};
