import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import { allDevicesSelector } from "../store/helper/selector";

class Home extends Component {
  _keyExtractor = item => item.slug;

  _renderItem = ({ item }) => (
    <Button
      large
      title={item.name}
      onPress={() =>
        this.props.navigation.navigate("Device", {
          device_name: item.slug
        })}
    />
  );

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Apartment 143</Text>
        <FlatList
          data={this.props.devices}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <Button
          large
          title="About Us"
          onPress={() => navigation.navigate("About")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

const mapStateToProps = state => ({
  devices: allDevicesSelector(state.home)
});

export default connect(mapStateToProps)(Home);
