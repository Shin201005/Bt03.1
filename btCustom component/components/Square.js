import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Square({ label, color }) {
  return (
    <View style={[styles.square, { backgroundColor: color }]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});