import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export const Home = (props) => {
  const { name, age } = props.route.params;
  return (
    <View style={styles.container}>
      <Text>This is the Home Screen</Text>
      <Button
        onPress={() => props.navigation.navigate("Login")}
        title="Go to Login"
      ></Button>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
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
