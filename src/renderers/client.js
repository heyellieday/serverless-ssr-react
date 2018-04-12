import React from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { renderRoutes } from "react-router-config";
import App from "../app";
import routes from "../routes";
import "../styles/index.scss";
import extractSubdomain from "../util/extractSubdomain";

const AppRouter = () => {
  const componentProps = {
    subdomain: extractSubdomain(window.location.hostname)
  };
  return <BrowserRouter>{renderRoutes(routes, componentProps)}</BrowserRouter>;
};

ReactDOM.render(<AppRouter />, document.getElementById("app"));
