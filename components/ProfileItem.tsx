import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import { ProfileItemT } from "../types";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";

const ProfileItem = ({
  age,
  college,
  skills,
  phone,
  email,
  linkedin,
  github,
  location,
  matches,
  name,
}: ProfileItemT) => (
  <View style={styles.containerProfileItem}>
    <View style={styles.matchesProfileItem}>
      <Text style={styles.matchesTextProfileItem}>
        <Icon name="person" size={13} color={WHITE} />{" "}
        <Text style={{ fontSize: 18 }}>{name}</Text>
      </Text>
    </View>

    <Text style={styles.descriptionProfileItem}>
      {age} - {location}
    </Text>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="school" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{college}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="mail" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{email}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="hammer" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>Skills: {skills}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="logo-linkedin" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{linkedin}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="logo-github" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{github}</Text>
    </View>
  </View>
);

export default ProfileItem;
