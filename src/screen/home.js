import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Colors } from "../color/color";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstBlock}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/images/RKA.jpeg")}
        />
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondBlock}>
        <Text style={styles.text1}>Welcome to RKA</Text>
        <Text style={styles.text2}>
          Enabling the Endurance Athlete to Acheive the Extraordinary
        </Text>
      </View>
      <View style={styles.lastBlock}>
        <TouchableOpacity style={styles.btn1}>
          <View style={styles.flex}>
            <FontAwesome name="facebook" size={25} color={Colors.fbBlue} />
            <Text style={styles.btnt1}>Continue With Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => props.navigation.navigate("signup")}
        >
          <Text style={styles.btnt2}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: Colors.white,

    padding: 20,

    width: Dimensions.get("window").width,
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text2: {
    color: Colors.grey,
    opacity: 0.6,
    fontSize: 17,
    marginTop: 10,
  },
  tinyLogo: {
    width: 60,
    height: 60,
    marginTop: 10,
  },
  firstBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  login: {
    fontSize: 16,
  },
  secondBlock: {
    height: 300,
    justifyContent: "center",
  },
  btn1: {
    width: "100%",
    height: 65,
    borderWidth: 2,
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.powderBlue,
  },
  btn2: {
    width: "100%",
    height: 65,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: Colors.powderBlue,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "55%",
  },
  btnt2: {
    fontSize: 20,
    color: Colors.white,
  },
  btnt1: {
    color: Colors.powderBlue,
    fontSize: 15,
  },
  lastBlock: {
    width: "100%",
    marginTop: 20,
  },
});

export default Home;
