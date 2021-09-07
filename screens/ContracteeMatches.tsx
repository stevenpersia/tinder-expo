import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Alert,
  Modal,
  Pressable,
  Linking,
} from "react-native";
import { CardItem, Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/contracteeDemo";
import styles, {
  BLACK,
  DARK_GRAY,
  SECONDARY_COLOR,
  WHITE,
} from "../assets/styles";
import IMAGE_01 from "../assets/images/drew.jpg";

const ContracteeMatches = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground
      source={require("../assets/images/bg2.jpg")}
      style={styles.bg}
    >
      <View style={styles.containerMatches}>
        <View style={styles.top}>
          <Text style={styles.title}>Matches</Text>
          {/* <TouchableOpacity>
            <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
          </TouchableOpacity> */}
        </View>

        <FlatList
          numColumns={2}
          data={DEMO}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <CardItem
                image={item.image}
                name={item.name}
                isOnline={item.isOnline}
                hasVariant
              />
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View
                  style={{
                    alignSelf: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                  }}
                >
                  <ImageBackground
                    source={require("../assets/images/bg.png")}
                    style={styles.bg}
                  >
                    <ScrollView style={styles.containerProfile}>
                      <ImageBackground source={IMAGE_01} style={styles.photo}>
                        <View style={styles.top}></View>
                      </ImageBackground>

                      <ProfileItem
                        matches={IMAGE_01}
                        name={"Drew"}
                        age={"20"}
                        location={"New York"}
                        college={"CUNY Hunter College"}
                        skills={"AWS, React, Python, Django, Parse"}
                        phone={"555-555-5555"}
                        email={"alcoves75@gmail.com"}
                        linkedin={"https://www.Linkedin.com/in/andrewhaelee"}
                        github={"https://Github.com/andrewhylee"}
                        type={""}
                      />

                      <View style={styles.actionsProfile}>
                        {/* <TouchableOpacity style={styles.circledButton}>
                                <Icon name="ellipsis-horizontal" size={20} color={WHITE} />
                              </TouchableOpacity> */}

                        <TouchableOpacity
                          style={styles.roundedButton}
                          onPress={() =>
                            Linking.openURL("mailto:alcoves75@gmail.com")
                          }
                        >
                          <Text style={styles.textButton}>Send Email </Text>
                          <Icon name="send" size={20} color={WHITE} />
                        </TouchableOpacity>
                      </View>
                    </ScrollView>
                  </ImageBackground>
                  <TouchableOpacity
                    style={styles.roundedButton}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Icon name="close" size={20} color={WHITE} />
                    <Text style={styles.textButton}>Close</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default ContracteeMatches;
