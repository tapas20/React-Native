import { View, Text, StyleSheet } from "react-native";

export default UserData = (props) => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "lightblue",
    flexDirection: "row",
  },
  item: {
    fontSize: 18,
    marginBottom: 5,
    flex: 1,
    color: "red",
    textAlign: "center",
  },
});
