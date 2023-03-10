# NFCool Client Mobile

Mobile client repository for the Chainlink hackathon submission NFCool: https://devpost.com/software/nfc-for-real-goods 

## Table of contents:

# Pre-reqs

- Install [Node.js](https://nodejs.org/en/)

# Getting started

## Install the project

1. Clone or fork the project
2. Run `npm install`
3. In the root folder, create a file named `keys.env.ts`
4. In this file, add the following information:
```
export const websocketProvider = YOUR_INFURA_WEBSOCKET_PROVIDER;
```
5. Go in the following file `node_modules/@angular-devkit/build-angular/src/webpack/configs/browser.js` and add the following code under the `resolve` variable:
```
fallback:{
  http: require.resolve("stream-http"),
  https: require.resolve("https-browserify"),
  crypto: require.resolve("crypto-browserify"),
  stream:require.resolve("stream-browserify"),
  os:require.resolve("os-browserify/browser"),
  assert:require.resolve("assert/"),
}
```
6. Into the environment files, change de the contract addresses


7. Serve the project to run it locally

```
ionic serve
```


# Build and deploy

- Build the production assets

```
ionic build --prod
```

- Sync capacitor

```
cap sync android
# And on OS X
cap sync ios
```
