import { config as baseConfig } from './wdio.shared.conf';

export const config: WebdriverIO.Config = {
  ...baseConfig,
  // baseUrl: 'http://127.0.0.1:4723',
  baseUrl: 'https://device-hub.mobileboost.io/appium/',
  hostname: 'device-hub.mobileboost.io',
  protocol: 'https',
  port: 443,
  path: '/appium/wd/hub',

  user: 'GPTDRIVER_NO_USER',
  key: process.env.GPTDRIVER_TOKEN ?? 'NO_API_KEY_SET',

  //
  // ======
  // Appium
  // ======
  //
  services: [
    ...(baseConfig.services || []),
    // [
    //   GPTDriverWorkerService,
    //   {
    //     token: process.env.GPTDRIVER_TOKEN || 'YOUR_TOKEN',
    //   },
    // ],
  ],
  before: async () => {
    // Only update the setting for Android, this is needed to reduce the timeout for the UiSelector locator strategy,
    // which is also used in certain tests, so it will not wait for 10 seconds if it can't find an element
    if (driver.isAndroid) {
      await driver.updateSettings({
        // This reduces the timeout for the UiUiSelector from 10 seconds to 3 seconds
        waitForSelectorTimeout: 3 * 1000,
      });
    }
  },
};
