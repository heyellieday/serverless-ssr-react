# serverless-ssr-react
Exploring SSR React apps with AWS Lambdas and Serverless framework. How ironic.

This is a work in progress. I wouldn't currently use it for anything important, but feel free to take a look to learn some things :)

## Local Setup

1. `npm install`
2. `npm start`

## Running tests

1. `npm run test`

## Deploying to Production

The exact steps needed to deploy to production are currently in flux so these instructions may be incomplete or invalid.

The production architecture is as follows:
- A serverless AWS lambda that dynamically renders an HTML page with server-side rendered React
- A bundled JS file that is uploaded to S3 on each deploy and linked in the rendered html


The lambda can be deployed to AWS using the Serverless Framework. Currently, you can deploy automatically when a CircleCI build succeeds if your CI project is properly configured. You can also deploy via commands included in package.json, which circle.yml uses.

### CircleCI setup instructions
1. Set proper env variables via your CircleCI project settings page under "Build Settings -> Environment Variables"
  - ASSETS_BUCKET = S3 bucket name where your compiled assets bundle will be uploaded to
  - PRODUCTION_BUILD = true (sets webpack to production mode)

2. Set your AWS credentials via your CircleCI project settings page under "Continuous Deployment -> AWS CodeDeploy"
