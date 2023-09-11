import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: "#FFF",
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12
  },
  title: {
    fontFamily: fonts.complement,
    fontSize: 16,
  },
  percentage: {
    fontFamily: fonts.heading,
    fontSize: 14,
    backgroundColor: colors.blue,
    height: 42,
    width: 42,
    borderRadius: 7,
    textAlign: "center",
    textAlignVertical: "center",
  },
});