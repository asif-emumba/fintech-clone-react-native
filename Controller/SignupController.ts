import { useState } from "react";
import { useRouter } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";

const SignUpController = () => {
  const [countryCode, setCountryCode] = useState("+55");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const { signUp } = useSignUp();
  // Sign up function
  const onSignup = async () => {
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;
    console.log(fullPhoneNumber);
    try {
      await signUp!.create({ phoneNumber: fullPhoneNumber });
      signUp!.preparePhoneNumberVerification();
      router.push({
        pathname: "/verify/[phone]",
        params: { phone: fullPhoneNumber },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    countryCode,
    setCountryCode,
    phoneNumber,
    setPhoneNumber,
    router,
    onSignup,
    signUp,
  };
};

export default SignUpController;
