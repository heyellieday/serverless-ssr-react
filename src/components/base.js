import React from "react";

export default class BaseComponent extends React.Component {
  static getInitialProps({ subdomain }) {
    return { subdomain };
  }
}
