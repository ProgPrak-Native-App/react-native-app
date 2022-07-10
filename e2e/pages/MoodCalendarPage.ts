import Page from './Page';

class MoodCalendarPage extends Page {
  get root() {
    return $('id=mood-calendar');
  }

  get addMoodButton() {
    return $('id=add-mood');
  }
}

export default new MoodCalendarPage();
