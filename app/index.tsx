import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { VideoView } from "expo-video";
import Colors from "@/constants/Colors";
import IndexController from "@/Controller/IndexController";
import LinkButton from "@/components/LinkButton";

const HomePage = () => {
  // controller logic
  const { player1, assets } = IndexController();
  return (
    <View style={styles.container}>
      {assets && (
        <VideoView
          player={player1}
          style={styles.videoStyle}
          shouldRasterizeIOS // for better performance
          nativeControls={false}
          allowsPictureInPicture={false}
          contentFit="cover"
        />
      )}
      {/* intro text view */}
      <View style={styles.introTextView}>
        <Text style={styles.introText}>
          Ready to change the way you manage money?
        </Text>
      </View>
      {/* login signup buttons view */}

      <View style={styles.buttonsView}>
        {/* custom buttons for login and signup with link */}
        <LinkButton
          href="/login"
          buttonStyle={styles.loginButton}
          textStyle={styles.loginText}
          text="Login"
        />
        <LinkButton
          href="/signup"
          buttonStyle={styles.signupButton}
          textStyle={styles.signupText}
          text="Signup"
        />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  videoStyle: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  introTextView: {
    marginTop: 80,
    padding: 20,
    alignItems: "center",
  },
  introText: {
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "white",
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 60,
    gap: 20,
    paddingHorizontal: 20,
  },
  loginText: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
  },
  signupText: {
    color: "black",
    fontSize: 22,
    fontWeight: "600",
  },
  loginButton: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  signupButton: {
    flex: 1,
    backgroundColor: "white",
  },
});
