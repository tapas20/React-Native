import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const CustomModal = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        {show ? (
          <View style={styles.body}>
            <Text>Custom Modal</Text>
            <Button onPress={() => setShow(false)} title="Close Modal" />
          </View>
        ) : null}
      </View>
      <Button onPress={() => setShow(true)} title="Open Modal" />
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(50, 50, 50, 0.5)",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#fff",
    height: 300,
    width: 300,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
