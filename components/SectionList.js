import React from "react";
import { View, Text, SectionList } from "react-native";

const SectionLists = () => {
  const user = [
    {
      id: 1,
      name: "Tapas",
      data: ["Node.js", "React.js", "MongoDB", "Express.js"],
    },
    {
      id: 2,
      name: "Tapu",
      data: ["PHP", "React Native", "MongoDB", "Express.js"],
    },
    {
      id: 3,
      name: "Jyoti",
      data: ["HTML", "CSS", "JavaScript", "TypeScript.js"],
    },
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center",marginTop: 50 }}>
      <Text>SectionList</Text>
      <SectionList
        sections={user}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 20, marginLeft: 15 }}>{item}</Text>
        )}
        renderSectionHeader={({ section: { name } }) => (
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>{name}</Text>
        )}
      />
    </View>
  );
};

export default SectionLists;
