import React, { FC, ReactElement, useState } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Parse from "parse/react-native";
import Styles from "../Styles";

export function UserLogin(props: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>{"CodeMatch"}</Text>
            {" User login"}
          </Text>
        </View>
        <View style={Styles.login_wrapper}>
          <View style={Styles.form}>
            <TextInput
              style={Styles.form_input}
              value={username}
              placeholder={"Username"}
              onChangeText={(text) => setUsername(text)}
              autoCapitalize={"none"}
              keyboardType={"email-address"}
            />
            <TextInput
              style={Styles.form_input}
              value={password}
              placeholder={"Password"}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={() => {}}>
              <View style={Styles.button}>
                <Text style={Styles.button_label}>{"Sign in"}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={Styles.login_social}>
            <View style={Styles.login_social_separator}>
              <View style={Styles.login_social_separator_line} />
              <Text style={Styles.login_social_separator_text}>{"or"}</Text>
              <View style={Styles.login_social_separator_line} />
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <View style={Styles.button}>
                <Text style={Styles.button_label}>{"Sign Up"}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
