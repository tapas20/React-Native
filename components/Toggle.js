import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

const Toggle = () => {
  const [showData, setShowData] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>This is the main page for the app</Text>
      {/* <Button title="Show Data" onPress={() => setShowData(true)} />
      <Button title="Hide Data" onPress={() => setShowData(false)} /> */}

      <Button title="Toggle Button" onPress={() => setShowData(!showData)} />

      {showData ? <User /> : null}
    </View>
  );
};

const User = () => {
  let timer = setInterval(() => {
    console.warn("Timeout called");
  }, 2000);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <View>
      <Text>This is the User Data</Text>
    </View>
  );
};

export default Toggle;
