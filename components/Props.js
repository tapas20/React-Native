import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Props = () => {
  // let name = "Tapas";
  const [name, setName] = useState("Tapas");
  return (
    <View>
      <Text>Hello Tapas, How are you...?</Text>
      <Button title="Change Name" onPress={() => setName("Hari")}></Button>
      <PropsLec name={name} />
    </View>
  );
};

const PropsLec = (data) => {
  console.warn(data);
  return (
    <View>
      <Text style={{ backgroundColor: "pink", padding: 10 }}>
        Hi {data.name}
      </Text>
    </View>
  );
};

export default Props;
