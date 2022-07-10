import { Element } from 'webdriverio';

test('intro', async () => {
  const welcomePage = await global.wdio.$('//*[@resource-id="WelcomePage"]');
  const title: Element<'async'> = await welcomePage.$('//*[@resource-id="title"]');

  expect(await title.getText()).toBe('Herzlich Willkommen!');

  const button: Element<'async'> = await welcomePage.$('//*[@resource-id="button"]');
  await button.click();

  const registerButton: Element<'async'> = await global.wdio.$(
    '//*[@resource-id="UserSetup"]//*[@resource-id="button"]'
  );

  expect(await registerButton.getText()).toBe('Done');
});
