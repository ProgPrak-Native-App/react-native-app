import tabBarPage from './pages/TabBarPage';
import moodCalendarPage from './pages/MoodCalendarPage';
import moodEntryPage from './pages/MoodEntryPage';
import { negativeMoodIntroPage, neutralMoodIntroPage, positiveMoodIntroPage } from './pages/moodIntroPages';
import welcomePage from './pages/WelcomePage';
import userSetupPage from './pages/UserSetupPage';

describe('mood diary', () => {
  beforeEach(async () => {
    await welcomePage.button.click();
    await userSetupPage.button.click();
    await tabBarPage.calendar.click();
    await moodCalendarPage.addMoodButton.click();
    await expect(moodEntryPage).toBeDisplayed();
  });

  it('negative mood entry', async () => {
    await moodEntryPage.negativeButton.click();
    await expect(negativeMoodIntroPage).toBeDisplayed();
  });

  it('neutral mood entry', async () => {
    await moodEntryPage.neutralButton.click();
    await expect(neutralMoodIntroPage).toBeDisplayed();
  });

  it('positive mood entry', async () => {
    await moodEntryPage.positiveButton.click();
    await expect(positiveMoodIntroPage).toBeDisplayed();
  });
});
