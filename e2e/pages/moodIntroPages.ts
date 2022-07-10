import Page from './Page';

class PositiveMoodIntroPage extends Page {
  get root() {
    return $('id=positive-intro');
  }
}

export const positiveMoodIntroPage = new PositiveMoodIntroPage();

class NeutralMoodIntroPage extends Page {
  get root() {
    return $('id=positive-intro');
  }
}

export const neutralMoodIntroPage = new NeutralMoodIntroPage();

class NegativeMoodIntroPage extends Page {
  get root() {
    return $('id=negative-intro');
  }
}

export const negativeMoodIntroPage = new NegativeMoodIntroPage();
