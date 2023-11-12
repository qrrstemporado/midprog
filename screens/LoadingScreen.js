import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const LoadingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loadingScreen}>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <Image
          style={[styles.rectangleIcon, styles.rectanglePosition]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={styles.newsParent}>
          <Text style={[styles.news, styles.newsTypo]}>Nearby</Text>
          <Image
            style={[
              styles.fluentlocation12FilledIcon,
              styles.iphoneXOrNewerPosition,
            ]}
            contentFit="cover"
            source={require("../assets/fluentlocation12filled.png")}
          />
        </View>
        <View style={[styles.orderWrapper, styles.wrapperPosition]}>
          <Text style={[styles.order, styles.newsTypo]}>Budget</Text>
        </View>
        <View style={[styles.groceryWrapper, styles.wrapperPosition]}>
          <Text style={[styles.order, styles.newsTypo]}>Advanced</Text>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.loadingScreenChild, styles.homeIndicatorPosition]}
        contentFit="cover"
        source={require("../assets/group-36529.png")}
      />
      <Image
        style={[styles.iphoneXOrNewer, styles.homeIndicatorPosition]}
        contentFit="cover"
        source={require("../assets/iphone-x-or-newer1.png")}
      />
      <Pressable
        style={[styles.radar1, styles.radar1Layout]}
        onPress={() => navigation.navigate("Advanced")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/radar-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.philippinePeso1, styles.radar1Layout]}
        onPress={() => navigation.navigate("Budget")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/philippinepeso-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.directions1Icon, styles.radar1Layout]}
        contentFit="cover"
        source={require("../assets/directions-1.png")}
      />
      <Text style={styles.startNavigation}>Start Navigation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  newsTypo: {
    height: 11,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: 9,
    fontFamily: FontFamily.meeraInimaiRegular,
    top: "50%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iphoneXOrNewerPosition: {
    top: 0,
    overflow: "hidden",
  },
  wrapperPosition: {
    marginTop: 4,
    height: 11,
    top: "50%",
    position: "absolute",
  },
  homeIndicatorPosition: {
    left: 0,
    position: "absolute",
  },
  radar1Layout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  rectangleIcon: {
    height: "105.26%",
    top: "-5.26%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  news: {
    marginTop: 9,
    color: Color.colorOrangered,
  },
  fluentlocation12FilledIcon: {
    left: 1,
    width: 27,
    height: 27,
    position: "absolute",
  },
  newsParent: {
    marginTop: -25,
    width: "9.41%",
    right: "41.52%",
    left: "49.07%",
    height: 40,
    top: "50%",
    position: "absolute",
  },
  order: {
    marginTop: -5.5,
    color: Color.colorSilver,
  },
  orderWrapper: {
    width: "8.27%",
    right: "10.67%",
    left: "81.07%",
  },
  groceryWrapper: {
    width: "11.73%",
    right: "77.33%",
    left: "10.93%",
  },
  rectangleParent: {
    height: "9.36%",
    top: "90.64%",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightColorBasePrimaryDark,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 778,
    width: 375,
    height: 34,
  },
  loadingScreenChild: {
    top: 44,
    width: 378,
    height: 56,
  },
  iphoneXOrNewer: {
    right: 0,
    height: 44,
    top: 0,
    overflow: "hidden",
    maxWidth: "100%",
  },
  radar1: {
    left: 50,
    top: 750,
  },
  icon1: {
    opacity: 0.25,
  },
  philippinePeso1: {
    left: 307,
    top: 753,
  },
  directions1Icon: {
    top: 682,
    left: 117,
  },
  startNavigation: {
    top: 686,
    left: 148,
    fontSize: FontSize.size_sm,
    color: Color.lightColorBaseTertiaryLight,
    textAlign: "center",
    fontFamily: FontFamily.meeraInimaiRegular,
    position: "absolute",
  },
  loadingScreen: {
    backgroundColor: Color.lightColorBaseTertiaryLight,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoadingScreen;
