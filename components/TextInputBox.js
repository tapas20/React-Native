import { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";

const TextInputBox = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Your Name is: {name}</Text>
      <TextInput
        onChangeText={(text) => {
          setName(text);
        }}
        placeholder="Enter your name"
        value={name}
        style={styles.textbox}
      />
      <Button
        style={styles.textbox}
        title="Clear"
        onPress={() => {
          setName("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textbox: {
    borderWidth: 2,
    borderColor: "red",
    padding: 15,
    width: 250,
    margin: 10,
    borderRadius: 7,
  },
});

export default TextInputBox;
