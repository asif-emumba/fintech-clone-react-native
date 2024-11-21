import { useLocalSearchParams } from "expo-router";
import {
  isClerkAPIResponseError,
  useSignIn,
  useSignUp,
} from "@clerk/clerk-expo";
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useState, useEffect } from "react";
import { Alert } from "react-native";

const CELL_COUNT = 6;
const PhoneController = () => {
  const { phone, signin } = useLocalSearchParams<{
    phone: string;
    signin: string;
  }>();
  const [code, setCode] = useState("");
  const { signIn } = useSignIn();
  const { signUp, setActive } = useSignUp();
  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });
  useEffect(() => {
    if (code.length === 6) {
      console.log("code", code);
      if (signin === "true") {
        verifySignIn();
      } else {
        verifyCode();
      }
    }
  }, [code]);
  // function to verify login with the help of code
  const verifySignIn = async () => {
    try {
      await signIn!.attemptFirstFactor({
        strategy: "phone_code",
        code: code,
      });
      await setActive!({ session: signIn!.createdSessionId });
    } catch (err) {
      console.log("error", JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        Alert.alert(err.errors[0].message);
      }
    }
  };
  // function to verify the code
  const verifyCode = async () => {
    try {
      await signUp!.attemptPhoneNumberVerification({
        code: code,
      });
      await setActive!({ session: signUp!.createdSessionId });
    } catch (err) {
      console.log("error", JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        Alert.alert(err.errors[0].message);
      }
    }
  };
  return {
    phone,
    signin,
    code,
    setCode,
    signIn,
    signUp,
    ref,
    props,
    getCellOnLayoutHandler,
    CELL_COUNT,
  };
};
export default PhoneController;
