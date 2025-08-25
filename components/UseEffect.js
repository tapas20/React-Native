import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.warn("UseEffect Hook Called");
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello Tapas, This is from useEffect...! {count}</Text>
      <Button onPress={() => setCount(count + 1)} title="Increment" />
    </View>
  );
};

export default UseEffect;
