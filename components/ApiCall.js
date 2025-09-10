import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const ApiCall = () => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "GET",
        }
      );

      response = await response.json();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <View>
          <Text>{data.id}</Text>
          <Text>{data.userId}</Text>
          <Text>{data.title}</Text>
          <Text>{data.body}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default ApiCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffa0a0ff",
    padding: 40,
  },
});
