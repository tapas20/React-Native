import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

const ListWithApi = () => {
  const [data, setData] = useState([]);
  const fetchApiData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    res = await res.json();
    setData(res);
  };

  useEffect(() => {
    fetchApiData();
  });

  return (
    <ScrollView style={styles.container}>
      {data.length
        ? data.map((item) => {
            return (
              <View
                style={{
                  padding: 10,
                  borderBlockColor: "red",
                  borderBottomWidth: 1,
                }}
                key={item.id}
              >
                <Text style={{ fontWeight: "bold", backgroundColor:"#ddd" }}>Id: {item.id}</Text>
                <Text>Title: {item.title}</Text>
                <Text>Body: {item.body}</Text>
              </View>
            );
          })
        : null}
    </ScrollView>
  );
};

export default ListWithApi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
