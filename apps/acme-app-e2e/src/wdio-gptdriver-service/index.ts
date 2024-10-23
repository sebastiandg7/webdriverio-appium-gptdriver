import { GPTDriverLauncherService } from './launcher';
import { GPTDriverWorkerService } from './service';

import type { GPTDriverServiceOptions } from './service';

export default GPTDriverWorkerService;
export const launcher = GPTDriverLauncherService;
export { GPTDriverWorkerService };
export type { GPTDriverServiceOptions };

// declare global {
//   // eslint-disable-next-line @typescript-eslint/no-namespace
//   namespace WebdriverIO {
//     // eslint-disable-next-line @typescript-eslint/no-empty-interface
//     interface ServiceOption extends GPTDriverServiceOptions {}
//   }
// }
