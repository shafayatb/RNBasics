import { View, TextInput, StyleSheet, Modal, Image } from "react-native";
import CustomButton from "../CustomButton";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../../assets/images/goal.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Cancel"
            handlePress={props.onCancel}
            containeStyles={{
              backgroundColor: "red",
              width: "40%",
              marginRight: 10,
            }}
          />
          <CustomButton
            title="Add Goal"
            handlePress={addGoalHandler}
            containeStyles={{ backgroundColor: "#5e0acc", width: "40%" }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 16
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "white",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default GoalInput;
