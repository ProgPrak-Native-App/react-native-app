import { MotivatorRoutes } from './Motivator';
import React from 'react';
import { Image } from 'react-native';
import { MOTIVATOR, PURPLE } from '../../styles';
import { MaterialIcons } from '@expo/vector-icons';

export type Exercise = { title: string; screen: keyof MotivatorRoutes };

export type MotivatorTypes = {
  situationControl: undefined;
  relaxation: undefined;
  optimism: undefined;
  reframing: undefined;
  socialSupport: undefined;
  compassion: undefined;
  noMotivator: undefined;
};

export type MotivatorProps = {
  name: string;
  type: keyof MotivatorTypes;
  description: string;
  color: string;
  icon: JSX.Element;
  exercises: Exercise[];
  screen: keyof MotivatorRoutes;
};

// mock exercise screens
const mockExercise1: Exercise = { title: 'Übung 1', screen: 'NotImplemented' };
const mockExercise2: Exercise = { title: 'Übung 2', screen: 'NotImplemented' };
const mockExercise3: Exercise = { title: 'Übung 3', screen: 'NotImplemented' };

const mockExercises = [mockExercise1, mockExercise2, mockExercise3];

// Situationskontrolle

const situationControl: MotivatorProps = {
  name: 'Situationskontrolle',
  description:
    'Bei der Situationskontrolle geht es darum, dir einen Plan zu machen, wie du dein aktuelles Problem lösen kannst.',
  color: MOTIVATOR.SITUATIONCONTROLL,
  exercises: mockExercises,
  icon: <Image source={require('../../assets/situationControlIcon.png')} style={{ height: 80, width: 80 }} />,
  screen: 'EmoNavigation',
  type: 'situationControl',
};

// Sicherheitsnetz
const relaxation: MotivatorProps = {
  name: 'Sicherheitsnetz',
  description: 'Welche Personen oder Aktivitäten bereiten dir im Alltag Freude und geben dir Antrieb?',
  color: MOTIVATOR.SECURITYNET,
  exercises: mockExercises,
  icon: <Image source={require('../../assets/securitynetIcon.png')} style={{ height: 80, width: 80 }} />,
  screen: 'SecurityNet',
  type: 'relaxation',
};

// Optimismus
const optimism: MotivatorProps = {
  name: 'Optimismus',
  description: 'Optimismus heißt, das Gute im Leben zu sehen. Auch, wenn es mal nicht so einfach ist.',
  color: MOTIVATOR.OPTIMISM,
  exercises: mockExercises,
  icon: <Image source={require('../../assets/optimismIcon.png')} style={{ height: 80, width: 80 }} />,
  screen: 'Optimism',
  type: 'optimism',
};

// Reframing
const reframing: MotivatorProps = {
  name: 'Reframing',
  description:
    'Beim Reframing geht es darum, deine eigene Einschätzung der Situation zu überprüfen und ggf. zu einer anderen Interpretation zu kommen.',
  color: MOTIVATOR.REFRAMING,
  exercises: mockExercises,
  icon: <Image source={require('../../assets/reframingIcon.png')} style={{ height: 80, width: 80 }} />,
  screen: 'Reframing',
  type: 'reframing',
};

// Soziale Unterstützung
const socialSupport: MotivatorProps = {
  name: 'Soziale Unterstützung',
  description: 'Bei der Sozialen Unterstützung geht es darum, zu sehen welche Ressourcen Du im Umfeld hast.',
  color: MOTIVATOR.SOCIALSUPPORT,
  exercises: mockExercises,
  // TODO add social support icon
  icon: <Image source={require('../../assets/socialSupportIcon.png')} style={{ height: 80, width: 80 }} />,
  screen: 'SocialSupport',
  type: 'socialSupport',
};

// Selbstbezogenes Mitgefühl
const compassion: MotivatorProps = {
  name: 'Selbstbezogenes Mitgefühl',
  description: 'Sei nett zu Dir.',
  color: PURPLE,
  exercises: mockExercises,
  // TODO add social support icon
  icon: <Image source={require('../../assets/compassionIcon.png')} style={{ height: 70, width: 70 }} />,
  screen: 'CompassionNavigation',
  type: 'compassion',
};

// export parsing of motivator type
export function getMotivatorByType(name: keyof MotivatorTypes) {
  switch (name) {
    case 'situationControl':
      return situationControl;
    case 'relaxation':
      return relaxation;
    case 'optimism':
      return optimism;
    case 'reframing':
      return reframing;
    case 'socialSupport':
      return socialSupport;
    case 'compassion':
      return compassion;
    case 'noMotivator':
    default:
      return {
        icon: <MaterialIcons color="black" name="error" size={50} />,
        name: 'Not a Motivator',
        screen: 'NotImplemented',
        color: 'white',
      } as MotivatorProps;
  }
}
