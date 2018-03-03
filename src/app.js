import React from "react";
import ReactDOMServer from "react-dom/server";
import templateFn from "./document";
export default (req, res) => {
  const html = ReactDOMServer.renderToString(<div>Hello world!</div>);
  const template = templateFn(html);
  res.send(template);
};
