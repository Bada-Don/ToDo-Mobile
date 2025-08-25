import Banner from "../components/Banner";
import ListItem from "../components/ListItem";
import NewListModal from "../components/NewListModal.jsx";
import { useState } from "react";
import { UserList, defaultList } from "../assets/data";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { PaperProvider, Portal, FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ListPage = ({ route }) => {
  const navigation = useNavigation();
  const { id, listType } = route.params;
  const data =
    listType === 0 ? defaultList[id - 1].tasks : UserList[id - 6].tasks;

  const [taskList, setTaskList] = useState(data);

  const onToggleStatus = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].done = !updatedTaskList[index].done;
    setTaskList(updatedTaskList);
  };

  const IndexedTaskList = taskList.map((item, index) => ({ ...item, index }));

  const Completed = IndexedTaskList.filter((item) => item.done);
  const inCompleted = IndexedTaskList.filter((item) => !item.done);

  const NewTask = () => {
    console.log("Opening Modal");
    setTaskModalVis(!taskModalVis);
  };

  const addNewTask = (task) => {
    setTaskModalVis(!taskModalVis);
    setTaskList((prevList) => [...prevList, { task: task, done: false }]);
  };

  const closeModal = () => {
    setTaskModalVis(false);
  };

  const [taskModalVis, setTaskModalVis] = useState(false);
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Banner
          bannerImg={require("../assets/blackBanner.jpg")}
          heroText={
            listType === 0 ? defaultList[id - 1].title : UserList[id - 6].title
          }
        />
        <Text style={styles.headerText}>Incomplete</Text>
        <FlatList
          data={inCompleted}
          style={styles.ListItem}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ListItem
              task={item.task}
              onToggle={() => onToggleStatus(item.index)}
              done={item.done}
            />
          )}
        />
        <Text style={styles.headerText}>Completed</Text>
        <FlatList
          data={Completed}
          style={styles.ListItem}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ListItem
              task={item.task}
              onToggle={() => onToggleStatus(item.index)}
              done={item.done}
            />
          )}
        />
        <NewListModal
          visible={taskModalVis}
          onClose={closeModal}
          task={addNewTask}
        />
        <Portal>
          <FAB
            icon="arrow-left"
            style={styles.homeBtn}
            onPress={() => navigation.goBack()}
            color="#ffffffff"
            customSize={40}
          />

          <FAB
            icon="pen-plus"
            style={styles.fab}
            onPress={NewTask}
            color="#000000ff"
            customSize={56}
          />
        </Portal>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default ListPage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#000000",
  },
  homeBtn: {
    position: "absolute",
    margin: 50,
    marginLeft: 20,
    left: 0,
    top: 0,
    borderRadius: 100,
    backgroundColor: "#222222",
  },
  fab: {
    position: "absolute",
    margin: 30,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
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
  ListItem: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 20,
    height: "10%",
  },
  taskSec: {
    height: "4%",
  },
});
