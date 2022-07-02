import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MotivatorRoutes } from '../Motivator';
import Carousel from 'react-native-snap-carousel';
import { Pressable } from 'react-native';
import CarouselCardItem, { ITEM_WIDTH, SLIDER_WIDTH } from './CarouselCardItem';
import { MotivatorTypes, getMotivatorByType } from '../MotivatorProps';

type testProps = {
  data: (keyof MotivatorTypes)[];
};

function getMotivatorParams(name: keyof MotivatorTypes) {
  const motivator = getMotivatorByType(name);
  return motivator.screen === 'OldMotivator' ? motivator.type : undefined;
}

export default function CarouselCards(lol: testProps) {
  const isCarousel = React.useRef(null);
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();
  return (
    <Carousel
      data={lol.data}
      itemWidth={ITEM_WIDTH}
      layout="default"
      ref={isCarousel}
      renderItem={function (props: { item: unknown }) {
        const motivator = props.item as keyof MotivatorTypes;
        return (
          <Pressable
            onPress={() =>
              navigation.navigate(getMotivatorByType(motivator).screen, { props: getMotivatorParams(motivator) })
            }>
            <CarouselCardItem item={props.item as keyof MotivatorTypes} />
          </Pressable>
        );
      }}
      sliderWidth={SLIDER_WIDTH}
      vertical={false}
    />
  );
}
