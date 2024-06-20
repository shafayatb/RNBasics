import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ title, handlePress, containeStyles, textStyles }) => {
  return (
    <Pressable
      onPress={handlePress}
      style={({pressed})=>[
        styles.button,
        containeStyles,
        pressed && styles.pressedStyle
      ]}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "60%",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  pressedStyle: {
    opacity: 0.7,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default CustomButton;
