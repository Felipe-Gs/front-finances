import { StyleSheet, Text, View } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const CardsPrices = ({ price, description }) => {
  return (
    <Card.Title
      style={{ padding: 20 }}
      title={price}
      subtitle={description}
      left={(props) => (
        <MaterialCommunityIcons name="finance" size={30} color="red" />
      )}
      right={(props) => (
        <MaterialIcons name="minimize" size={24} color="black" />
      )}
    />
  );
};

export default CardsPrices;

const styles = StyleSheet.create({
  viewContainer: {},
});
