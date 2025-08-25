import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ListItem = ({ task, done, onToggle }) => {
  const [isComplete, setComplete] = useState(done);

  return (
    <View style={styles.taskContainer}>
      <Pressable onPress={onToggle}>
        <Icon
          name={isComplete ? "check-circle-outline" : "circle-outline"}
          color="white"
          size={24}
        />
      </Pressable>
      <Text style={styles.taskTitle}>{task}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  taskTitle: {
    color: "white",
    fontSize: 20,
  },
  taskContainer: {
    backgroundColor: "#222222",
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
