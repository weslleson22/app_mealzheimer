import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  description: {
    color: colors.blue,
    fontFamily: fonts.text,
    textAlign: "center",
    fontSize: 24,
    flex: 1,
    textAlignVertical: "center"
  },
  content: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    marginTop: -42,
    paddingTop: 12
  },
  items: {
    flex: 1,
    gap: 12
  },
  image: {
    flex: 1
  },
});