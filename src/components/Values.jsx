import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Values = ({ price }) => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textViewContainer}>R$ {price}</Text>
    </View>
  );
};

export default Values;

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "black",
    width: 200,
    height: 150,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 50,
    zIndex: 1,
  },
  textViewContainer: {
    color: "white",
    fontSize: 30,
  },
});
