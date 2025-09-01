import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const PlatformCheck = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Platform: {Platform.OS}</Text>
      {Platform.OS === "android" ? (
        <Text
          style={{ height: 100, width: 100, backgroundColor: "red" }}
        ></Text>
      ) : (
        <Text
          style={{ height: 100, width: 100, backgroundColor: "green" }}
        ></Text>
      )}

      <Text style={styles.text}>Hello, Tapas Jyoti....</Text>
      <Text style={{ fontSize: 20 }}>{JSON.stringify(Platform)}</Text>
    </View>
  );
};

export default PlatformCheck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: Platform.OS === "android" ? "orange" : "green",
  },
});
