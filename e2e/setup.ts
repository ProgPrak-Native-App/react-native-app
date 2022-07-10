import * as webdriverio from 'webdriverio';
import * as path from 'path';
import { main as appiumMain } from 'appium';
import tcpPortUsed from 'tcp-port-used';

export default async function setupGlobal() {
  if (!(await tcpPortUsed.check(4723))) {
    global.appium = await appiumMain({
      throwInsteadOfExit: true,
      loglevel: 'warn',
    });
  }

  await sleep(500);

  const apkPath = 'APK_PATH' in process.env ? process.env.APK_PATH : path.resolve(__dirname, '../build-android.apk');

  const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: 'Android',
      platformVersion: '11',
      deviceName: 'Android Emulator',
      avd: 'Pixel_3a_API_30',
      app: apkPath,
      automationName: 'UiAutomator2',
    },
  };

  global.wdio = await webdriverio.remote(opts);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
