import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Platform,
  Dimensions,
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import EditTask from "./screens/EditTask";
import ListPage from "./screens/ListPage";

export default function App() {
  const [screen, setScreen] = useState("HomeScreen");
  const [id, setId] = useState(1);
  const [listType, setListType] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {/* Content Section - Takes remaining space */}

      <View style={styles.contentSection}>
        {screen === "HomeScreen" && <HomeScreen setScreen={setScreen} setId={setId} setListType={setListType} />}
        {screen === "EditTask" && <EditTask />}
        {screen === "ListPage" && <ListPage setScreen={setScreen} id={id} listType={listType} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  contentSection: {
    flex: 1, // Takes remaining 80% of screen
    width: "100%",
  },
});
