import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageInRN = () => {
  const [myName, setMyName] = useState("");

  const setData = async () => {
    await AsyncStorage.setItem("name", "Tapas Jyoti");
  };

  const getData = async () => {
    let name = await AsyncStorage.getItem("name");
    setMyName(name);
  };

  const removeData = async () => {
    await AsyncStorage.removeItem("name");
    setMyName("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={setData} title="Set Name" />
        <Button onPress={getData} title="Get Name" />
        <Button onPress={removeData} title="Remove Name" />
      </View>
      <Text style={{ fontSize: 20, color: "red" }}>My Name is: {myName}</Text>
    </View>
  );
};

export default AsyncStorageInRN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});
