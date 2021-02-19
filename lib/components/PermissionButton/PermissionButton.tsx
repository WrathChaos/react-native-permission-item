import * as React from "react";
import { View, Text, Image } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, {
  _container,
  _imageStyle,
  _textStyle,
} from "./PermissionButton.style";

const checkIcon = require("../../local-assets/checked.png");
const cancelIcon = require("../../local-assets/cancel.png");

interface IPermissionButtonProps {
  text: string;
  isGranted: boolean;
  onPress: () => void;
}

const PermissionButton = (props: IPermissionButtonProps) => {
  const { text = "Give Permission", isGranted = false, onPress } = props;
  const mainColor = isGranted ? "#36d921" : "#d93621";
  const icon = isGranted ? checkIcon : cancelIcon;
  return (
    <RNBounceable bounceEffect={0.95} bounceFriction={2} onPress={onPress}>
      <View style={_container(mainColor)}>
        <Text style={_textStyle(mainColor)}>{text}</Text>
        <View style={styles.iconContainer}>
          <Image source={icon} style={_imageStyle(mainColor)} />
        </View>
      </View>
    </RNBounceable>
  );
};

export default PermissionButton;
