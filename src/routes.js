import React from "react";
import { renderRoutes } from "react-router-config";

const makeBuildPath = base => path => `${base ? `/${base}` : ""}${path}`;

const buildPath = makeBuildPath("dev");
const routes = [
  {
    component: ({ route }) => {
      return <div>hi{renderRoutes(route.routes)}</div>;
    },
    routes: [
      {
        path: buildPath("/"),
        component: () => <div>hi!</div>,
        exact: true
      },
      {
        path: buildPath("/home"),
        component: () => <div>home!</div>,
        exact: true
      }
    ]
  }
];

export default routes;
