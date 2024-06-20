import { Pressable, StyleSheet, Text, View } from "react-native";
const GoalItem = (props) => {
  return (
    <Pressable
      android_ripple={{ color: "#210644" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => [styles.goalItem, pressed && styles.pressedStyle]}
    >
      <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
  pressedStyle: {
    opacity: 0.5,
  },
});

export default GoalItem;
