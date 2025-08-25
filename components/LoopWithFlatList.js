import React from "react";
import { View, FlatList } from "react-native";
import UserData from "./UserData";

const LoopWithFlatList = () => {
  const users = [
    {
      name: "Tapas",
      email: "tapas@gmail.com",
    },
    {
      name: "Tapu",
      email: "tapu@gmail.com",
    },
    {
      name: "Tapas J",
      email: "tapasj@gmail.com",
    },
  ];

  return (
    <View style={{ padding: 30 }}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserData item={item} />}
      />
    </View>
  );
};

export default LoopWithFlatList;
