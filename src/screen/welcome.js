import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import { Colors } from "../color/color";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    padding: 20,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Welcome;
