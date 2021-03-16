import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import { Colors } from "../color/color";
import Ant from "react-native-vector-icons/AntDesign";

const ForgotPassword = (props) => {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(false);
  const [isFocused1, setIsfocused1] = useState(false);

  const handleFocus1 = () => setIsfocused1(true);
  const handleBlur1 = () => setIsfocused1(false);

  const show = () => {
    if (text.length > 0) {
      props.navigation.navigate("Login");
    } else {
      setAlert(true);
    }
  };

  const labelStyle1 = {
    position: "absolute",
    left: 0,
    top: !isFocused1 && text.length <= 0 ? 18 : 0,
    fontSize: !isFocused1 && text.length <= 0 ? 20 : 14,
    color:
      !isFocused1 && text.length <= 0 ? Colors.lightgray : Colors.lightgray,
    marginLeft: 10,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={{ marginLeft: 6 }}
        >
          <Ant name="arrowleft" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
          <Text style={styles.login}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.secondBlock}>
          <Text style={styles.text1}>Forgot Your Password?</Text>
          <Text style={styles.text2}>
            Enter your email to reset your password
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
            borderColor: Colors.lightgray,
            borderRadius: 10,
            backgroundColor: Colors.sparkBlue,
            width: "100%",
            paddingLeft: 10,
            height: 65,
          }}
        >
          <Text style={labelStyle1}>Full Name</Text>
          <TextInput
            style={{
              height: 60,
              fontSize: 20,
              color: "#000",
              width: "100%",
            }}
            onFocus={handleFocus1}
            onBlur={handleBlur1}
            onChangeText={(e) => setText(e)}
            value={text}
            blurOnSubmit
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={show}>
          <Text style={styles.btntext}>Reset Password</Text>
        </TouchableOpacity>
        {alert ? (
          <View style={styles.flex}>
            <Text style={styles.Etext1}>Error-</Text>
            <Text style={styles.Etext2}>Email Can't be Empty</Text>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: Colors.white,
    width: Dimensions.get("window").width,
  },
  header: {
    width: "100%",
    paddingLeft: 10,
    paddingRight: 15,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  text1: {
    fontSize: 27,
    fontWeight: "bold",
  },
  textt1: {
    fontSize: 20,
    fontWeight: "bold",
  },

  text2: {
    color: Colors.grey,
    opacity: 0.6,
    fontSize: 19,
    marginTop: 10,
  },
  secondBlock: {
    height: 170,
    justifyContent: "flex-end",
  },
  body: {
    backgroundColor: Colors.white,
    width: Dimensions.get("window").width,
    paddingLeft: 30,
    paddingRight: 30,
  },
  input: {
    width: "100%",
    borderWidth: 2,
    height: 65,
    marginTop: 30,
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: Colors.lightgray,
    backgroundColor: Colors.white,
    overflow: "hidden",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "55%",
    marginTop: 15,
  },
  Etext1: {
    fontSize: 17,
    color: Colors.red,
  },
  Etext2: {
    fontSize: 17,
  },
  btn: {
    width: "100%",
    height: 65,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.powderBlue,
  },
  btntext: {
    fontSize: 20,
    color: Colors.white,
  },
  login: {
    fontSize: 16,
    marginRight: 13,
  },
});

export default ForgotPassword;
