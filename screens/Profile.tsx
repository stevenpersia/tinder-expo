import React, { useState } from "react";
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
import { UserLogOut } from "../services/UserLogOut";
import Parse from "parse/react-native";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [skills, setSkills] = useState("");
  const [age, setAge] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const userInfo = (() => {
    Parse.User.currentAsync().then((response) => {
      setUserType(response.attributes.userType);
      setUsername(response.attributes.username);
      setSchool(response.attributes.school);
      setEmail(response.attributes.email);
      setLinkedin(response.attributes.linkedin);
      setGithub(response.attributes.github);
      setSkills(response.attributes.skills);
      setAge(response.attributes.age);
      const stringJson = JSON.stringify(response.attributes.profile_image);
      setImageUrl(JSON.parse(stringJson).url);
    });
  })();

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground
          source={{
            uri: imageUrl ? imageUrl : "a",
          }}
          style={styles.photo}
        >
          <View style={styles.top}>
            {/* <TouchableOpacity>
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
            </TouchableOpacity> */}
          </View>
        </ImageBackground>

        <ProfileItem
          name={username}
          age={age}
          type={userType}
          location={"New York"}
          college={school}
          skills={skills}
          phone={""}
          email={email}
          linkedin={linkedin}
          github={github}
          matches={""}
        />

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
