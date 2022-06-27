import React from 'react';
import OldMotivatorPractice from './OldMotivatorPractice';
import { parseMotivator } from '../MotivatorProps';

export default function SituationControl() {
  const props = parseMotivator('situationControl');
  return (
    <OldMotivatorPractice
      color={props.color}
      exercises={props.exercises}
      icon={props.icon}
      name={props.name}
      screen={'NotImplemented'}
    />
  );
}
