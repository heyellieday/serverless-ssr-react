import React from "react";
import BaseComponent from "../components/base";

export default class Home extends BaseComponent {
  render() {
    const { subdomain } = this.props;
    return <div>home:{subdomain}</div>;
  }
}
