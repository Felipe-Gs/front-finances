import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Entypo name="menu" size={32} color="black" />
      <Text style={{ fontSize: 20 }}>Home</Text>
      <MaterialCommunityIcons name="bell" size={32} color="black" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#BADFD7",
    height: 120,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
