import { StyleSheet } from 'react-native';

export const PRIMARY = '#00D08E';
export const SECONDARY = '#00a954';
export const TERTIARY = '#EED2BA';

export const POSITIVE = '#FDE802';
export const NEUTRAL = '#F3803E';
export const NEGATIVE = '#BB9AF3';

export const BACKGROUND = '#f2f2f2';
export const SHADOW_COLOR = '#171717';
export const ERROR = '#ff0000';

export const DARK_GREEN = '#00A873';
export const WHITE = '#fff';
export const BLACK = '#000';
export const INNER_CIRCLE = '#f9bf9e';
export const ACCENT = '#006646';

export const MOTIVATOR = {
  DEFAULT: '#f2c7d0',
  SITUATIONCONTROLL: '#f2c7d0',
  SECURITYNET: '#EAFAFE',
  OPTIMISM: '#FDE802',
  REFRAMING: '#F2C7D0',
  SOCIALSUPPORT: '#F3803E',
};

export const ORANGE = '#F3803E';
export const PURPLE = '#BB9AF3';
export const PINK = '#F2C7D0';
export const BLUE = '#4682b4';
export const LIGHT_BLUE = '#EAFAFE';
export const RED = '#ED6E6F';
export const LIGHT_YELLOW = '#FCF7CB';
export const DARK_YELLOW = '#FECB87';
export const NAVY = '#A28FFF';
export const GREY = '#c0c0c0';
export const DARK_GREY = '#808080';

/* ----- sytles ---- */
export const SIZES = {
  font: 18,
  default_line_height: 1.5 * 18,
  default_pSpace: 1.5 * 1.5 * 18,
  min_margin: 8,
  max_margin: 32,
  target_size: 48,
};

/* ---- Layout Colors --- */
export const LAYOUT_COLOR_SAFEAREA_BACKGROUND = BACKGROUND;

/* ---- Card Colors --- */
export const CARD_BACKGROUND_COLOR = '#DCDCDE';

export const STYLES = StyleSheet.create({
  shadow: {
    elevation: 4,
    shadowColor: SHADOW_COLOR,
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
