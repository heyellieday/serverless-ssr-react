import React from "react";
import { renderRoutes } from "react-router-config";
import Home from "./pages/home";

const makeBuildPath = base => path => `${base ? `/${base}` : ""}${path}`;

const buildPath = makeBuildPath("");
const routes = [
  {
    component: props => {
      return <div>hi{renderRoutes(props.route.routes, props)}</div>;
    },
    routes: [
      {
        path: buildPath("/"),
        component: () => <div>hi!</div>,
        exact: true
      },
      {
        path: buildPath("/home"),
        component: Home,
        exact: true
      }
    ]
  }
];

export default routes;
