import Page from './Page';

class TabBarPage extends Page {
  get root() {
    return this.home.parentElement();
  }

  get home() {
    return $('id=home-tab');
  }

  get calendar() {
    return $('id=calendar-tab');
  }

  get wiki() {
    return $('id=wiki-tab');
  }

  get exercises() {
    return $('id=exercise-tab');
  }

  get profile() {
    return $('id=profile-tab');
  }
}

export default new TabBarPage();
