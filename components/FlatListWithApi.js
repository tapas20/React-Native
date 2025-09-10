import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

const FlatListWithApi = () => {
  const [data, setData] = useState([]);
  const fetchApiData = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      res = await res.json();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>FlatList With Api</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  padding: 10,
                  borderBlockColor: "red",
                  borderBottomWidth: 1,
                }}
              >
                <Text style={{ fontWeight: "bold", backgroundColor:"#ddd" }}>Id: {item.id}</Text>
                <Text>Title: {item.title}</Text>
                <Text>Body: {item.body}</Text>
              </View>
            )
          }}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default FlatListWithApi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
