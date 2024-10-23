# Acme App E2E tests

---

## Running locally

Create the env files from the examples and fill them with the required values:

```bash
cp apps/acme-app-e2e/.env.example apps/acme-app-e2e/.env
```

Then run:

```bash
# Android
nx e2e-android acme-app-e2e

# iOS
nx e2e-ios acme-app-e2e
```

Nx will build the app's apk/ios zip to run the tests. Yet make sure it is built before running the tests.

```bash
# Android
nx build-android acme-app

# iOS
nx build-ios acme-app
```

## Running in CI mode

To run tests is CI mode, start by creating the env files from the examples and fill them with the required values:

```bash
cp apps/acme-app-e2e/.env.example apps/acme-app-e2e/.env 
cp apps/acme-app-e2e/.env.e2e-android.ci.example apps/acme-app-e2e/.env.e2e-android.ci
cp apps/acme-app-e2e/.env.e2e-ios.ci.example apps/acme-app-e2e/.env.e2e-ios.ci
```

Then run:

```bash
# Android
nx e2e-android acme-app-e2e -c ci

# iOS
nx e2e-ios acme-app-e2e -c ci
```
