import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import uuid from "react-native-uuid";
import { Button } from "react-native-paper";

const TaskList = ({ Data, scrollEnabled, setScreen, setId, setListType }) => {
  const openTaskList = (item) => {
    console.log(setScreen);
    console.log(item.id);
    console.log("Open Task List");
    console.log(scrollEnabled === true ? "UserList" : "DefaultList")
    setId(item.id);
    setListType(scrollEnabled === true ? 1 : 0);
    setScreen("ListPage")
  };
  return (
    <View style={styles.DataSection}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id.toString()} // Add this line
        style={styles.Data}
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.listItem,
              pressed && styles.listItemPressed,
            ]}
            onPress={() => openTaskList(item)}
          >
            <Icon name={item.icon} color={item.color} size={24} />
            <Text style={styles.listItemText}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  DataSection: {
    height: "28%", // This allows the section to take remaining space
    width: "100%",
  },
  Data: {
    flex: 1, // Added flex to ensure content is scrollable
    backgroundColor: "transparent",
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    gap: 20,
  },

  listItemPressed: {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Light overlay when pressed
    transform: [{ scale: 0.98 }], // Slightly shrink when pressed
  },

  listItemText: {
    fontSize: 20,
    color: "white",
  },
});
