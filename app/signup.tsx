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
import { Link } from "expo-router";
import useSignupHook from "@/Controller/SignupController";

const SignupPage = () => {
  const { countryCode, phoneNumber, setPhoneNumber, onSignup } =
    useSignupHook();
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started!</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter your phone number. We will send you a confirmation code there
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
      {/* login link text */}
      <Link href={"/login"} replace asChild>
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </Link>
      {/* signup button */}
      <View style={{ flex: 1 }} />
      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          phoneNumber !== "" ? styles.enabled : styles.disabled,
          { marginBottom: 20 },
        ]}
        onPress={onSignup}
      >
        <Text style={defaultStyles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupPage;

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
});
