import React from "react";
import ReactDOMServer from "react-dom/server";
import templateFn from "./document";
import App from "./../../app";
import StaticRouter from "react-router-dom/StaticRouter";
import { matchRoutes, renderRoutes } from "react-router-config";
import extractSubdomain from "../../util/extractSubdomain";

import routes from "../../routes";

export default (req, res) => {
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({ route }) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function
      ? fetchData(req.params)
      : Promise.resolve(null);
  });
  return Promise.all(promises).then(data => {
    let context = {};

    const componentProps = {
      subdomain: extractSubdomain(req.headers.host)
    };
    const content = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes, componentProps)}
      </StaticRouter>
    );
    const template = templateFn(content);
    res.send(template);
  });
};
