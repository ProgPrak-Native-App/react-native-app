export default async function teardownGlobal() {
  try {
    await global.wdio.deleteSession();
  } catch {}

  if (global.appium) {
    await global.appium.close();
  }
}
