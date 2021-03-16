import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import { Colors } from "../color/color";

const Login = (props) => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [hide, setHide] = useState(true);
  const [isFocused, setIsfocused] = useState(false);
  const [isFocused1, setIsfocused1] = useState(false);

  const handleFocus = () => setIsfocused(true);
  const handleBlur = () => setIsfocused(false);
  const handleFocus1 = () => setIsfocused1(true);
  const handleBlur1 = () => setIsfocused1(false);

  const labelStyle = {
    position: "absolute",
    left: 0,
    top: !isFocused && password.length <= 0 ? 18 : 0,
    fontSize: !isFocused && password.length <= 0 ? 20 : 14,
    color:
      !isFocused && password.length <= 0 ? Colors.lightgray : Colors.lightgray,
    marginLeft: 10,
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

  const show = () => {
    if (text.length > 0 && password.length > 0) {
      props.navigation.navigate("welcome");
    } else {
      setAlert(true);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstBlock}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/images/RKA.jpeg")}
        />
        <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
          <Text style={styles.login}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondBlock}>
        <Text style={styles.text1}>Sign In</Text>
        <Text style={styles.text2}>
          Enabling the Endurance Athlete to Acheive the Extraordinary
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
            borderColor: Colors.lightgray,
            borderRadius: 10,
            backgroundColor: Colors.white,
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
              color: Colors.black,

              width: "100%",
            }}
            onFocus={handleFocus1}
            onBlur={handleBlur1}
            onChangeText={(e) => setText(e)}
            value={text}
            blurOnSubmit
          />
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
            backgroundColor: Colors.white,
            width: "100%",
          }}
        >
          <View
            style={{
              paddingTop: 10,
              width: "60%",
              paddingLeft: 10,
            }}
          >
            <Text style={labelStyle}>Password</Text>
            <TextInput
              style={{
                height: 60,
                fontSize: 20,
                color: Colors.black,
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={(e) => setPassword(e)}
              value={password}
              secureTextEntry={hide}
              blurOnSubmit
            />
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("forgot")}
            style={styles.forgotbtn}
          >
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={show}>
        <Text style={styles.btntext}>Login</Text>
      </TouchableOpacity>
      {alert ? (
        <View style={styles.flex}>
          <Text style={styles.Etext1}>Error-</Text>
          <Text style={styles.Etext2}>Field's Can't be Empty</Text>
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: Colors.white,
    paddingLeft: 30,
    paddingRight: 30,
    width: Dimensions.get("window").width,
  },
  tinyLogo: {
    width: 60,
    height: 60,
    marginTop: 10,
  },
  firstBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
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
  secondBlock: {
    height: 200,
    justifyContent: "flex-end",
  },
  flex: {
    height: 60,
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
    marginBottom:20
  },
  btntext: {
    fontSize: 20,
    color: Colors.white,
  },
  input1: {
    width: "100%",
    borderWidth: 3,
    height: 65,
    marginTop: 20,
    borderRadius: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 30,
    borderColor: Colors.lightgray,
    overflow: "hidden",
  },
  passwordInput: {
    width: "60%",
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: Colors.white,
    height: 60,
    overflow: "hidden",
  },
  input: {
    width: "100%",
    borderWidth: 3,
    height: 65,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: Colors.lightgray,
    backgroundColor: Colors.white,
    overflow: "hidden",
  },
  forgotText: {
    color: Colors.grey,
    opacity: 0.6,
  },
  login: {
    fontSize: 16,
  },
  forgotbtn: {
    height: 60,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
