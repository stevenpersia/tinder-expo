import 'react-native-gesture-handler';
import React from 'react';
import {Image, Alert, SafeAreaView, StatusBar, Text, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Matches, Messages, Profile } from "./screens";
import ContracteeMatches  from "./screens/ContracteeMatches"
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./assets/styles";
import TabBarIcon from "./components/TabBarIcon";
import {UserRegistration} from './screens/UserRegistration';
import {UserLogIn} from './screens/UserLogIn';
import {UserLogOut} from './services/UserLogOut';
//  import {HelloUser} from './screensHelloUser';
import Styles from './Styles';

const Tab = createBottomTabNavigator();

// Your Parse initialization configuration goes here
Parse.setAsyncStorage(AsyncStorage);
const PARSE_APPLICATION_ID: string = 'KzecbOsRY2VfTvOKarw57aaaCG3bJVmmvi2ufVbX';
const PARSE_HOST_URL: string = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_ID: string = 'ULgIx1p6XQNNOkthw9pm16EzPqpX88sVB6AuZIJs';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID);
Parse.serverURL = PARSE_HOST_URL;

// Wrap your old app screen in a separate function, so you can create a screen inside the navigator
// You can also declare your screens in a separate file, export and import here to reduce some clutter
function UserRegistrationScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          {/* <Image
            style={Styles.login_header_logo}
            source={require('./assets/logo-back4app.png')}
          /> */}
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'CodeMatch - '}
            </Text>
            {' User registration'}
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
          {/* <Image
            style={Styles.login_header_logo}
            source={require('./assets/logo-back4app.png')}
          /> */}
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'CodeMatch - '}
            </Text>
            {' User login'}
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
          {/* <Image
            style={Styles.login_header_logo}
            source={require('./assets/logo-back4app.png')}
          /> */}
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'CodeMatch - '}
            </Text>
            {' Home'}
          </Text>
        </View>
        {/* <HelloUser /> */}
        <UserLogOut />
      </SafeAreaView>
    </>
  );
}

// This method instantiates and creates a new StackNavigator
const Stack = createStackNavigator();

// Add the stack navigator and inside it you can insert all your app screens, in the desired order
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={UserLogInScreen} />
        <Stack.Screen name="Sign Up" component={UserRegistrationScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen
      name="Tab"
      options={{ headerShown: false, animationEnabled: false }}
    >
      {() => (
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            activeTintColor: PRIMARY_COLOR,
            inactiveTintColor: DARK_GRAY,
            labelStyle: {
              fontSize: 14,
              textTransform: "uppercase",
              paddingTop: 10,
            },
            style: {
              backgroundColor: BLACK,
              borderTopWidth: 0,
              marginBottom: 0,
              shadowOpacity: 0.05,
              shadowRadius: 10,
              shadowColor: BLACK,
              shadowOffset: { height: 0, width: 0 },
            },
          }}
        >
          <Tab.Screen
            name="Explore"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  iconName="search"
                  text="Explore"
                />
              ),
            }}
          />

          <Tab.Screen
            name="Matches"
            component={Matches}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  iconName="flash"
                  text="Matches"
                />
              ),
            }}
          />

          {/* <Tab.Screen
            name="Chat"
            component={Messages}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  iconName="chatbubble"
                  text="Chat"
                />
              ),
            }}
          /> */}

          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  iconName="person"
                  text="Profile"
                />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </Stack.Screen>
    <Stack.Screen
      name="LessTabs"
      options={{ headerShown: false, animationEnabled: false }}
    >
      {() => (
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            activeTintColor: PRIMARY_COLOR,
            inactiveTintColor: DARK_GRAY,
            labelStyle: {
              fontSize: 14,
              textTransform: "uppercase",
              paddingTop: 10,
            },
            style: {
              backgroundColor: BLACK,
              borderTopWidth: 0,
              marginBottom: 0,
              shadowOpacity: 0.05,
              shadowRadius: 10,
              shadowColor: BLACK,
              shadowOffset: { height: 0, width: 0 },
            },
          }}
        >
          {/* <Tab.Screen
            name="Explore"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  iconName="search"
                  text="Explore"
                />
              ),
            }}
          /> */}

          <Tab.Screen
            name="Matches"
            component={ContracteeMatches}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  iconName="flash"
                  text="Matches"
                />
              ),
            }}
          />

          {/* <Tab.Screen
            name="Chat"
            component={Messages}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  iconName="chatbubble"
                  text="Chat"
                />
              ),
            }}
          /> */}

          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  iconName="person"
                  text="Profile"
                />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// import "react-native-gesture-handler";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Home, Matches, Messages, Profile } from "./screens";
