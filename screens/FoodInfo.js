import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const FoodInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.foodInfo}>
      <Image
        style={[styles.mapsicleMapIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/mapsicle-map.png")}
      />
      <View style={styles.homeIndicator}>
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
        style={styles.icCurrentIcon}
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
        source={require("../assets/iphone-x-or-newer.png")}
      />
      <View style={[styles.foodInfoChild, styles.foodLayout]} />
      <Image
        style={[styles.foodInfoItem, styles.foodLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <Text style={[styles.muglaiFood, styles.infoTypo]}>Muglai Food</Text>
      <View style={styles.starParent}>
        <Image
          style={[styles.starIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Text style={styles.text}>4.3</Text>
      </View>
      <Text style={[styles.fastFoodRestaurant, styles.reviewsTypo]}>
        Fast food restaurant
      </Text>
      <Text style={styles.addressAtulGroveContainer}>
        <Text style={styles.address}>{`Address: `}</Text>
        <Text style={styles.atulGroveRd}>
          Atul Grove Rd, Atul Grove Road, Janpath, HC Mathur Lane, New Delhi,
          Delhi 110001
        </Text>
      </Text>
      <Text style={[styles.info, styles.infoTypo]}>Info</Text>
      <Text style={[styles.loremIpsumDolor, styles.reviewsTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed vitae
        nisl ultricies sem. Pulvinar ut aliquam ac ultrices mauris ac ornare.
        Enim, eu viverra sit amet, duis libero pulvinar odio mattis.
      </Text>
      <Text style={[styles.reviews, styles.reviewsTypo]}>(124 reviews)</Text>
      <Pressable
        style={[styles.foodInfoInner, styles.foodInfoInnerLayout]}
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Image
        style={[styles.directions1Icon, styles.radar1Layout]}
        contentFit="cover"
        source={require("../assets/directions-1.png")}
      />
      <Text style={[styles.startNavigation, styles.reviewsTypo]}>
        Start Navigation
      </Text>
      <View style={[styles.rectangleView, styles.foodInfoInnerLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
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
  radar1Layout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
  foodLayout: {
    borderRadius: Border.br_mini,
    width: 375,
    left: 0,
    position: "absolute",
  },
  infoTypo: {
    color: Color.gray1,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    left: 13,
    fontFamily: FontFamily.meeraInimaiRegular,
    position: "absolute",
  },
  reviewsTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.meeraInimaiRegular,
    position: "absolute",
  },
  foodInfoInnerLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  mapsicleMapIcon: {
    width: 812,
    top: 0,
    height: 812,
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
    height: 40,
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
    maxWidth: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  foodInfoChild: {
    top: 145,
    height: 597,
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
  foodInfoItem: {
    top: 164,
    height: 250,
  },
  muglaiFood: {
    top: 429,
    textAlign: "center",
  },
  starIcon: {
    top: 3,
    width: 97,
    height: 15,
  },
  text: {
    left: 105,
    fontSize: 18,
    color: Color.lightColorBasePrimaryDark,
    textAlign: "center",
    fontFamily: FontFamily.meeraInimaiRegular,
    top: 0,
    position: "absolute",
  },
  starParent: {
    top: 437,
    left: 230,
    width: 130,
    height: 30,
    position: "absolute",
  },
  fastFoodRestaurant: {
    top: 462,
    color: Color.gray3,
    textAlign: "center",
    left: 13,
  },
  address: {
    color: Color.lightColorBasePrimaryDark,
  },
  atulGroveRd: {
    color: Color.gray3,
  },
  addressAtulGroveContainer: {
    top: 485,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    width: 312,
    left: 13,
    textAlign: "left",
    fontFamily: FontFamily.meeraInimaiRegular,
    position: "absolute",
  },
  info: {
    top: 531,
    textAlign: "center",
  },
  loremIpsumDolor: {
    top: 561,
    width: 338,
    color: Color.gray3,
    left: 13,
    textAlign: "left",
  },
  reviews: {
    top: 455,
    left: 236,
    color: Color.gray3,
    textAlign: "center",
  },
  foodInfoInner: {
    top: 675,
    left: 108,
    backgroundColor: Color.colorOrangered,
    width: 155,
    height: 40,
  },
  directions1Icon: {
    top: 682,
    left: 117,
  },
  startNavigation: {
    top: 686,
    left: 148,
    color: Color.lightColorBaseTertiaryLight,
    textAlign: "center",
  },
  rectangleView: {
    top: 151,
    left: 94,
    backgroundColor: "#d9d9d9",
    width: 187,
    height: 7,
  },
  foodInfo: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
});

export default FoodInfo;
