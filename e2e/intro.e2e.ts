import welcomePage from './pages/WelcomePage';
import userSetupPage from './pages/UserSetupPage';
import homePage from './pages/HomePage';

describe('intro', () => {
  it('first start', async () => {
    await expect(await welcomePage.title).toHaveText('Herzlich Willkommen!');

    await (await welcomePage.button).click();

    await expect(userSetupPage).toBeDisplayed();

    await expect(userSetupPage.button).toHaveText('Done');

    await (await userSetupPage.button).click();

    await expect(homePage).toBeDisplayed();
  });
});
