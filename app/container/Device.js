import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import Lock from "../component/Lock";
import NotSupported from "../component/NotSupported";

class Device extends Component {
  _renderHistoryButton() {
    const { navigation } = this.props;
    return (
      <Button
        large
        title="Door Lock"
        onPress={() =>
          navigation.navigate("History", {
            device_name: navigation.state.params.device_name
          })}
      />
    );
  }

  _renderLock() {
    const { device_state } = this.props;
    return (
      <View style={styles.container}>
        <Lock state={device_state} />
        {this._renderHistoryButton()}
      </View>
    );
  }
  _renderNotSupported() {
    return <NotSupported />;
  }

  render() {
    const { navigation } = this.props;
    let view;

    switch (navigation.state.params.device_type) {
      case "lock":
        view = this._renderLock();
        break;
      default:
        view = this._renderNotSupported();
    }

    return <View style={styles.container}>{view}</View>;
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

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Device);
