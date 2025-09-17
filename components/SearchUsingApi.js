import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const SearchUsingApi = () => {
  const [data, setData] = useState([]);
  const searchUser = async (text) => {
    const url = `http://http://192.168.1.10:3000/user?q=${text}`;
    console.warn(url);
    let res = fetch(url);
    res = await res.json();
    if (res) {
      setData(res);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(text) => searchUser(text)}
      />
    </View>
  );
};

export default SearchUsingApi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "lightblue",
    width: "80%",
  },
});
