import React from 'react';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MOTIVATOR, PURPLE } from '../shared/styles';
import { MotivatorImplRoutes } from './MotivatorNavigator';

export type Motivator = {
  name: string;
  type: MotivatorName;
  description: string;
  color: string;
  icon: JSX.Element;
  screen: keyof MotivatorImplRoutes;
};

// Situationskontrolle

const situationControl: Motivator = {
  name: 'Situationskontrolle',
  description:
    'Bei der Situationskontrolle geht es darum, dir einen Plan zu machen, wie du dein aktuelles Problem lösen kannst.',
  color: MOTIVATOR.SITUATIONCONTROLL,
  icon: <Image source={require('../../assets/situationControlIcon.png')} style={{ height: 80, width: 80 }} />,
  screen: 'EmoNavigation',
  type: 'situationControl',
};

// Sicherheitsnetz
const relaxation: Motivator = {
  name: 'Sicherheitsnetz',
  description: 'Welche Personen oder Aktivitäten bereiten dir im Alltag Freude und geben dir Antrieb?',
  color: MOTIVATOR.SECURITYNET,
  icon: <Image source={require('../../assets/securitynetIcon.png')} style={{ height: 80, width: 80 }} />,
  screen: 'SecurityNet',
  type: 'relaxation',
};

// Optimismus
const optimism: Motivator = {
  name: 'Optimismus',
  description: 'Optimismus heißt, das Gute im Leben zu sehen. Auch, wenn es mal nicht so einfach ist.',
  color: MOTIVATOR.OPTIMISM,
  icon: <Image source={require('../../assets/optimismIcon.png')} style={{ height: 80, width: 80 }} />,
  screen: 'Optimism',
  type: 'optimism',
};

// Reframing
const reframing: Motivator = {
  name: 'Reframing',
  description:
    'Beim Reframing geht es darum, deine eigene Einschätzung der Situation zu überprüfen und ggf. zu einer anderen Interpretation zu kommen.',
  color: MOTIVATOR.REFRAMING,
  icon: <Image source={require('../../assets/reframingIcon.png')} style={{ height: 80, width: 80 }} />,
  screen: 'Reframing',
  type: 'reframing',
};

// Soziale Unterstützung
const socialSupport: Motivator = {
  name: 'Soziale Unterstützung',
  description: 'Bei der Sozialen Unterstützung geht es darum, zu sehen welche Ressourcen Du im Umfeld hast.',
  color: MOTIVATOR.SOCIALSUPPORT,
  // TODO add social support icon
  icon: <Image source={require('../../assets/socialSupportIcon.png')} style={{ height: 80, width: 80 }} />,
  screen: 'SocialSupport',
  type: 'socialSupport',
};

// Selbstbezogenes Mitgefühl
const compassion: Motivator = {
  name: 'Selbstbezogenes Mitgefühl',
  description: 'Sei nett zu Dir.',
  color: PURPLE,
  // TODO add social support icon
  icon: <Image source={require('../../assets/compassionIcon.png')} style={{ height: 70, width: 70 }} />,
  screen: 'CompassionNavigation',
  type: 'compassion',
};

export type MotivatorName =
  | 'situationControl'
  | 'relaxation'
  | 'optimism'
  | 'reframing'
  | 'socialSupport'
  | 'compassion'
  | 'noMotivator';

export const motivators: Record<MotivatorName, Motivator> = {
  situationControl,
  relaxation,
  optimism,
  reframing,
  socialSupport,
  compassion,
  noMotivator: {
    type: 'noMotivator',
    icon: <MaterialIcons color="black" name="error" size={50} />,
    name: 'Not a Motivator',
    screen: 'NotImplemented',
    color: 'white',
    description: '',
  },
};

/**
 * @deprecated use `motivatorTypes[name]` instead
 */
export function getMotivatorByType(name: MotivatorName): Motivator {
  return motivators[name];
}
