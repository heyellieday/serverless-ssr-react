import React from "react";
import { shallow } from "enzyme";
import App from "./app";

test("renders successfully", () => {
  const onClick = () => {};
  const wrapper = shallow(<App />);
  expect(wrapper.find("button").prop("children")).toEqual("Click me!");
});
