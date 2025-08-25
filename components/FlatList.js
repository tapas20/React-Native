import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const FlatLists = () => {
  const VillageNames = ["Khuntapingu", "Jamuda", "Binida", "Baliposi"];

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
      name: "Jyoti",
    },
    {
      id: 4,
      name: "Sanjay",
    },
    {
      id: 10,
      name: "Yash Raj",
    },
  ];

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          padding: 20,
          marginTop: 30,
          backgroundColor: "black",
          color: "white",
          marginBottom: 20,
          borderRadius: 20,
        }}
      >
        Showing all Users in the form of FlatList
      </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text style={styles.listStyl}>{item.name}</Text>
        )}
      />
      {/* <FlatList
        data={VillageNames}
        renderItem={({ item }) => <Text style={styles.listStyl}>{item}</Text>}
      /> */}

    </View>
  );
};


const styles = StyleSheet.create({
  listStyl: {
    fontSize: 20,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: "lightgreen",
    marginBottom: 10,
    borderRadius: 9,
    width: 200,
    textAlign: "center",
    marginLeft: 70,
  },
});

export default FlatLists;
