import { StyleSheet } from "react-native";
import fonts from "../../../../styles/fonts";
import colors from "../../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    height: 56,
    borderRadius: 7,
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  message: {
    fontFamily: fonts.heading,
    fontSize: 16,
    color: "#FFFFFF",
  },
});