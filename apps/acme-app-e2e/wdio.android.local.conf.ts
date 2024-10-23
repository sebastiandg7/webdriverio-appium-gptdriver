import { config as baseConfig } from './wdio.shared.local.appium.conf';

import { join } from 'node:path';

const androidCapabilties = {
  // The defaults you need to have in your config
  platformName: 'Android',
  // For W3C the appium capabilities need to have an extension prefix
  // This is `appium:` for all Appium Capabilities which can be found here
  'appium:orientation': 'PORTRAIT',
  'appium:automationName': 'UiAutomator2',
  // The path to the app
  'appium:app': join(
    process.cwd(),
    'dist',
    'apps',
    'acme-app',
    'android',
    'apk',
    'release',
    'app-release.apk'
  ),
  'appium:appWaitActivity': 'com.acmeapp.MainActivity',
  'appium:newCommandTimeout': 240,
  // 'appium:fullReset': true,
};

export const config: WebdriverIO.Config = {
  ...baseConfig,

  // ============
  // Capabilities
  // ============
  // For all capabilities please check
  // https://github.com/appium/appium-uiautomator2-driver
  capabilities: [
    {
      ...androidCapabilties,
    },
    // {
    //   ...androidCapabilties,
    //   'appium:deviceName': 'Pixel_7_Pro_Android_14_API_34',
    //   'appium:platformVersion': '14.0',
    // },
  ],
};
