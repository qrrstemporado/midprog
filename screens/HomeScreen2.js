import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const HomeScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeScreen2}>
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
        <View style={[styles.newsParent, styles.newsParentLayout]}>
          <Text style={[styles.news, styles.newsTypo]}>Nearby</Text>
          <Image
            style={styles.fluentlocation12FilledIcon}
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
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator1, styles.groupInnerLayout]} />
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
            <Text style={[styles.oxfordStreet, styles.openTypo]}>
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
        source={require("../assets/iphone-x-or-newer.png")}
      />
      <View style={styles.homeScreen2Inner}>
        <ScrollView
          style={styles.groupParent}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={[styles.rectangleGroup, styles.groupPosition]}>
            <View style={styles.groupChildShadowBox} />
            <Image
              style={[styles.unsplashtg9egrhasxeIcon, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/unsplashtg9egrhasxe.png")}
            />
            <Text style={[styles.muglaiFood, styles.open1Typo]}>
              Muglai Food
            </Text>
            <View style={[styles.rectangleContainer, styles.groupItemLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Text style={[styles.text, styles.textClr]}>4.3</Text>
            </View>
            <View style={styles.openParent}>
              <Text style={[styles.open, styles.textTypo]}>Open</Text>
              <Image
                style={[styles.groupInner, styles.groupInnerLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1.png")}
              />
            </View>
            <View
              style={[
                styles.atulGroveRdAtulGroveRoadParent,
                styles.atulPosition,
              ]}
            >
              <Text style={[styles.atulGroveRd, styles.atulTypo]}>
                Atul Grove Rd, Atul Grove Road, Janpath, HC Mathur Lane, New
                Delhi, Delhi
              </Text>
              <Image
                style={[styles.mapIcon, styles.mapIconPosition]}
                contentFit="cover"
                source={require("../assets/map.png")}
              />
            </View>
            <Pressable
              style={[styles.groupPressable, styles.rectangleViewLayout]}
              onPress={() => navigation.navigate("FoodInfo")}
            >
              <View
                style={[styles.rectangleView, styles.rectangleViewLayout]}
              />
              <Text style={[styles.open1, styles.textClr]}>Open</Text>
            </Pressable>
          </View>
          <View style={[styles.groupView, styles.groupPosition]}>
            <View style={styles.groupChildShadowBox} />
            <Image
              style={[styles.unsplashtg9egrhasxeIcon, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/unsplashtgwehsscluq.png")}
            />
            <Text style={[styles.manasStore, styles.open1Typo]}>
              Manas Store
            </Text>
            <View style={[styles.rectangleContainer, styles.groupItemLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Text style={[styles.text, styles.textClr]}>4.3</Text>
            </View>
            <View style={styles.openParent}>
              <Text style={[styles.open, styles.textTypo]}>Open</Text>
              <Image
                style={[styles.groupInner, styles.groupInnerLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1.png")}
              />
            </View>
            <View
              style={[
                styles.atulGroveRdAtulGroveRoadGroup,
                styles.atulPosition,
              ]}
            >
              <Text style={styles.atulGroveRd1}>
                Atul Grove Rd, Atul Grove Road, Janpath, HC Mathur Lane, New
                Delhi, Delhi
              </Text>
              <Image
                style={styles.mapIcon1}
                contentFit="cover"
                source={require("../assets/map.png")}
              />
            </View>
            <View style={[styles.groupPressable, styles.rectangleViewLayout]}>
              <View
                style={[styles.rectangleView, styles.rectangleViewLayout]}
              />
              <Text style={[styles.open1, styles.textClr]}>Open</Text>
            </View>
          </View>
          <View style={[styles.rectangleParent3, styles.groupPosition]}>
            <View style={styles.groupChildShadowBox} />
            <Image
              style={[styles.unsplashtg9egrhasxeIcon, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/unsplashqsyxyswv3nu.png")}
            />
            <Text style={[styles.manasStore, styles.open1Typo]}>
              Muglai Food
            </Text>
            <View style={[styles.rectangleContainer, styles.groupItemLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Text style={[styles.text, styles.textClr]}>4.3</Text>
            </View>
            <View style={styles.openParent}>
              <Text style={[styles.open, styles.textTypo]}>Open</Text>
              <Image
                style={[styles.groupInner, styles.groupInnerLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1.png")}
              />
            </View>
            <View
              style={[
                styles.atulGroveRdAtulGroveRoadContainer,
                styles.atulPosition,
              ]}
            >
              <Text style={[styles.atulGroveRd2, styles.atulTypo]}>
                Atul Grove Rd, Atul Grove Road, Janpath, HC Mathur Lane, New
                Delhi, Delhi
              </Text>
              <Image
                style={styles.fluentlocation12FilledIcon2}
                contentFit="cover"
                source={require("../assets/fluentlocation12filled3.png")}
              />
              <Image
                style={[styles.mapIcon2, styles.mapIconPosition]}
                contentFit="cover"
                source={require("../assets/map.png")}
              />
            </View>
            <View style={[styles.groupPressable, styles.rectangleViewLayout]}>
              <View
                style={[styles.rectangleView, styles.rectangleViewLayout]}
              />
              <Text style={[styles.open1, styles.textClr]}>Open</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newsParentLayout: {
    height: 40,
    position: "absolute",
  },
  newsTypo: {
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
  groupInnerLayout: {
    height: 5,
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
  },
  openTypo: {
    color: Color.gray2,
    textAlign: "left",
    fontFamily: FontFamily.meeraInimaiRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  groupPosition: {
    width: 130,
    top: 0,
    position: "absolute",
  },
  open1Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.meeraInimaiRegular,
  },
  groupItemLayout: {
    width: 20,
    height: 13,
    position: "absolute",
  },
  textClr: {
    color: Color.lightColorBaseTertiaryLight,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_4xs,
    top: 0,
  },
  atulPosition: {
    height: 39,
    top: 137,
    position: "absolute",
  },
  atulTypo: {
    width: 103,
    fontSize: FontSize.size_5xs,
    color: Color.gray2,
    textAlign: "left",
    fontFamily: FontFamily.meeraInimaiRegular,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  mapIconPosition: {
    bottom: "76.92%",
    top: "2.56%",
    height: "20.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewLayout: {
    width: 100,
    height: 26,
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
  radar1: {
    left: 50,
    top: 14,
  },
  icon1: {
    opacity: 0.25,
  },
  philippinePeso1: {
    left: 307,
    top: 17,
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
  },
  homeIndicator: {
    top: 778,
    width: 375,
    height: 34,
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
    left: 27,
    top: 173,
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
    marginTop: -12,
    top: "50%",
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
    position: "absolute",
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
  groupChildShadowBox: {
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    width: 130,
    height: 205,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
  unsplashtg9egrhasxeIcon: {
    borderRadius: Border.br_5xs,
    height: 93,
    left: 0,
  },
  muglaiFood: {
    color: Color.gray1,
    left: 30,
    top: 96,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.red,
    height: 13,
    left: 0,
    top: 0,
  },
  text: {
    left: 4,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 13,
    fontSize: FontSize.size_4xs,
    top: 0,
    height: 13,
  },
  rectangleContainer: {
    top: 118,
    left: 100,
    height: 13,
  },
  open: {
    left: 9,
    color: Color.gray2,
    textAlign: "left",
    fontFamily: FontFamily.meeraInimaiRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  groupInner: {
    top: 3,
    width: 5,
    left: 0,
  },
  openParent: {
    top: 120,
    width: 30,
    height: 15,
    left: 10,
    position: "absolute",
  },
  atulGroveRd: {
    left: 13,
    width: 103,
  },
  mapIcon: {
    width: "5.17%",
    right: "94.83%",
  },
  atulGroveRdAtulGroveRoadParent: {
    left: 7,
    width: 116,
  },
  rectangleView: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorOrangered,
    left: 0,
    top: 0,
  },
  open1: {
    top: 6,
    left: 33,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.meeraInimaiRegular,
  },
  groupPressable: {
    left: 15,
    top: 173,
  },
  rectangleGroup: {
    height: 205,
    left: 0,
  },
  manasStore: {
    color: Color.lightColorBasePrimaryDark,
    left: 30,
    top: 96,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  atulGroveRd1: {
    width: 104,
    fontSize: FontSize.size_5xs,
    left: 13,
    color: Color.gray2,
    textAlign: "left",
    fontFamily: FontFamily.meeraInimaiRegular,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  mapIcon1: {
    width: "5.13%",
    top: "7.69%",
    right: "94.87%",
    bottom: "71.79%",
    height: "20.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  atulGroveRdAtulGroveRoadGroup: {
    width: 117,
    left: 10,
  },
  groupView: {
    left: 142,
    height: 205,
  },
  atulGroveRd2: {
    left: 12,
  },
  fluentlocation12FilledIcon2: {
    left: 290,
    width: 11,
    display: "none",
    top: 137,
    height: 11,
    position: "absolute",
    overflow: "hidden",
  },
  mapIcon2: {
    width: "5.22%",
    right: "94.78%",
  },
  atulGroveRdAtulGroveRoadContainer: {
    width: 115,
    left: 10,
  },
  rectangleParent3: {
    left: 284,
    height: 205,
  },
  groupParent: {
    maxHeight: 205,
    height: 205,
    left: 0,
    top: 0,
    position: "absolute",
    width: "100%",
  },
  homeScreen2Inner: {
    top: 531,
    left: 75,
    width: 414,
    height: 205,
    position: "absolute",
  },
  homeScreen2: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
});

export default HomeScreen2;
