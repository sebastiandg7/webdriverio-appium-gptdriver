import type { Capabilities, Frameworks, Services } from '@wdio/types';

export interface GPTDriverServiceOptions {
  token: string;
}

export class GPTDriverWorkerService implements Services.ServiceInstance {
  browser?: WebdriverIO.Browser;

  constructor(
    private _options: GPTDriverServiceOptions,
    private _capabilities: Capabilities.ResolvedTestrunnerCapabilities,
    private _config: WebdriverIO.Config
  ) {
    this.browser = undefined;
  }

  /**
   * this browser object is passed in here for the first time
   */
  async before(
    capabilities:
      | Capabilities.RequestedStandaloneCapabilities
      | Capabilities.RequestedMultiremoteCapabilities,
    specs: string[],
    browser: WebdriverIO.Browser
  ) {
    this.browser = browser;

    // TODO: something before all tests are run, e.g.:
    await this.browser.setWindowSize(1024, 768);
  }

  after(
    result: number,
    capabilities:
      | Capabilities.RequestedStandaloneCapabilities
      | Capabilities.RequestedMultiremoteCapabilities,
    specs: string[]
  ) {
    // TODO: something after all tests are run, e.g.:
  }

  beforeTest(test: Frameworks.Test, context: any) {
    // TODO: something before each Mocha/Jasmine test run
  }

  beforeSuite(suite: Frameworks.Suite) {
    // TODO: something before each Mocha/Jasmine suite run
  }
}

export default GPTDriverWorkerService;
