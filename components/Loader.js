import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
} from "react-native";
import React, { useState } from "react";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);

  const displayLoader = () => {
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size={50} color={"red"} animating={false} /> */}

      {/* <ActivityIndicator size={50} color={"gold"} animating={showLoader} /> */}

      {showLoader ? <ActivityIndicator size={50} color={"gold"} /> : null}
      <Button
        title="Show Loader"
        onPress={() => setShowLoader(displayLoader)}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
