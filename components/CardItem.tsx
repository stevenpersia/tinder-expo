import React, { useState, Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import Icon from "./Icon";
import { CardItemT } from "../types";
import styles, {
  DISLIKE_ACTIONS,
  FLASH_ACTIONS,
  LIKE_ACTIONS,
  STAR_ACTIONS,
  WHITE,
} from "../assets/styles";


const CardItem = ({
  description,
  hasActions,
  hasVariant,
  image,
  isOnline,
  matches,
  name,
}: CardItemT) => {
  // Custom styling
  const fullWidth = Dimensions.get("window").width;


  const imageStyle = [
    {
      borderRadius: 8,
      width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: hasVariant ? 170 : 350,
      margin: hasVariant ? 0 : 20,
    },
  ];

  const nameStyle = [
    {
      paddingTop: hasVariant ? 10 : 15,
      paddingBottom: hasVariant ? 5 : 7,
      color: "#edf2f4",
      fontSize: hasVariant ? 15 : 30,
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [accessibilityVisible, setAccessibilityVisible] = useState(false);

  return (
    <>
      <View style={styles.containerCardItem}>
        {/* IMAGE */}
        <Image source={image} style={imageStyle} />

        {/* MATCHES */}
        {matches && (
          <View style={styles.matchesCardItem}>
            <Text style={styles.matchesTextCardItem}>
              <Icon name="heart" color={WHITE} size={13} /> {matches}% Match!
            </Text>
          </View>
        )}

        {/* NAME */}
        <Text style={nameStyle}>{name}</Text>

        {/* DESCRIPTION */}
        {description && (
          <Text style={styles.descriptionCardItem}>{description}</Text>
        )}

        {/* STATUS */}
        {!description && (
          <View style={styles.status}>
            <View style={isOnline ? styles.online : styles.offline} />
            <Text style={styles.statusText}>
              {isOnline ? "Online" : "Offline"}
            </Text>
          </View>
        )}

        {/* ACTIONS */}
        {hasActions && (
          <View style={styles.actionsCardItem}>
            {/* <TouchableOpacity style={styles.miniButton}>
              <Icon name="star" color={STAR_ACTIONS} size={14} />
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)} >
              <Icon name="code" color={'#000'} size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => setAccessibilityVisible(true)} >
              <MaterialIcons name="accessibility" color={DISLIKE_ACTIONS} size={25} />
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.miniButton}>
              <Icon name="flash" color={FLASH_ACTIONS} size={14} />
            </TouchableOpacity> */}
          </View>
        )}
      </View>


      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}> Technical Skills    {'\n'}  {'\n'}  Bash, Git, Kotlin, Perl, Ruby, Java</Text>
              <Pressable
                // style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
              <Icon name="close" color={LIKE_ACTIONS} size={35} />

                {/* <Text style={styles.textStyle}>Hide Modal</Text> */}
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          // style={[styles.modalButton, styles.buttonOpen]}
          // onPress={() => setModalVisible(true)}
        >
          {/* <Text style={styles.textStyle}>Show Modal</Text> */}
        </Pressable>
      </View>



          {/* Accessibility */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={accessibilityVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setAccessibilityVisible(!accessibilityVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}> Soft Skills    {'\n'}  {'\n'}  Interpersonal, Teamwork, Creativity, Problem Solving, Critical Thinking </Text>
              <Pressable
                // style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setAccessibilityVisible(!accessibilityVisible)}
              >
              <Icon name="close" color={LIKE_ACTIONS} size={35} />

                {/* <Text style={styles.textStyle}>Hide Modal</Text> */}
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          // style={[styles.modalButton, styles.buttonOpen]}
          // onPress={() => setModalVisible(true)}
        >
          {/* <Text style={styles.textStyle}>Show Modal</Text> */}
        </Pressable>
      </View>




      
    </>
  );
};



export default CardItem;

