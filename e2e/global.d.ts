/* eslint-disable no-var */

import { Browser } from 'webdriverio';
import { AppiumServer } from '@appium/types';

export declare global {
  var appium: AppiumServer | undefined;
  var wdio: Browser<'async'>;
}
