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
import NewTask from "./screens/NewTask";

export default function App() {
  const [screen, setScreen] = useState("HomeScreen");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
      
      {/* Hero Section - Fixed at top */}
      <View style={styles.heroSection}>
        <Image
          style={styles.bannerImg}
          source={require("./assets/blackBanner.jpg")}
        />
        <Text style={styles.heroText}>ToDo App</Text>
      </View>

      {/* Content Section - Takes remaining space */}
      <View style={styles.contentSection}>
        {screen === "HomeScreen" && <HomeScreen />}
        {screen === "EditTask" && <EditTask />}
        {screen === "NewTask" && <NewTask />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  
  heroSection: {
    height: "20%",
    width: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  
  bannerImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  
  heroText: {
    color: "white",
    fontSize: 48, // Reduced from 60 for better fit
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  
  contentSection: {
    flex: 1, // Takes remaining 80% of screen
    width: "100%",
  },
});