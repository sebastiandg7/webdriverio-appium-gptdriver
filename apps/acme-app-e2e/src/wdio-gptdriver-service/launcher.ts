import type { Capabilities, Options, Services } from '@wdio/types';

type LauncherService = Pick<
  Services.HookFunctions,
  'onPrepare' | 'onComplete' | 'onWorkerStart' | 'onWorkerEnd'
>;

export class GPTDriverLauncherService implements LauncherService {
  // If a hook returns a promise, WebdriverIO will wait until that promise is resolved to continue.
  async onPrepare(
    config: Options.Testrunner,
    capabilities: Capabilities.TestrunnerCapabilities
  ) {
    // TODO: something before all workers launch
  }

  async onComplete(
    exitCode: number,
    config: Omit<Options.Testrunner, 'capabilities'>,
    capabilities: Capabilities.TestrunnerCapabilities,
    results: any
  ) {
    // TODO: something after the workers shutdown
  }

  // custom service methods ...
}

export default GPTDriverLauncherService;
