import {
  ViewStyle,
  Dimensions,
  StyleSheet,
  ImageStyle,
  TextStyle,
} from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  iconContainer: ViewStyle;
}

export const _container = (mainColor: string): ViewStyle => ({
  height: 40,
  borderWidth: 1,
  borderRadius: 6,
  flexDirection: "row",
  alignItems: "center",
  borderColor: mainColor,
  justifyContent: "center",
  width: ScreenWidth * 0.7,
});

export const _imageStyle = (mainColor: string): ImageStyle => ({
  width: 15,
  height: 15,
  tintColor: mainColor,
});

export const _textStyle = (mainColor: string): TextStyle => ({
  color: mainColor,
  fontWeight: "700",
});

export default StyleSheet.create<Style>({
  iconContainer: {
    right: 16,
    position: "absolute",
  },
});
