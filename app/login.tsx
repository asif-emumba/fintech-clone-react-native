import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import SignInController from "@/Controller/SigninController";
import SignInButton from "@/components/SignInButton";

const LoginPage = () => {
  const { countryCode, phoneNumber, setPhoneNumber, onSingnIn, SignInTypes } =
    SignInController();
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Welcome back!</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter the phone number associated with your account
      </Text>
      {/* phone number inputs */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.gray}
          value={countryCode}
          placeholder="+92"
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Phone number"
          keyboardType="numeric"
          value={phoneNumber}
          placeholderTextColor={Colors.gray}
          onChangeText={setPhoneNumber}
        />
      </View>
      {/* singin button */}

      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          phoneNumber !== "" ? styles.enabled : styles.disabled,
          { marginBottom: 20 },
        ]}
        onPress={() => onSingnIn(SignInTypes.Phone)}
      >
        <Text style={defaultStyles.buttonText}>Continue</Text>
      </TouchableOpacity>
      {/* signin with social gateways */}
      <View style={styles.otherView}>
        <View style={styles.seprator} />
        <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
        <View style={styles.seprator} />
      </View>
      {/* Custom Buttons for  */}
      {/* email sign in */}
      <SignInButton
        text="Continue with email"
        textStyles={{ color: "black" }}
        style={{
          flexDirection: "row",
          gap: 16,
          backgroundColor: "white",
          marginTop: 20,
        }}
        logoname="mail"
        onPress={() => onSingnIn(SignInTypes.Email)}
        size={24}
      />
      {/* google sign in */}
      <SignInButton
        text="Continue with gmail"
        textStyles={{ color: "black" }}
        style={{
          flexDirection: "row",
          gap: 16,
          backgroundColor: "white",
          marginTop: 20,
        }}
        logoname="logo-google"
        onPress={() => onSingnIn(SignInTypes.Google)}
        size={24}
      />
      {/* apple sign in */}
      <SignInButton
        text="Continue with Apple ID"
        textStyles={{ color: "black" }}
        style={{
          flexDirection: "row",
          gap: 16,
          backgroundColor: "white",
          marginTop: 20,
        }}
        logoname="logo-apple"
        onPress={() => onSingnIn(SignInTypes.Apple)}
        size={24}
      />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
  seprator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.gray,
  },
  otherView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
