import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.introScreen}
      onPress={() => navigation.navigate("GettingStarted1")}
    >
      <Image
        style={[styles.image29Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-292.png")}
      />
      <Image
        style={[styles.image30Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-30.png")}
      />
      <Image
        style={styles.ketsaanLowResolutionLogoCoIcon}
        contentFit="cover"
        source={require("../assets/ketsaanlowresolutionlogocolorontransparentbackground-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    opacity: 0.2,
    position: "absolute",
  },
  image29Icon: {
    top: 27,
    left: 0,
    width: 370,
    height: 542,
  },
  image30Icon: {
    top: 593,
    left: 2,
    width: 373,
    height: 219,
  },
  ketsaanLowResolutionLogoCoIcon: {
    marginTop: -88,
    marginLeft: -85.5,
    top: "50%",
    left: "50%",
    width: 171,
    height: 176,
    position: "absolute",
  },
  introScreen: {
    backgroundColor: Color.lightColorBaseTertiaryLight,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default IntroScreen;
