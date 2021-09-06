import { UserRegistration } from "./UserRegistration";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";
import React from "react";
import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { UserRegistration } from "./UserRegistration";
import Styles from "./Styles";

// Your Parse initialization configuration goes here
Parse.setAsyncStorage(AsyncStorage);
const PARSE_APPLICATION_ID = "APPLICATION_ID";
const PARSE_HOST_URL = "HOST_URL";
const PARSE_JAVASCRIPT_ID = "JAVASCRIPT_ID";
Parse.initialize(
  KzecbOsRY2VfTvOKarw57aaaCG3bJVmmvi2ufVbX,
  ULgIx1p6XQNNOkthw9pm16EzPqpX88sVB6AuZIJs
);
Parse.serverURL = "https://parseapi.back4app.com/";

function UserRegistrationScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image
            style={Styles.login_header_logo}
            source={require("./assets/logo-back4app.png")} //we have to get out own logo
          />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>{"CodeMatch"}</Text>
            {" User registration"}
          </Text>
        </View>
        <UserRegistration />
      </SafeAreaView>
    </>
  );
}

function UserLogInScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image
            style={Styles.login_header_logo}
            source={require("./assets/logo-back4app.png")}
          />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>{"CodeMatch"}</Text>
            {" User login"}
          </Text>
        </View>
        <UserLogIn />
      </SafeAreaView>
    </>
  );
}

function HomeScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image
            style={Styles.login_header_logo}
            source={require("./assets/logo-back4app.png")}
          />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {"React Native on Back4App - "}
            </Text>
            {" Home"}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

/*
Your functions here
*/
// Create your main navigator here
const Stack = createStackNavigator();

// Add the stack navigator to your NavigationContainer
// and in it you can add all your app screens in the order you need
// them on your stack
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={UserLogInScreen} />
        <Stack.Screen name="Sign Up" component={UserRegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// Remember to add some styles at the end of your file
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
