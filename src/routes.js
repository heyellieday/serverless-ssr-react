import React from "react";
import { renderRoutes } from "react-router-config";
const routes = [
  {
    component: ({ route }) => {
      return <div>hi{renderRoutes(route.routes)}</div>;
    },
    routes: [
      {
        path: "/",
        component: () => <div>hi!</div>,
        exact: true
      },
      {
        path: "/home",
        component: () => <div>home!</div>,
        exact: true
      }
    ]
  }
];

export default routes;
