import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const StateVar = () => {
  const [name, setName] = useState("Tapas Jyoti Mohanta");
  let data = "Sam";

  function changeName(val) {
    setName(`My Name is ${val}...`);
    data = "Altman"
  }

  return (
    <View>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Text style={{ fontSize: 30 }}>{data}</Text>

      <Button
        title="Change Name"
        color={"orange"}
        // onPress={() => changeName("Tapu Ji")}
        onPress={() => setName("Punit Ji")}
      />
    </View>
  );
};

export default StateVar;
