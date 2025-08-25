import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const TaskList = ({ Data, scrollEnabled, onPressItem }) => {
  const openTaskList = (item) => {
    if (onPressItem) {
      onPressItem(item.id);
    }
  };

  return (
    <View style={styles.DataSection}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id.toString()}
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
    height: "28%",
    width: "100%",
  },
  Data: {
    flex: 1,
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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    transform: [{ scale: 0.98 }],
  },

  listItemText: {
    fontSize: 20,
    color: "white",
  },
});
