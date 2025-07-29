import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { UserList, defaultList } from "../assets/data";

const ListItem = ({ id, listType }) => {

  const [isComplete, setComplete] = useState(false);

  return (
    <View style={styles.container}>
      {listType === 0 ? (
        <FlatList
          keyExtractor={(item, index) => {
            index.toString();
          }}
          data={defaultList[id - 1].tasks}
          style={styles.ListItem}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              
              <Text style={styles.taskTitle}>{item}</Text>
            </View>
          )}
        />
      ) : (
        <FlatList
          data={UserList[id - 5]}
          style={styles.ListItem}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskTitle}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container:{
    display: "flex",
    justifyContent: "center",
    padding: 20,

    
  },
  taskTitle: {
    color: "white",
    fontSize: 20,
  },

  taskContainer:{
    backgroundColor: "#222222",
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,


  }, 

});