// import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./assets/styles";
// import TabBarIcon from "./components/TabBarIcon";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Parse from "parse/react-native";
// import { UserLogin } from "./screens/UserLogIn";
// import { UserRegistration } from "./screens/UserRegistration";

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// // Your Parse initialization configuration goes here
// Parse.setAsyncStorage(AsyncStorage);
// const PARSE_APPLICATION_ID = "APPLICATION_ID";
// const PARSE_HOST_URL = "HOST_URL";
// const PARSE_JAVASCRIPT_ID = "JAVASCRIPT_ID";
// Parse.initialize(
//   "KzecbOsRY2VfTvOKarw57aaaCG3bJVmmvi2ufVbX",
//   "ULgIx1p6XQNNOkthw9pm16EzPqpX88sVB6AuZIJs"
// );
// Parse.serverURL = "https://parseapi.back4app.com/";

// const App = () => (
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="Login" component={UserLogin} />
//       <Stack.Screen name="SignUp" component={UserRegistration} />
    // <Stack.Screen
    //   name="Tab"
    //   options={{ headerShown: false, animationEnabled: false }}
    // >
    //   {() => (
    //     <Tab.Navigator
    //       tabBarOptions={{
    //         showLabel: false,
    //         activeTintColor: PRIMARY_COLOR,
    //         inactiveTintColor: DARK_GRAY,
    //         labelStyle: {
    //           fontSize: 14,
    //           textTransform: "uppercase",
    //           paddingTop: 10,
    //         },
    //         style: {
    //           backgroundColor: WHITE,
    //           borderTopWidth: 0,
    //           marginBottom: 0,
    //           shadowOpacity: 0.05,
    //           shadowRadius: 10,
    //           shadowColor: BLACK,
    //           shadowOffset: { height: 0, width: 0 },
    //         },
    //       }}
    //     >
    //       <Tab.Screen
    //         name="Explore"
    //         component={Home}
    //         options={{
    //           tabBarIcon: ({ focused }) => (
    //             <TabBarIcon
    //               focused={focused}
    //               iconName="search"
    //               text="Explore"
    //             />
    //           ),
    //         }}
    //       />

    //       <Tab.Screen
    //         name="Matches"
    //         component={Matches}
    //         options={{
    //           tabBarIcon: ({ focused }) => (
    //             <TabBarIcon
    //               focused={focused}
    //               iconName="heart"
    //               text="Matches"
    //             />
    //           ),
    //         }}
    //       />

    //       <Tab.Screen
    //         name="Chat"
    //         component={Messages}
    //         options={{
    //           tabBarIcon: ({ focused }) => (
    //             <TabBarIcon
    //               focused={focused}
    //               iconName="chatbubble"
    //               text="Chat"
    //             />
    //           ),
    //         }}
    //       />

    //       <Tab.Screen
    //         name="Profile"
    //         component={Profile}
    //         options={{
    //           tabBarIcon: ({ focused }) => (
    //             <TabBarIcon
    //               focused={focused}
    //               iconName="person"
    //               text="Profile"
    //             />
    //           ),
    //         }}
    //       />
    //     </Tab.Navigator>
    //   )}
    // </Stack.Screen>
//     </Stack.Navigator>
//   </NavigationContainer>
// );

// export default App;
