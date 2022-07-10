import Page from './Page';

class MoodCalendarPage extends Page {
  get root() {
    return $('id=mood-entry');
  }

  get negativeButton() {
    return $('id=negative-button');
  }

  get neutralButton() {
    return $('id=neutral-button');
  }

  get positiveButton() {
    return $('id=positive-button');
  }
}

export default new MoodCalendarPage();
