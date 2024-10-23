# WebDriverIO + Appium + GPTDriver

> This is an example Nx workspace using WebDriverIO, Appium, and GPTDriver to E2E test a react-native application.

## Versions

- Node v20.18
- PNPM v9.12.2
- Nx v20
- Appium v2.12.0
- WebDriverIO v9.2.1
- GPTDriver v1.0.0-alpha.14
- Ruby v3.3.0
- Cocoapods v1.14.3
- XCode v15.2 (Build version 15C500b)
- Java v17.0.3-amzn

<details>

<summary>$ nx report</summary>

```bash
 NX   Report complete - copy this into the issue template

Node           : 20.11.1
OS             : darwin-arm64
Native Target  : aarch64-macos
pnpm           : 9.7.1

nx                 : 20.0.3
@nx/js             : 20.0.3
@nx/jest           : 20.0.3
@nx/eslint         : 20.0.3
@nx/workspace      : 20.0.3
@nx/devkit         : 20.0.3
@nx/eslint-plugin  : 20.0.3
@nx/playwright     : 20.0.3
@nx/react          : 20.0.3
@nx/react-native   : 20.0.3
@nx/vite           : 20.0.3
@nx/web            : 20.0.3
@nx/webpack        : 20.0.3
typescript         : 5.5.4
---------------------------------------
Registered Plugins:
@nx/react-native/plugin
@nx/eslint/plugin
@nx/jest/plugin
@nx/webpack/plugin
@nx/playwright/plugin
```

</details>

## Setup toolchain

### Node and Pnpm

To use the right Node and Pnpm versions, using [volta](https://volta.sh/) is highly recommended.

Volta should install and activate the right versions for you. Yet you are free to install/manage them the way it better fits for your needs.

> Corepack config is also avaialble.

### Node dependencies

Install dependencies by running:

```bash
pnpm install
```

### Java

Using [sdkman](https://sdkman.io/) to manage installed Java versions is highly recommended.

Run the following command in the workspace root:

```bash
sdk env
```

### Ruby

Using [rbenv](https://github.com/rbenv/rbenv) to manage installed Ruby versions is highly recommended.

Run the following command in the workspace root:

```bash
rbenv install
```

### Cocoapods

Install cocoapods via [bundler](https://bundler.io/) by running:

```bash
pnpm nx bundle-install acme-app
```

## Build the app

Sync dependencies with the app's `package.json` by running:

```bash
pnpm nx sync-deps acme-app
```

Install iOS pods by running:

```bash
pnpm nx pod-install acme-app
```

Build the app for each platform:

Android

```bash
pnpm nx build-android acme-app
```

iOS

```bash
pnpm nx build-ios acme-app
```

## Run E2E tests

Check the E2E tests project [README](apps/acme-app-e2e/README.md) for more details.
