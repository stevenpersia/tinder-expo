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

const Profile = () => {
  const {
    age,
    image,
    college,
    skills,
    phone,
    email,
    linkedin,
    github,
    location,
    match,
    name,
  } = DEMO[7];

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
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
          matches={match}
          name={name}
          age={age}
          location={location}
          college={college}
          skills={skills}
          phone={phone}
          email={email}
          linkedin={linkedin}
          github={github}
        />

        <View style={styles.actionsProfile}>
          {/* <TouchableOpacity style={styles.circledButton}>
            <Icon name="ellipsis-horizontal" size={20} color={WHITE} />
          </TouchableOpacity> */}

          <TouchableOpacity style={styles.roundedButton}>
            <Icon name="settings" size={20} color={WHITE} />
            <Text style={styles.textButton}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
