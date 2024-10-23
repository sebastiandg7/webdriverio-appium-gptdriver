import { config as baseConfig } from './wdio.shared.gptdriver.conf';

export const config: WebdriverIO.Config = {
  ...baseConfig,

  // ============
  // Capabilities
  // ============
  // For all capabilities please check
  // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
  capabilities: [
    {
      // The defaults you need to have in your config
      platformName: 'iOS',
      // For W3C the appium capabilities need to have an extension prefix
      // This is `appium:` for all Appium Capabilities which can be found here
      // http://appium.io/docs/en/writing-running-appium/caps/
      'appium:orientation': 'PORTRAIT',
      'appium:automationName': 'XCUITest',
      'appium:newCommandTimeout': 240,
      // This is needed to wait for the webview context to become available
      'appium:webviewConnectTimeout': 5000,
      // 'appium:fullReset': true,
    },
  ],
};
