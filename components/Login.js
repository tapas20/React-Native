import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";

export const Login = (props) => {
  // const name = "Tapas";
  // const age = 21;

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <View style={styles.container}>
      <Text>This is the Login Screen</Text>
      <TextInput
        value={name}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          margin: 10,
          padding: 10,
        }}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
      />
      <TextInput
        value={age}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          margin: 10,
          padding: 10,
        }}
        onChangeText={(text) => setAge(text)}
        placeholder="Enter your age"
      />
      <Button
        onPress={() => props.navigation.navigate("Home", { name, age })}
        title="Go to Home"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
