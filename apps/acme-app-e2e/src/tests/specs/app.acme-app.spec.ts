import GptDriver from 'gpt-driver-node';

import { createGptDriver } from '../../gptdriver/create-gptdriver';

describe('WebdriverIO, Appium, and GPTDriver example', () => {
  let gptDriver: GptDriver;

  beforeEach(async () => {
    gptDriver = createGptDriver({
      appiumDriver: driver,
    });
  });

  afterEach(async () => {
    await gptDriver.setSessionStatus('success');
  });

  it('should be able explore the app', async () => {
    console.log('[FROM SPEC] driver:', driver);

    // appium click on explore the app as visitor
    await gptDriver.execute('tap the "Hello there" text');
    await gptDriver.assert('a Welcome AcmeApp message is displayed');
  });
});
