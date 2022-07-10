import Page from './Page';

class WelcomePage extends Page {
  get root() {
    return $('id=WelcomePage');
  }

  get title() {
    return $('id=title');
  }

  get button() {
    return $('id=button');
  }
}

export default new WelcomePage();
