import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const NewListModal = ({ visible, onClose, task }) => {
  const [input, setInput] = useState("");
  const handleInput = (text) => {
    setInput(text);
  };
  const handleSubmit = () => {
    // console.log(input);
    task(input)
    setInput("")
    onClose()
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.head}>
            <Text style={styles.modalText}>New List</Text>
          </View>
          <TextInput
            textColor="white"
            style={styles.TextInput}
            value={input}
            onChangeText={handleInput}
            placeholder="Type something..."
          />
          <View style={styles.btnContainer}>
            <Button
              icon={"check"}
              buttonColor="white"
              textColor="black"
              mode="contained"
              onPress={handleSubmit}
              disabled={input==''}
            >
              Submit
            </Button>
            <Button
              icon={"close"}
              onPress={onClose}
              buttonColor="transparent"
              textColor="white"
              mode="outlined"
            >
              Cancel
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewListModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  modalView: {
    width: "80%",
    backgroundColor: "#1a1a1aff",
    borderRadius: 10,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    // width: "100%",
    // backgroundColor: "red",
  },
  TextInput: {
    backgroundColor: "transparent",
    width: "100%",
    color: "white",
  },
  head: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  btnContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    // width: "100%",
    gap: 20,
    justifyContent: "flex-start",
  },
});
