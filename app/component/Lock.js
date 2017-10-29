import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

const Lock = ({ state }) => (
  <View style={styles.container}>
    <Text>Lock</Text>
    <Text>{state}</Text>
    <Button
      large
      title={state == "locked" ? "unlock" : "lock"}
      onPress={() => console.log("sdsds")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

export default Lock;
