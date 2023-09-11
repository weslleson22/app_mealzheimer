import { StyleSheet } from "react-native";
import colors from "../../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    position: "absolute",
    right: 42,
    top: 42,
    zIndex: 100
  }
});