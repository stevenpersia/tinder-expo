import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";
import NABIL from "../assets/images/nabil.jpg";
import {UserLogOut} from '../services/UserLogOut';

const Profile = () => {


  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={NABIL} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Icon
                name="chevron-back"
                size={20}
                color={WHITE}
                style={styles.topIconLeft}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name="ellipsis-vertical"
                size={20}
                color={WHITE}
                style={styles.topIconRight}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          name={"Nabil Fayak"}
          age={"18"}
          location={"New York"}
          college={"CUNY Baruch"}
          skills={"React, AWS, Express, GCP"}
          phone={"phone"}
          email={"nabilfayak@gmail.com"}
          linkedin={"linkedin.com/in/nabilfayak"}
          github={"github.com/nabilfayak"} matches={""}        />

        <View style={styles.actionsProfile}>
          {/* <TouchableOpacity style={styles.circledButton}>
            <Icon name="ellipsis-horizontal" size={20} color={WHITE} />
          </TouchableOpacity> */}

        <UserLogOut />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
