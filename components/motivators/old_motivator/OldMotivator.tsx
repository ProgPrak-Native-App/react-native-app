import React from 'react';
import OldMotivatorPractice from './OldMotivatorPractice';
import { MotivatorTypes, getMotivatorByType } from '../MotivatorProps';

export default function OldMotivator({ route }: any) {
  const props = getMotivatorByType(route.params.props as keyof MotivatorTypes);
  return (
    <>
      <OldMotivatorPractice
        color={props.color}
        description={props.description}
        exercises={props.exercises}
        icon={props.icon}
        name={props.name}
        screen={props.screen}
        type={props.type}
      />
    </>
  );
}
