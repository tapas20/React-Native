import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Tapas",
      age: 21,
    };
  }

  updateName(props) {
    this.setState({ name: props });
  }
  funs() {
    console.log("This is a function from App component...");
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, color: "red" }}>
          Hello World! This is from App component...!
        </Text>
        <Button onPress={this.funs} title="Press me"></Button>

        <Text style={{ fontSize: 20, color: "blue" }}>
          My Name is: {this.state.name} & My age is: {this.state.age}
        </Text>
        <TextInput
          onChangeText={(text) => this.updateName(text)}
          placeholder="Enter your name"
        ></TextInput>
      </View>
    );
  }
}

export default App;
