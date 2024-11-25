import { Link, RelativePathString } from "expo-router";
import { TextStyle, TouchableOpacity, Text } from "react-native";
import { defaultStyles } from "@/constants/Styles";

interface LinkButtonProps {
  href: any;
  buttonStyle: TextStyle;
  textStyle: TextStyle;
  text: string;
}

const LinkButton = ({
  href,
  buttonStyle,
  textStyle,
  text,
}: LinkButtonProps) => {
  return (
    <Link href={href} asChild style={[defaultStyles.pillButton, buttonStyle]}>
      <TouchableOpacity>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    </Link>
  );
};
export default LinkButton;
