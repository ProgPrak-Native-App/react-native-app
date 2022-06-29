import { MotivatorRoutes } from './Motivator';
import React from 'react';
import { Image } from 'react-native';
import { MOTIVATOR } from '../../styles';

export type Exercise = { title: string; screen: keyof MotivatorRoutes };

export type MotivatorTypes = {
  situationControl: undefined;
  relaxation: undefined;
  optimism: undefined;
  reframing: undefined;
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
  screen: 'OldMotivator',
  type: 'situationControl',
};

// Sicherheitsnetz
const relaxation: MotivatorProps = {
  name: 'Sicherheitsnetz',
  description: 'Welche Personen oder Aktivitäten bereiten dir im Alltag Freude und geben dir Antrieb?',
  color: MOTIVATOR.SECURITYNET,
  exercises: mockExercises,
  icon: <Image source={require('../../assets/securitynetIcon.png')} style={{ height: 80, width: 80 }} />,
  screen: 'OldMotivator',
  type: 'relaxation',
};

const optimism: MotivatorProps = {
  name: 'Optimismus',
  description: 'Optimismus heißt, das Gute im Leben zu sehen. Auch, wenn es mal nicht so einfach ist.',
  color: MOTIVATOR.OPTIMISM,
  exercises: mockExercises,
  icon: <Image source={require('../../assets/optimismIcon.png')} style={{ height: 80, width: 80 }} />,
  screen: 'Optimism',
  type: 'optimism',
};

const reframing: MotivatorProps = {
  name: 'Reframing',
  description:
    'Beim Reframing geht es darum, deine eigene Einschätzung der Situation zu überprüfen und ggf. zu einer anderen Interpretation zu kommen.',
  color: MOTIVATOR.REFRAMING,
  exercises: mockExercises,
  icon: <Image source={require('../../assets/reframingIcon.png')} style={{ height: 80, width: 80 }} />,
  screen: 'OldMotivator',
  type: 'reframing',
};

// export parsing of motivator type
export function parseMotivator(name: keyof MotivatorTypes) {
  switch (name) {
    case 'situationControl':
      return situationControl;
    case 'relaxation':
      return relaxation;
    case 'optimism':
      return optimism;
    case 'reframing':
      return reframing;
    case 'noMotivator':
    default:
      return { name: 'Not a Motivator', screen: 'NotImplemented', color: 'white' } as MotivatorProps;
  }
}
