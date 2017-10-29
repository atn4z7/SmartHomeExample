import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import Lock from "../component/Lock";
import NotSupported from "../component/NotSupported";

class Device extends Component {
  _renderHistoryButton() {
    const { device, navigation } = this.props;
    return (
      <Button
        large
        title="Door Lock"
        onPress={() =>
          navigation.navigate("History", {
            device_name: device.slug
          })}
      />
    );
  }

  _renderLock() {
    const { device, dispatch } = this.props;
    return (
      <View style={styles.container}>
        <Lock name={device.slug} state={device.state} dispatch={dispatch} />
        {this._renderHistoryButton()}
      </View>
    );
  }
  _renderNotSupported() {
    return <NotSupported />;
  }

  render() {
    const { device } = this.props;
    let view;

    switch (device.type) {
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

const mapStateToProps = (state, props) => ({
  device: state.home.devices[props.navigation.state.params.device_name]
});

export default connect(mapStateToProps)(Device);
