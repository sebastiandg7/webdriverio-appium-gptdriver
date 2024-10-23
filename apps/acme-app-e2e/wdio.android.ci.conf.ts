import { config as baseConfig } from './wdio.shared.gptdriver.conf';

export const config: WebdriverIO.Config = {
  ...baseConfig,

  // ============
  // Capabilities
  // ============
  // For all capabilities please check
  // https://github.com/appium/appium-uiautomator2-driver
  capabilities: [
    {
      // The defaults you need to have in your config
      platformName: 'Android',
      // For W3C the appium capabilities need to have an extension prefix
      // This is `appium:` for all Appium Capabilities which can be found here
      'appium:orientation': 'PORTRAIT',
      'appium:automationName': 'UiAutomator2',
      'appium:appWaitActivity': 'com.acmeapp.MainActivity',
      'appium:newCommandTimeout': 240,
      // 'appium:app': 'HcoC6PQnp4maK9DYL1rY',
      // 'appium:fullReset': true,
    },
  ],
};
