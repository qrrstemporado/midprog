import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Advanced = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.advanced}>
      <Image
        style={styles.mapsicleMapIcon}
        contentFit="cover"
        source={require("../assets/mapsicle-map.png")}
      />
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <Pressable
          style={[styles.newsParent, styles.newsParentLayout]}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.news}>Nearby</Text>
          <Image
            style={styles.fluentlocation12FilledIcon}
            contentFit="cover"
            source={require("../assets/fluentlocation12filled2.png")}
          />
        </Pressable>
        <View style={[styles.orderWrapper, styles.wrapperPosition]}>
          <Text style={[styles.order, styles.orderPosition]}>Budget</Text>
        </View>
        <View style={[styles.groceryWrapper, styles.wrapperPosition]}>
          <Text style={[styles.grocery, styles.orderPosition]}>Advanced</Text>
        </View>
      </View>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.locationPin2Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.locationPin3Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.locationPin5Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.locationPin15Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.locationPin16Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.locationPin4Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.locationPin9Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.locationPin10Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.locationPin13Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.icCurrentIcon, styles.newsParentLayout]}
        contentFit="cover"
        source={require("../assets/ic-current.png")}
      />
      <View style={[styles.navbarParent, styles.navbarLayout]}>
        <Image
          style={[styles.navbarIcon, styles.navbarLayout]}
          contentFit="cover"
          source={require("../assets/navbar.png")}
        />
        <View style={styles.leftTitleRight}>
          <View style={[styles.oxfordStreetParent, styles.oxfordPosition]}>
            <Text style={[styles.oxfordStreet, styles.oxfordPosition]}>
              938 Aurora Boulevard, Cubao
            </Text>
            <Image
              style={styles.fluentlocation12FilledIcon1}
              contentFit="cover"
              source={require("../assets/fluentlocation12filled1.png")}
            />
          </View>
          <Image
            style={styles.filter38390201Icon}
            contentFit="cover"
            source={require("../assets/filter-3839020-1.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.iphoneXOrNewer, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/iphone-x-or-newer3.png")}
      />
      <Image
        style={[styles.radar1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/radar-11.png")}
      />
      <Pressable
        style={[styles.philippinePeso1, styles.iconLayout]}
        onPress={() => navigation.navigate("Budget")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/philippinepeso-1.png")}
        />
      </Pressable>
      <View style={styles.advancedChild} />
      <Text style={[styles.customLocalRadius, styles.kmTypo]}>
        Custom local radius
      </Text>
      <Image
        style={styles.advancedItem}
        contentFit="cover"
        source={require("../assets/ellipse-107.png")}
      />
      <View style={[styles.advancedInner, styles.advancedInnerLayout]} />
      <View style={[styles.rectangleView, styles.advancedInnerLayout]} />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-108.png")}
      />
      <Text style={[styles.km, styles.kmTypo]}>1km</Text>
      <View style={styles.button}>
        <Text style={styles.title}>Apply</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  rectangleIconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  newsParentLayout: {
    height: 40,
    position: "absolute",
  },
  wrapperPosition: {
    marginTop: 4,
    height: 11,
    top: "50%",
    position: "absolute",
  },
  orderPosition: {
    marginTop: -5.5,
    height: 11,
    textAlign: "left",
    fontFamily: FontFamily.meeraInimaiRegular,
    letterSpacing: 0,
    fontSize: 9,
    top: "50%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  locationIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  navbarLayout: {
    height: 56,
    position: "absolute",
  },
  oxfordPosition: {
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  kmTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 40,
    textAlign: "left",
    color: Color.lightColorBasePrimaryDark,
    position: "absolute",
  },
  advancedInnerLayout: {
    height: 10,
    top: 637,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  mapsicleMapIcon: {
    width: 812,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  rectangleIcon: {
    height: "105.26%",
    top: "-5.26%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  news: {
    marginTop: 9,
    height: 11,
    color: Color.lightColorBasePrimaryDark,
    fontSize: 9,
    textAlign: "left",
    fontFamily: FontFamily.meeraInimaiRegular,
    letterSpacing: 0,
    top: "50%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  fluentlocation12FilledIcon: {
    left: 2,
    width: 27,
    height: 27,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  newsParent: {
    marginTop: -25,
    width: "9.41%",
    right: "41.79%",
    left: "48.8%",
    opacity: 0.25,
    top: "50%",
    height: 40,
  },
  order: {
    color: Color.colorSilver,
  },
  orderWrapper: {
    width: "8.27%",
    right: "10.67%",
    left: "81.07%",
  },
  grocery: {
    color: Color.colorOrangered,
  },
  groceryWrapper: {
    width: "11.73%",
    right: "77.33%",
    left: "10.93%",
  },
  rectangleParent: {
    height: "9.36%",
    top: "90.64%",
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
  locationPin2Icon: {
    top: 324,
    left: 188,
  },
  locationPin3Icon: {
    top: 382,
    left: 115,
  },
  locationPin5Icon: {
    top: 428,
    left: 174,
  },
  locationPin15Icon: {
    top: 365,
    left: 204,
  },
  locationPin16Icon: {
    top: 302,
    left: 234,
  },
  locationPin4Icon: {
    top: 299,
    left: 43,
  },
  locationPin9Icon: {
    top: 227,
    left: 123,
  },
  locationPin10Icon: {
    top: 336,
    left: 275,
  },
  locationPin13Icon: {
    top: 313,
    left: 271,
  },
  icCurrentIcon: {
    top: 326,
    left: 146,
    width: 40,
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
    left: 0,
    top: 0,
    position: "absolute",
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
    left: 0,
    position: "absolute",
  },
  navbarParent: {
    top: 44,
    left: -3,
    width: 378,
  },
  iphoneXOrNewer: {
    right: 0,
    height: 44,
    left: 0,
    top: 0,
  },
  radar1Icon: {
    top: 750,
    left: 50,
  },
  icon: {
    height: "100%",
    opacity: 0.25,
    width: "100%",
  },
  philippinePeso1: {
    left: 307,
    top: 753,
  },
  advancedChild: {
    top: 578,
    backgroundColor: Color.colorWhitesmoke,
    height: 160,
    borderRadius: Border.br_3xs,
    width: 375,
    left: 0,
    position: "absolute",
  },
  customLocalRadius: {
    top: 585,
    fontSize: FontSize.size_xl,
    width: 202,
    height: 32,
    left: 7,
  },
  advancedItem: {
    top: 220,
    left: 38,
    width: 256,
    height: 251,
    opacity: 0.25,
    position: "absolute",
  },
  advancedInner: {
    width: 120,
    backgroundColor: Color.colorOrangered,
    left: 7,
  },
  rectangleView: {
    left: 126,
    width: 194,
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
  ellipseIcon: {
    top: 630,
    left: 115,
  },
  km: {
    top: 623,
    left: 326,
    fontSize: FontSize.size_mini,
    width: 43,
    height: 38,
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
    top: 678,
    left: 19,
    borderRadius: Border.br_xl,
    shadowColor: "rgba(190, 120, 103, 0.2)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 339,
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.colorOrangered,
    position: "absolute",
  },
  advanced: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
});

export default Advanced;
