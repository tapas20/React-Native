import { View, Text, StyleSheet } from "react-native";
import Extstyle from "../Styles/Extstyle";

const Style = () => {
  return (
    <View>
      {/* InLine Styling */}
      <Text
        style={{
          color: "red",
          backgroundColor: "lightblue",
          fontSize: 20,
          padding: 10,
          marginBottom: 5,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "yellow",
        }}
      >
        Welcome to React-Native
      </Text>

      {/* Internal Styling */}
      <Text style={styles.textBox}>Welcome to React-Native</Text>
      <Text style={styles.textBox}>Welcome to React-Native</Text>
      <Text style={styles.textBox}>Welcome to React-Native</Text>

      {/* External Styling */}
      <Text style={Extstyle.ExtTextBoxStyle}>Welcome to React-Native</Text>

      {/* Combination of Inline, Internal, External */}
      <Text
        style={[styles.textBox, Extstyle.ExtTextBoxStyle, { marginTop: 20 }]}
      >
        Welcome to React-Native
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    color: "white",
    backgroundColor: "black",
    marginBottom: 20,
    height: 150,
    width: 290,
    fontSize: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "yellow",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default Style;
