import React from "react";
import { View, Text, ScrollView } from "react-native";

const Lists = () => {
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
      <Text style={{ fontSize: 30 }}>List with map function</Text>
      <ScrollView>
        {users.map((item, index) => (
          <Text key={index} style={styles.listItem}>
            {item.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = {
  listItem: {
    fontSize: 20,
    padding: 10,
    backgroundColor: "lightblue",
    marginBottom: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
};

export default Lists;
