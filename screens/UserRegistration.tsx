import React, { FC, ReactElement, useState } from "react";
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
} from "react-native";
import Parse from "parse/react-native";
import Styles from "../Styles";

export function UserRegistration(props: any) {
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
        <TextInput
          style={styles.input}
          value={username}
          placeholder={"Username"}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize={"none"}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder={"Password"}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button title={"Sign Up"} onPress={() => {}} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});
