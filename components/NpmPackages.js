import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const NpmPackages = () => {
  return <WebView source={{ uri: "https://www.google.com/" }} />;
};

export default NpmPackages;

const styles = StyleSheet.create({});
