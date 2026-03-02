import React from "react";
import { View, StyleSheet } from "react-native";
import Square from "./components/Square";

export default function App() {
  return (
    <View style={styles.container}>
      <Square label="S1" color="red" />
      <Square label="S2" color="orange" />
      <Square label="S3" color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});