import "react-native";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import React from "react";
import App from "../app/App";

it("should render App", () => {
  const tree = renderer.create(<App />);
});
