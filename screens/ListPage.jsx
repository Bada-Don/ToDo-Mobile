import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Banner from "../components/Banner";
import { UserList, defaultList } from "../assets/data";
import ListItem from "../components/ListItem";

const ListPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Banner
        bannerImg={require("../assets/blackBanner.jpg")}
        heroText={"List Page"}
      />
      <Text style={styles.headerText}>Incomplete</Text>
     <ListItem id={1} listType={0} />
      <Text style={styles.headerText}>Completed</Text>
    </SafeAreaView>
  );
};

export default ListPage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  text: {
    color: "white",
  },
  headerText: {
    textAlign: "left",
    color: "#cccc",
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
  },
  ListItem:{
    color: "white",
    fontSize: 20,

  }
});
