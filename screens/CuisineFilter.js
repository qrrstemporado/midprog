import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const CuisineFilter = () => {
  return (
    <View style={styles.cuisineFilter}>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
      </View>
      <View style={[styles.navbarParent, styles.navbarLayout]}>
        <Image
          style={[styles.navbarIcon, styles.navbarLayout]}
          contentFit="cover"
          source={require("../assets/navbar.png")}
        />
        <View style={[styles.leftTitleRight, styles.leftTitleRightPosition]}>
          <View style={[styles.oxfordStreetParent, styles.oxfordPosition]}>
            <Text style={[styles.oxfordStreet, styles.oxfordPosition]}>
              938 Aurora Boulevard, Cubao
            </Text>
            <Image
              style={[
                styles.fluentlocation12FilledIcon1,
                styles.leftTitleRightPosition,
              ]}
              contentFit="cover"
              source={require("../assets/fluentlocation12filled1.png")}
            />
          </View>
          <Image
            style={styles.filter38390201Icon}
            contentFit="cover"
            source={require("../assets/filter-3839020-11.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.iphoneXOrNewer, styles.leftTitleRightPosition]}
        contentFit="cover"
        source={require("../assets/iphone-x-or-newer2.png")}
      />
      <Image
        style={styles.cuisineFilterChild}
        contentFit="cover"
        source={require("../assets/group-36530.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.cuisineType}>Cuisine Type</Text>
        <Pressable style={[styles.buttonFilipino, styles.buttonLayout]}>
          <View
            style={[styles.buttonFilipinoChild, styles.rectangleIconPosition]}
          />
          <Text style={[styles.filipino, styles.chineseTypo]}>Filipino</Text>
        </Pressable>
        <Pressable style={[styles.buttonChinese, styles.buttonLayout]}>
          <View
            style={[styles.buttonFilipinoChild, styles.rectangleIconPosition]}
          />
          <Text style={[styles.chinese, styles.chineseTypo]}>Chinese</Text>
        </Pressable>
        <Pressable style={[styles.buttonSpanish, styles.buttonPosition1]}>
          <View
            style={[styles.buttonFilipinoChild, styles.rectangleIconPosition]}
          />
          <Text style={[styles.chinese, styles.chineseTypo]}>Spanish</Text>
        </Pressable>
        <Pressable style={[styles.buttonFrench, styles.buttonPosition]}>
          <View
            style={[styles.buttonFilipinoChild, styles.rectangleIconPosition]}
          />
          <Text style={[styles.filipino, styles.chineseTypo]}>French</Text>
        </Pressable>
        <Pressable style={[styles.buttonAmerican, styles.buttonPosition]}>
          <View
            style={[styles.buttonFilipinoChild, styles.rectangleIconPosition]}
          />
          <Text style={[styles.american, styles.chineseTypo]}>American</Text>
        </Pressable>
        <Pressable style={[styles.buttonJapanese, styles.buttonPosition1]}>
          <View
            style={[styles.buttonFilipinoChild, styles.rectangleIconPosition]}
          />
          <Text style={[styles.american, styles.chineseTypo]}>Japanese</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  newsTypo: {
    height: 11,
    fontSize: 9,
    textAlign: "left",
    fontFamily: FontFamily.meeraInimaiRegular,
    letterSpacing: 0,
    top: "50%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  wrapperPosition: {
    marginTop: 4,
    height: 11,
    top: "50%",
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
  navbarLayout: {
    height: 56,
    position: "absolute",
  },
  leftTitleRightPosition: {
    left: 0,
    position: "absolute",
  },
  oxfordPosition: {
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 203,
    width: 375,
    left: 0,
    position: "absolute",
  },
  buttonLayout: {
    width: 129,
    left: 27,
    height: 40,
    position: "absolute",
  },
  rectangleIconPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  chineseTypo: {
    color: Color.colorOrangered,
    fontSize: FontSize.size_xs,
    top: "0%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 40,
    textAlign: "left",
    position: "absolute",
  },
  buttonPosition1: {
    left: 214,
    width: 129,
    height: 40,
    position: "absolute",
  },
  buttonPosition: {
    top: 144,
    width: 129,
    height: 40,
    position: "absolute",
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
    height: 34,
    width: 375,
    left: 0,
    position: "absolute",
  },
  navbarIcon: {
    left: 3,
    width: 376,
    top: 0,
  },
  oxfordStreet: {
    width: "89.42%",
    left: "10.58%",
    fontSize: 16,
    color: Color.gray2,
    textAlign: "left",
    fontFamily: FontFamily.meeraInimaiRegular,
    letterSpacing: 0,
    marginTop: -12,
  },
  fluentlocation12FilledIcon1: {
    width: 23,
    height: 23,
    top: 0,
    overflow: "hidden",
  },
  oxfordStreetParent: {
    width: "70.37%",
    right: "23.51%",
    left: "6.12%",
    height: 28,
  },
  filter38390201Icon: {
    top: 9,
    left: 337,
    width: 21,
    height: 26,
    position: "absolute",
  },
  leftTitleRight: {
    top: 7,
    right: 2,
    height: 42,
  },
  navbarParent: {
    top: 44,
    left: -3,
    width: 378,
  },
  iphoneXOrNewer: {
    right: 0,
    height: 44,
    top: 0,
    maxWidth: "100%",
    overflow: "hidden",
  },
  cuisineFilterChild: {
    top: 663,
    left: 320,
    width: 36,
    height: 36,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    top: 0,
  },
  cuisineType: {
    top: 1,
    left: 9,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 40,
    textAlign: "left",
    color: Color.lightColorBasePrimaryDark,
    position: "absolute",
  },
  buttonFilipinoChild: {
    height: "77.5%",
    top: "10%",
    bottom: "12.5%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
  filipino: {
    left: "34.11%",
  },
  buttonFilipino: {
    top: 49,
  },
  chinese: {
    left: "31.78%",
  },
  buttonChinese: {
    top: 96,
  },
  buttonSpanish: {
    top: 96,
  },
  buttonFrench: {
    left: 27,
    top: 144,
  },
  american: {
    left: "28.68%",
  },
  buttonAmerican: {
    left: 216,
  },
  buttonJapanese: {
    top: 49,
  },
  rectangleGroup: {
    top: 100,
  },
  cuisineFilter: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
});

export default CuisineFilter;
