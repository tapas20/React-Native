import { StyleSheet, Text, View, Button, Modal } from "react-native";
import React, { useState } from "react";

const Modals = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={showModal} animationType="fade">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hi My Name is Tapas</Text>
            <Button
              onPress={() => setShowModal(false)}
              title="Close Modal"
            ></Button>
          </View>
        </View>
      </Modal>
      <View style={styles.openButton}>
        <Button onPress={() => setShowModal(true)} title="Open Modal"></Button>
      </View>
    </View>
  );
};

export default Modals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  openButton: {
    flex: 1,
    justifyContent: "flex-end",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "orange",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    margin: 20,
  },
});
