import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState(false);

  const resetFormData = () => {
    setDisplay(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <View>
      <TextInput
        style={styles.inputbox}
        placeholder="Enter your Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.inputbox}
        placeholder="Enter your Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <View>
        <TextInput
          style={styles.inputbox}
          placeholder="Enter your Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!show}
        />
        <Text
          onPress={() => {
            handleShow();
          }}
          style={{
            marginBottom: 10,
            backgroundColor: "black",
            color: "white",
            width: 40,
            textAlign: "center",
            borderRadius: 9,
          }}
        >
          {show ? "hide" : "show"}
        </Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Button
          onPress={() => setDisplay(true)}
          color={"green"}
          title="Print Details"
        ></Button>
      </View>
      <Button
        onPress={() => {
          resetFormData();
        }}
        color={"red"}
        title="Clear Details"
      ></Button>
      {display ? (
        <View>
          <Text style={{ fontSize: 15 }}>User name is : {name}</Text>
          <Text style={{ fontSize: 15 }}>User email is : {email}</Text>
          <Text style={{ fontSize: 15 }}>User password is : {password}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputbox: {
    borderWidth: 2,
    padding: 10,
    borderColor: "green",
    width: 200,
    borderRadius: 8,
    margin: 10,
  },
});

export default Form;
