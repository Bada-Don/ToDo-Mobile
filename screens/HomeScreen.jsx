import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TaskList from "../components/TaskList";
import { defaultList, UserList } from "../assets/data";
import NewListModal from "../components/NewListModal";
import { FAB, Portal, PaperProvider } from "react-native-paper";
import { useState } from "react";
import Banner from "../components/Banner";

const HomeScreen = ({ navigation }) => {
  const NewTaskList = () => {
    console.log("Opening Modal");
    setTaskModalVis(!taskModalVis);
  };
  const handleNavigate = (id, listType) => {
    navigation.navigate("ListPage", { id, listType });
  };

  const [taskCount, setTaskCount] = useState(9);

  const addTaskList = (task) => {
    console.log("addTaskList() called...");
    console.log(task);
    setTaskCount(taskCount + 1);
    UserList.push({
      title: task,
      icon: "shopping",
      color: "#6a6a6aff",
      id: taskCount,
      tasks: [],
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

        <TaskList
          Data={defaultList}
          onPressItem={(id) => handleNavigate(id, 0)}
          scrollEnabled={false}
        />

        <View style={styles.horizontalLine} />

        <TaskList
          Data={UserList}
          onPressItem={(id) => handleNavigate(id, 1)}
          scrollEnabled={true}
        />

        <NewListModal
          visible={taskModalVis}
          onClose={closeModal}
          task={addTaskList}
        />

        <Portal>
          <FAB
            icon="playlist-plus"
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
