import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

interface SignInButtonProps {
  onPress: () => void;
  logoname: keyof typeof Ionicons.glyphMap;
  text: string;
  style?: ViewStyle;
  size: number;
  textStyles?: TextStyle;
}
const SignInButton = ({
  onPress,
  logoname,
  text,
  style,
  size,
  textStyles,
}: SignInButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[defaultStyles.pillButton, style]}
    >
      <Ionicons name={logoname} size={size} color={Colors.dark} />
      <Text style={[defaultStyles.buttonText, textStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SignInButton;
