import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Matches, Messages, Profile } from "./screens";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./assets/styles";
import TabBarIcon from "./components/TabBarIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";
import { UserLogin } from "./screens/UserLogIn";
import { UserRegistration } from "./screens/UserRegistration";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Your Parse initialization configuration goes here
Parse.setAsyncStorage(AsyncStorage);
const PARSE_APPLICATION_ID = "APPLICATION_ID";
const PARSE_HOST_URL = "HOST_URL";
const PARSE_JAVASCRIPT_ID = "JAVASCRIPT_ID";
Parse.initialize(
  "KzecbOsRY2VfTvOKarw57aaaCG3bJVmmvi2ufVbX",
  "ULgIx1p6XQNNOkthw9pm16EzPqpX88sVB6AuZIJs"
);
Parse.serverURL = "https://parseapi.back4app.com/";

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={UserLogin} />
      <Stack.Screen name="SignUp" component={UserRegistration} />
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
                backgroundColor: WHITE,
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
                    iconName="heart"
                    text="Matches"
                  />
                ),
              }}
            />

            <Tab.Screen
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
            />

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

export default App;
