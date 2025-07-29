import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Banner = ({ bannerImg, heroText }) => {
  return (
    <View style={styles.heroSection}>
      <Image style={styles.bannerImg} source={bannerImg} />
      <Text style={styles.heroText}>{heroText}</Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  heroSection: {
    height: "20%",
    width: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },

  bannerImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },

  heroText: {
    color: "white",
    fontSize: 40, // Reduced from 60 for better fit
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 2,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
