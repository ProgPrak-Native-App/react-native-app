import Page from './Page';

class HomePage extends Page {
  get root() {
    return $('id=HomePage');
  }
}

export default new HomePage();
