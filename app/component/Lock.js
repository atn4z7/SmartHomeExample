import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { changeDeviceState } from "../store/Actions";
import { getTimeStamp } from "../util/common";

const getButtonTitle = currentState =>
  currentState === "locked" ? "unlock" : "lock";
const getNewState = currentState =>
  currentState === "locked" ? "unlocked" : "locked";

const Lock = ({ name, state, dispatch }) => {
  return (
    <View style={styles.container}>
      <Text>Lock</Text>
      <Text>{state}</Text>
      <Button
        large
        title={getButtonTitle(state)}
        onPress={() =>
          dispatch(changeDeviceState(name, getNewState(state), getTimeStamp()))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

export default Lock;
