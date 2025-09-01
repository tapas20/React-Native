import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const StatusBarAndroid = () => {
  const [show, setShow] = useState(false);

  const [color, setColor] = useState("red");

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={color}
        barStyle="light-content"
        hidden={show}
      />
      <Button onPress={() => setShow(!show)} title="Toggle Status Bar"></Button>
      <Button
        onPress={() => setColor(color === "red" ? "black" : "red")}
        title="Change Color"
      ></Button>
    </View>
  );
};

export default StatusBarAndroid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
