import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
} from "react-native";

const Buttons = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.error]}>Error</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}>warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.info]}>Info</Text>
      </TouchableHighlight>
      {/* <Button title="Button"></Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#a0a3a2ff",
    padding: 10,
    borderRadius: 9,
    margin: 10,
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    textAlignVertical: "center",
    shadowColor: "#000",
    elevation: 5,
    color: "white",
  },
  success: {
    backgroundColor: "green",
  },
  error: {
    backgroundColor: "red",
  },
  warning: {
    backgroundColor: "gold",
    color: "black",
  },
  info: {
    backgroundColor: "blue",
  },
});

export default Buttons;
