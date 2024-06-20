import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { globalStyles } from "../../components/Styles";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Text,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import GoalItem from "../../components/goalapp/GoalItem";
import GoalInput from "../../components/goalapp/GoalInput";

const GoalApp = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <SafeAreaView style={[globalStyles.container, styles.goalAppContainer]}>
      <GoalInput
        showModal={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <Text style={[styles.headerText]}>GoalApp</Text>
      <CustomButton
        title="Add New Goal"
        handlePress={startAddGoalHandler}
        containeStyles={{ backgroundColor: "#a065ec", width: "85%" }}
      />
      <View style={styles.goalsContainer}>
      <FlatList
        data={courseGoals}
        keyExtractor={(itemData) => itemData.id}
        renderItem={(itemData) => {
          return (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          );
        }}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  goalAppContainer: {
    backgroundColor: "#1e085a",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  goalsContainer: {
    width: "90%",
    marginTop: 30,
    flex: 3
  },
  headerText: {
    margin: 10,
    fontSize: 28,
    textAlign: "center",
    justifyContent: "center",
    color: "white",
  },
});

export default GoalApp;
