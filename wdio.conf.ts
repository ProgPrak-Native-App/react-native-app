import * as path from 'path';
import { Browser } from 'webdriverio';

declare const browser: Browser<'async'>;

const apkPath = 'APK_PATH' in process.env ? process.env.APK_PATH : path.resolve(__dirname, 'build-android.apk');

export const config = {
  runner: 'local',
  framework: 'mocha',
  // https://webdriver.io/docs/typescript/
  autoCompileOpts: {
    autoCompile: true,
    // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
    // for all available options
    tsNodeOpts: {
      project: 'e2e/tsconfig.json',
    },
    // tsconfig-paths is only used if "tsConfigPathsOpts" are provided, if you
    // do please make sure "tsconfig-paths" is installed as dependency
    tsConfigPathsOpts: {
      baseUrl: './',
    },
  },
  specs: ['./e2e/**/*.e2e.ts'],
  capabilities: [
    {
      platformName: 'Android',
      'appium:appPackage': 'org.kopfsachen.app',
      'appium:appActivity': 'MainActivity',
      'appium:avd': '4.7_WXGA_API_29',
      'appium:app': apkPath,
      'appium:automationName': 'UiAutomator2',
    },
  ],
  port: 4723,
  path: '/wd/hub',
  reporters: ['spec'],
};
