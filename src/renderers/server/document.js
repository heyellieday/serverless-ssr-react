export default html => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>test app</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <link rel="stylesheet" type="text/css" href="${
          process.env.IN_LAMBDA
            ? process.env.CSS_BUNDLE_URL
            : "http://localhost:8080/main.css"
        }" />
    </head>
    <body>
        <div id="app">${html}</div>
        <script src="${
          process.env.IN_LAMBDA
            ? process.env.BUNDLE_URL
            : "http://localhost:8080/bundle.js"
        }"></script>
    </body>
    </html>
`;
