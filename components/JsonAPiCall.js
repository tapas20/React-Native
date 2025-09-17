import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const JsonAPiCall = () => {
  const [data, setData] = useState([]);
  const fetchApiData = async () => {
    try {
      let res = await fetch("http://192.168.1.14:3000/user");
      res = await res.json();
      setData(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <View style={styles.cotainer}>
      {data.length
        ? data.map((item) => {
            return (
              <View key={item.id}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginBottom: 10,
                    color: "red",
                  }}
                >
                  {item.name}
                </Text>
                <Text>{item.email}</Text>
              </View>
            );
          })
        : null}
    </View>
  );
};

export default JsonAPiCall;

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
