import { config as baseConfig } from './wdio.shared.local.appium.conf';

import { join } from 'node:path';

const iOSCapabilities = {
  // The defaults you need to have in your config
  platformName: 'iOS',
  // For W3C the appium capabilities need to have an extension prefix
  // This is `appium:` for all Appium Capabilities which can be found here
  // http://appium.io/docs/en/writing-running-appium/caps/
  'appium:orientation': 'PORTRAIT',
  'appium:automationName': 'XCUITest',
  // The path to the app
  'appium:app': join(
    process.cwd(),
    'dist',
    'apps',
    'acme-app',
    'ios',
    'AcmeApp-release-iphonesimulator.zip'
  ),
  'appium:newCommandTimeout': 240,
  // This is needed to wait for the webview context to become available
  'appium:webviewConnectTimeout': 5000,
  // 'appium:fullReset': true,
};

export const config: WebdriverIO.Config = {
  ...baseConfig,

  // ============
  // Capabilities
  // ============
  // For all capabilities please check
  // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
  capabilities: [
    {
      ...iOSCapabilities,
      // 'appium:platformVersion': '17.2',
    },
  ],
};
