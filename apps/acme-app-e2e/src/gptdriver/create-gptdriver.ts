import GptDriver from 'gpt-driver-node';

export type CreateGPTDriverOptions = {
  appiumDriver: WebdriverIO.Browser;
};

export function createGptDriver(options: CreateGPTDriverOptions) {
  const { appiumDriver } = options;

  const apiKey = process.env.GPTDRIVER_TOKEN;

  if (!apiKey) {
    throw new Error('GPTDRIVER_TOKEN is not defined');
  }

  const isCIRun = process.env.E2E_CI_RUN === 'true';
  const buildId = process.env.E2E_GPTDRIVER_BUILD_ID;

  return new GptDriver({
    apiKey,
    serverConfig: {
      device: {
        platform: appiumDriver.isAndroid ? 'Android' : 'iOS',
      },
      url: appiumDriver.options.baseUrl,
    },
    useGptDriverCloud: isCIRun,
    driver: isCIRun ? undefined : appiumDriver,
    buildId: isCIRun ? buildId : undefined,
  });
}
