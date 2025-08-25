import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Grid = () => {
  const users = [
    {
      id: 1,
      name: "Tapas",
    },
    {
      id: 2,
      name: "Tapu",
    },
    {
      id: 3,
      name: "Tapas J",
    },
    {
      id: 4,
      name: "Tapas Jyoti Mohanta",
    },
    {
      id: 10,
      name: "Yash Raj",
    },
    {
      id: 11,
      name: "Punit",
    },
    {
      id: 12,
      name: "Punit Jyoti Mohanta",
    },
    {
      id: 13,
      name: "Punit Jyoti",
    },
    {
      id: 14,
      name: "Punit Jyoti Mohanta",
    },
    {
      id: 15,
      name: "Punit Jyoti Mohanta",
    },
    {
      id: 16,
      name: "Punit Jyoti Mohanta",
    },
    {
      id: 17,
      name: "Punit Jyoti Mohanta",
    },
    {
      id: 18,
      name: "Punit Jyoti Mohanta",
    },
    {
      id: 19,
      name: "Punit Jyoti Mohanta",
    },
  ];
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        This is the visualization of Grid
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {/* <Text style={styles.gridStyle}>Tapas</Text>
        <Text style={styles.gridStyle}>Sanjay</Text>
        <Text style={styles.gridStyle}>Jacky</Text>
        <Text style={styles.gridStyle}>Partha</Text>
        <Text style={styles.gridStyle}>Shyam</Text>
        <Text style={styles.gridStyle}>Tapas</Text>
        <Text style={styles.gridStyle}>Sanjay</Text>
        <Text style={styles.gridStyle}>Jacky</Text>
        <Text style={styles.gridStyle}>Partha</Text>
        <Text style={styles.gridStyle}>Shyam</Text> */}

        {/* using map */}
        {users.map((user) => (
          <Text style={styles.gridStyle}>{user.name}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridStyle: {
    fontSize: 20,
    padding: 10,
    backgroundColor: "#87ceeb",
    margin: 10,
    width: 160,
    height: 120,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export default Grid;
