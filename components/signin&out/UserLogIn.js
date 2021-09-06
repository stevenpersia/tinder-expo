import React, { FC, ReactElement, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Parse from "parse/react-native";
import Styles from "./Styles";
import { useNavigation } from "@react-navigation/native";

export const UserLogIn = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const doUserLogIn = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    return await Parse.User.logIn(usernameValue, passwordValue)
      .then(async (loggedInUser) => {
        // logIn returns the corresponding ParseUser object
        Alert.alert(
          "Success!",
          `User ${loggedInUser.get("username")} has successfully signed in!`
        );
        // To verify that this is in fact the current user, currentAsync can be used
        const currentUser = await Parse.User.currentAsync();
        console.log(loggedInUser === currentUser);
        navigation.navigate("Home");
        return true;
      })
      .catch((error) => {
        // Error can be caused by wrong parameters or lack of Internet connection
        Alert.alert("Error!", error.message);
        return false;
      });
  };

  return (
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
        <View style={Styles.login_social_buttons}>
          <TouchableOpacity>
            <View
              style={[Styles.login_social_button, Styles.login_social_facebook]}
            >
              <Image
                style={Styles.login_social_icon}
                source={require("./assets/icon-facebook.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.login_social_button}>
              <Image
                style={Styles.login_social_icon}
                source={require("./assets/icon-google.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.login_social_button}>
              <Image
                style={Styles.login_social_icon}
                source={require("./assets/icon-apple.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
