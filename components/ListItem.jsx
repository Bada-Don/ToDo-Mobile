import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { UserList, defaultList } from "../assets/data";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ListItem = ({ id, listType, done }) => {
  const [isComplete, setComplete] = useState(false);

  const toggleComplete = (item) => {

    console.log(item.task);
  };

  const data = listType === 0 ? defaultList[id - 1].tasks : UserList[id - 5].tasks;
  const renderOrNot = done && isComplete;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.ListItem}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Pressable onPress={()=>toggleComplete(item)}>
              <Icon
                name={isComplete ? "check-circle-outline" : "circle-outline"}
                color="white"
                size={24}
              />
            </Pressable>
            <Text style={styles.taskTitle}>{item.task}{item.done == true? " (true)": " (false)"}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
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
