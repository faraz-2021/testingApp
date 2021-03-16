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
import Entypo from "react-native-vector-icons/Entypo";

const Signup = (props) => {
  const [text, setText] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(true);
  const [alert, setAlert] = useState(false);
  const [isFocused, setIsfocused] = useState(false);
  const [isFocused1, setIsfocused1] = useState(false);

  const [isFocused2, setIsfocused2] = useState(false);

  const show = () => {
    if (text.length > 0 && mail.length > 0 && password.length > 0) {
      props.navigation.navigate("welcome");
    } else {
      setAlert(true);
    }
  };

  const handleFocus = () => setIsfocused(true);
  const handleBlur = () => setIsfocused(false);
  const handleFocus2 = () => setIsfocused2(true);
  const handleBlur2 = () => setIsfocused2(false);
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
  const labelStyle2 = {
    position: "absolute",
    left: 0,
    top: !isFocused2 && mail.length <= 0 ? 18 : 0,
    fontSize: !isFocused2 && mail.length <= 0 ? 20 : 14,
    color: !isFocused2 ? Colors.lightgray : Colors.lightgray,
    marginLeft: 10,
  };

  return (
    <ScrollView style={styles.container}>
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
          backgroundColor: Colors.sparkBlue,
          width: "100%",
          paddingLeft: 10,
          height: 65,
        }}
      >
        <Text style={labelStyle2}>Email</Text>
        <TextInput
          style={{
            height: 60,
            fontSize: 20,
            width: "100%",
            color: Colors.black,
          }}
          onFocus={handleFocus2}
          onBlur={handleBlur2}
          onChangeText={(e) => setMail(e)}
          value={mail}
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
          backgroundColor: Colors.sparkBlue,
          width: "100%",
        }}
      >
        <View
          style={{
            paddingTop: 10,
            width: "70%",
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
        <View style={{ width: "30%" }}>
          {hide ? (
            <TouchableOpacity
              onPress={() => {
                setHide(false);
                setIsfocused(true);
              }}
              style={styles.show}
            >
              <Entypo name="eye" size={30} color={Colors.grey} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setHide(true);
                setIsfocused(true);
              }}
              style={styles.show}
            >
              <Entypo name="eye-with-line" size={30} color={Colors.grey} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={show}>
        <Text style={styles.btntext}>Create Account</Text>
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
  login: {
    fontSize: 16,
  },
  secondBlock: {
    height: 180,
    justifyContent: "flex-end",
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text2: {
    color: Colors.grey,
    opacity: 0.6,
    fontSize: 19,
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 65,
    marginTop: 15,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: Colors.white,
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
  input1: {
    width: "100%",
    borderWidth: 3,
    height: 65,
    marginTop: 20,
    borderRadius: 10,
    borderColor: Colors.lightgray,
    backgroundColor: Colors.white,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    overflow: "hidden",
  },
  passwordInput: {
    width: "80%",
    height: 60,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: Colors.white,
    marginTop: 15,
  },
  flex: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "55%",
    marginTop: 20,
  },
  Etext1: {
    fontSize: 17,
    color: Colors.red,
  },
  Etext2: {
    fontSize: 17,
  },
  show: {
    height: 60,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default Signup;
