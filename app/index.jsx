import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { globalStyles } from "../components/Styles";

export default function App() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.headerText}>
        Welcome to RNBasics. Explore some basic React Native app to get familiar
        with the framework.
      </Text>
      <CustomButton
        title="Goal App"
        handlePress={() => {
          router.push("/goalapp");
        }}
        containeStyles={{ backgroundColor: "#2D2066" }}
      />

      <CustomButton
        title="Number Game"
        containeStyles={{ backgroundColor: "#310E1F" }}
      />

      <CustomButton
        title="Meal App"
        containeStyles={{ backgroundColor: "#2E1806" }}
      />

      <CustomButton
        title="Expense App"
        containeStyles={{ backgroundColor: "#260F7F" }}
      />

      <CustomButton
        title="Login App"
        containeStyles={{ backgroundColor: "#A84163" }}
      />

      <CustomButton
        title="Location App"
        containeStyles={{ backgroundColor: "#251E34" }}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


