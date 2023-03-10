import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Box = ({ title, value }) => {
  return (
    <View style={styles.viewContainer}>
      <View>
        <View style={styles.viewBox}>
          <FontAwesome5 name="money-check-alt" size={24} color="black" />
          <Text style={{ fontSize: 20, color: "black" }}>{title}</Text>
          <Text style={{ fontSize: 20, color: "black" }}>R$ {value}</Text>
        </View>
      </View>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  viewContainer: {},
  viewBox: {
    width: 180,
    backgroundColor: "#BADFD7",
    color: "white",
    height: 130,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    padding: 10,
  },
});
