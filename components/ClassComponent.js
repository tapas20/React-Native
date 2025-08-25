import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import App from "./SecondClassComponent";

class ClassComponent extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <App />
      </View>
    );
  }
}

export default ClassComponent;
