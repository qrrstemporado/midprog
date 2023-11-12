import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const GettingStarted1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gettingStarted1}>
      <View style={[styles.gettingStarted1Child, styles.maskPosition]} />
      <Image
        style={[styles.image29Icon, styles.maskPosition]}
        contentFit="cover"
        source={require("../assets/image-291.png")}
      />
      <View style={[styles.image, styles.maskPosition]}>
        <View style={[styles.screenParent, styles.iphoneIconLayout]}>
          <Image
            style={styles.screenIcon}
            contentFit="cover"
            source={require("../assets/screen1.png")}
          />
          <Image
            style={[styles.iphoneIcon, styles.iphoneIconLayout]}
            contentFit="cover"
            source={require("../assets/iphone.png")}
          />
        </View>
        <LinearGradient
          style={styles.overlay}
          locations={[0, 1]}
          colors={["rgba(251, 188, 5, 0)", "#fbbc05"]}
        />
        <View style={[styles.mask, styles.maskPosition]} />
      </View>
      <View style={[styles.homeIndicator, styles.maskPosition]}>
        <View style={[styles.homeIndicator1, styles.capacityBg]} />
      </View>
      <Image
        style={styles.gettingStarted1Item}
        contentFit="cover"
        source={require("../assets/frame-49.png")}
      />
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("GettingStarted2")}
      >
        <Text style={styles.title}>Get Started</Text>
      </Pressable>
      <Text style={[styles.lookingForA, styles.buttonLayout]}>
        Looking for a Place to Eat?
      </Text>
      <View style={[styles.statusBar, styles.maskPosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={[styles.timeStyle, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maskPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iphoneIconLayout: {
    height: 486,
    width: 243,
    top: 0,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.lightColorBasePrimaryDark,
    position: "absolute",
  },
  buttonLayout: {
    width: 328,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  gettingStarted1Child: {
    backgroundColor: "#fbbc05",
    height: 504,
    top: 0,
  },
  image29Icon: {
    height: 470,
    top: 0,
  },
  screenIcon: {
    top: 13,
    left: 16,
    width: 212,
    height: 458,
    position: "absolute",
    overflow: "hidden",
  },
  iphoneIcon: {
    left: 0,
  },
  screenParent: {
    left: 66,
  },
  overlay: {
    top: 183,
    left: 18,
    width: 339,
    height: 153,
    backgroundColor: "transparent",
    position: "absolute",
  },
  mask: {
    top: 593,
    height: 274,
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
  image: {
    top: 151,
    height: 593,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    top: 778,
    height: 34,
  },
  gettingStarted1Item: {
    top: 731,
    left: 173,
    width: 28,
    height: 10,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.lightColorBaseTertiaryLight,
    textAlign: "center",
  },
  button: {
    top: 646,
    left: 24,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorOrangered,
    shadowColor: "rgba(190, 120, 103, 0.2)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
  },
  lookingForA: {
    top: 502,
    left: 23,
    fontSize: FontSize.size_13xl,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.emText,
    textAlign: "left",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.lightColorBasePrimaryDark,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
  },
  battery: {
    top: 17,
    right: 14,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.meeraInimaiRegular,
    color: Color.lightColorBasePrimaryDark,
    textAlign: "center",
    left: 0,
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  gettingStarted1: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
});

export default GettingStarted1;
