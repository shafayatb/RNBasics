import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const GoalLayout = () => {
    return (
      <>
        <Stack>
          <Stack.Screen
            name="goalapp"
            options={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          />
        </Stack>
  
        <StatusBar style="light" />
      </>
    );
  };
  
  export default GoalLayout;