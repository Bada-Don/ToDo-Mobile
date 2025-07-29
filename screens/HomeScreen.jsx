import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TaskList from "../components/TaskList.jsx";
import { defaultList, UserList } from "../assets/data.jsx";
import NewListModal from "../components/NewListModal.jsx";
import { FAB, Portal, PaperProvider } from "react-native-paper";
import { useState } from "react";
import Banner from "../components/Banner.jsx";

const HomeScreen = () => {
  const NewTaskList = () => {
    console.log("Opening Modal");
    setTaskModalVis(!taskModalVis);
  };

  const [taskCount, setTaskCount] = useState(9);

  const addTask = (task) => {
    console.log("addTask() called...");
    console.log(task);
    setTaskCount(taskCount + 1);
    UserList.push({
      title: task,
      icon: "shopping",
      color: "#6a6a6aff",
      id: taskCount,
    });
  };

  const closeModal = () => {
    setTaskModalVis(false);
    console.log("Modal Closed");
  };

  const [taskModalVis, setTaskModalVis] = useState(false);
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Banner
          bannerImg={require("../assets/blackBanner.jpg")}
          heroText={"Welcome Harshit"}
        />

        <Text style={styles.headerText}>Your Tasks List</Text>

        <TaskList Data={defaultList} scrollEnabled={false} />

        <View style={styles.horizontalLine} />

        <TaskList Data={UserList} scrollEnabled={true} />

        <NewListModal
          visible={taskModalVis}
          onClose={closeModal}
          task={addTask}
        />

        <Portal>
          <FAB
            icon="pencil-plus"
            style={styles.fab}
            onPress={NewTaskList}
            color="#000000ff"
            customSize={56}
          />
        </Portal>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
    // paddingHorizontal: 10,
  },

  fab: {
    position: "absolute",
    margin: 30,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
  },

  headerText: {
    textAlign: "left",
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
  },

  horizontalLine: {
    borderBottomColor: "#fcfcfc9f",
    borderBottomWidth: 1,
    marginVertical: 20,
    width: "100%",
    alignSelf: "center",
  },
});
