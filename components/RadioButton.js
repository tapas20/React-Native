import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const RadioButton = () => {
  const skills = [
    {
      id: 1,
      name: "React Native",
    },
    {
      id: 2,
      name: "React JS",
    },
    {
      id: 3,
      name: "Node JS",
    },
    {
      id: 4,
      name: "Flutter",
    },
    {
      id: 5,
      name: "PHP",
    },
  ];

  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio === item.id ? (
                <View style={styles.radioBg} />
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
  radioText: {
    fontSize: 20,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    margin: 10,
  },
  radioWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioBg: {
    height: 14,
    width: 14,
    backgroundColor: "black",
    borderRadius: 8,
    margin: 1,
  },
});

export default RadioButton;
