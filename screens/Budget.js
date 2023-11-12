import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Budget = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.budget}>
      <Image
        style={styles.mapsicleMapIcon}
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
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.news}>Nearby</Text>
          <Image
            style={styles.fluentlocation12FilledIcon}
            contentFit="cover"
            source={require("../assets/fluentlocation12filled4.png")}
          />
        </Pressable>
        <View style={[styles.orderWrapper, styles.wrapperPosition]}>
          <Text style={styles.order}>Budget</Text>
        </View>
        <View style={[styles.groceryWrapper, styles.wrapperPosition]}>
          <Text style={styles.grocery}>Advanced</Text>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.budgetChildPosition]}>
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
        style={styles.iphoneXOrNewer}
        contentFit="cover"
        source={require("../assets/iphone-x-or-newer3.png")}
      />
      <Pressable
        style={[styles.radar1, styles.radar1Layout]}
        onPress={() => navigation.navigate("Advanced")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/radar-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.philippinePeso1Icon, styles.radar1Layout]}
        contentFit="cover"
        source={require("../assets/philippinepeso-11.png")}
      />
      <View style={[styles.budgetChild, styles.budgetChildPosition]} />
      <Text style={styles.spendingLimit}>Spending Limit</Text>
      <View style={[styles.budgetItem, styles.budgetLayout]} />
      <Text style={[styles.below500php, styles.phpTypo]}>Below 500php</Text>
      <View style={[styles.budgetInner, styles.budgetLayout]} />
      <Text style={[styles.php, styles.phpTypo]}>500 - 1000php</Text>
      <View style={styles.button}>
        <Text style={styles.title}>Apply</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.phpPosition]}>
        <View style={[styles.groupChild, styles.budgetLayout]} />
        <Text style={[styles.php1, styles.phpTypo]}>1000 - 2000php</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.customBudgetPosition]}>
        <View style={[styles.groupChild, styles.budgetLayout]} />
        <Text style={[styles.php1, styles.phpTypo]}>Above 2000php</Text>
      </View>
      <View style={[styles.rectangleView, styles.budgetLayout]} />
      <Text style={[styles.customBudget, styles.customBudgetPosition]}>
        Custom Budget
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  budgetChildPosition: {
    width: 375,
    left: 0,
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
  budgetLayout: {
    height: 29,
    borderRadius: Border.br_mini,
    width: 114,
    position: "absolute",
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
  phpTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 40,
    color: Color.colorOrangered,
    textAlign: "left",
  },
  phpPosition: {
    top: 584,
    position: "absolute",
  },
  customBudgetPosition: {
    top: 628,
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
    color: "rgba(0, 0, 0, 0.25)",
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
    color: Color.colorOrangered,
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
  orderWrapper: {
    width: "8.27%",
    right: "10.67%",
    left: "81.07%",
  },
  grocery: {
    color: Color.colorSilver,
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
    maxWidth: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  radar1: {
    left: 50,
    top: 750,
  },
  philippinePeso1Icon: {
    top: 753,
    left: 307,
  },
  budgetChild: {
    top: 533,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    height: 203,
  },
  spendingLimit: {
    top: 540,
    left: 13,
    fontSize: FontSize.size_xl,
    color: Color.lightColorBasePrimaryDark,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 40,
    textAlign: "left",
    position: "absolute",
  },
  budgetItem: {
    left: 6,
    top: 590,
    borderRadius: Border.br_mini,
  },
  below500php: {
    left: 21,
    top: 584,
    position: "absolute",
  },
  budgetInner: {
    left: 130,
    top: 590,
    borderRadius: Border.br_mini,
  },
  php: {
    left: 145,
    top: 584,
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
    top: 678,
    left: 15,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorOrangered,
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
    position: "absolute",
  },
  groupChild: {
    top: 6,
    left: 0,
  },
  php1: {
    left: 10,
    top: 0,
    position: "absolute",
  },
  rectangleGroup: {
    left: 254,
    width: 114,
    height: 40,
  },
  rectangleContainer: {
    left: 63,
    width: 114,
    height: 40,
  },
  rectangleView: {
    top: 634,
    left: 197,
  },
  customBudget: {
    left: 207,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 40,
    color: Color.colorOrangered,
    textAlign: "left",
  },
  budget: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
});

export default Budget;
