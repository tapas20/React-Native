import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PressableEvent = () => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => console.warn("Normal onPress!!!")}
        onLongPress={() => console.warn("Long Press!!!")}
        // onPressIn={() => console.warn("Press In")}
        // onPressOut={() => console.warn("Press Out")}
        // delayLongPress={3000}
      >
        <Text style={styles.pressableBtn}>PressableEvent</Text>
      </Pressable>
    </View>
  );
};

export default PressableEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressableBtn: {
    backgroundColor: "lightgreen",
    padding: 10,
    borderRadius: 8,
    margin: 10,
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    textAlignVertical: "center",
    shadowColor: "#000",
    elevation: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
});
