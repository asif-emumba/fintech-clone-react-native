import { useRouter } from "expo-router";
import { isClerkAPIResponseError, useSignIn } from "@clerk/clerk-expo";
import { useState } from "react";
import { Alert } from "react-native";
enum SignInTypes {
  Phone,
  Email,
  Apple,
  Google,
}
const SignInController = () => {
  const [countryCode, setCountryCode] = useState("+79");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const { signIn } = useSignIn();
  // Sign in function
  const onSingnIn = async (type: SignInTypes) => {
    if (type === SignInTypes.Phone) {
      try {
        const fullPhoneNumber = `${countryCode}${phoneNumber}`;
        const { supportedFirstFactors } = await signIn!.create({
          identifier: fullPhoneNumber,
        });
        const firstPhoneFactor: any = supportedFirstFactors?.find(
          (factor: any) => {
            return factor.strategy === "phone_code";
          }
        );
        const { phoneNumberId } = firstPhoneFactor;
        await signIn!.prepareFirstFactor({
          strategy: "phone_code",
          phoneNumberId,
        });
        router.push({
          pathname: "/verify/[phone]",
          params: { phone: fullPhoneNumber, signin: "true" },
        });
      } catch (err) {
        console.log(err, JSON.stringify(err, null, 2));
        if (isClerkAPIResponseError(err)) {
          if (err.errors[0].code === "form_identifier_not_found") {
            Alert.alert("Phone number not found");
          }
        }
      }
    }
  };

  return {
    countryCode,
    setCountryCode,
    phoneNumber,
    setPhoneNumber,
    onSingnIn,
    router,
    signIn,
    SignInTypes,
  };
};
export default SignInController;
