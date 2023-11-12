import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border } from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeScreen}>
      <Image
        style={[styles.mapsicleMapIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/mapsicle-map.png")}
      />
      <View style={styles.rectangleParent}>
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <Pressable
          style={[styles.newsParent, styles.newsParentLayout]}
          onPress={() => navigation.navigate("HomeScreen2")}
        >
          <Text style={[styles.news, styles.newsTypo]}>Nearby</Text>
          <Image
            style={styles.fluentlocation12FilledIcon}
            contentFit="cover"
            source={require("../assets/fluentlocation12filled.png")}
          />
        </Pressable>
        <View style={[styles.orderWrapper, styles.wrapperPosition]}>
          <Text style={[styles.order, styles.newsTypo]}>Budget</Text>
        </View>
        <View style={[styles.groceryWrapper, styles.wrapperPosition]}>
          <Text style={[styles.order, styles.newsTypo]}>Advanced</Text>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.iconPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.locationPin1Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
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
        style={[styles.locationPin6Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.locationPin7Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.locationPin8Icon, styles.locationIconLayout]}
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
        style={[styles.locationPin11Icon, styles.locationIconPosition]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.locationPin12Icon, styles.locationIconPosition]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.locationPin13Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.locationPin14Icon, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
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
        <View style={[styles.leftTitleRight, styles.iconPosition]}>
          <View style={[styles.oxfordStreetParent, styles.oxfordPosition]}>
            <Text style={[styles.oxfordStreet, styles.oxfordPosition]}>
              938 Aurora Boulevard, Cubao
            </Text>
            <Image
              style={[styles.fluentlocation12FilledIcon1, styles.iconPosition]}
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
        style={styles.iphoneXOrNewer}
        contentFit="cover"
        source={require("../assets/iphone-x-or-newer4.png")}
      />
      <Image
        style={styles.homeScreenChild}
        contentFit="cover"
        source={require("../assets/group-36530.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  newsParentLayout: {
    height: 40,
    position: "absolute",
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
  locationIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  locationIconPosition: {
    left: 287,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    width: "4.4%",
    height: "2.77%",
    maxHeight: "100%",
    maxWidth: "100%",
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
  radar1Layout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  mapsicleMapIcon: {
    width: 812,
    top: 0,
    height: 812,
  },
  rectangleIcon: {
    height: "105.26%",
    top: "-5.26%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  news: {
    marginTop: 9,
    color: Color.colorOrangered,
  },
  fluentlocation12FilledIcon: {
    left: 1,
    width: 27,
    height: 27,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  newsParent: {
    marginTop: -25,
    width: "9.41%",
    right: "41.52%",
    left: "49.07%",
    top: "50%",
    height: 40,
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
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
  locationPin1Icon: {
    top: 251,
    left: 311,
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
  locationPin6Icon: {
    top: 163,
    left: 331,
  },
  locationPin7Icon: {
    top: 175,
    left: 169,
  },
  locationPin8Icon: {
    top: 173,
    left: 27,
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
  locationPin11Icon: {
    top: 347,
  },
  locationPin12Icon: {
    top: 323,
  },
  locationPin13Icon: {
    top: 313,
    left: 271,
  },
  locationPin14Icon: {
    top: 400,
    left: 267,
  },
  vectorIcon: {
    top: "47.91%",
    right: "20.4%",
    bottom: "49.32%",
    left: "75.2%",
  },
  vectorIcon1: {
    top: "48.03%",
    right: "14.8%",
    bottom: "49.2%",
    left: "80.8%",
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
    maxWidth: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homeScreenChild: {
    top: 663,
    left: 320,
    width: 36,
    height: 36,
    position: "absolute",
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
  homeScreen: {
    backgroundColor: Color.lightColorBaseTertiaryLight,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default HomeScreen;
