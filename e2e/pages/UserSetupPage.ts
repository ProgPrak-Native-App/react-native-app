import Page from './Page';

class UserSetupPage extends Page {
  get root() {
    return $('id=UserSetup');
  }

  get title() {
    return $('id=title');
  }

  get button() {
    return $('id=button');
  }
}

export default new UserSetupPage();
