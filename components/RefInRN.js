import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useRef } from "react";

const RefInRN = () => {
  const inputRef = useRef();

  const handleSubmit = () => {
    inputRef.current.focus();
    inputRef.current.setNativeProps({
      style: { borderColor: "red", borderWidth: 2, color: "green" },
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Enter your name"
      />
      <TextInput style={styles.input} placeholder="Enter your password" />
      <Button title="Submit" onPress={() => handleSubmit()} />
    </View>
  );
};

export default RefInRN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "skyblue",
    borderWidth: 2,
    width: 250,
    margin: 10,
    borderRadius: 10,
  },
});
