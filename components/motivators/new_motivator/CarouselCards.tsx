import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MotivatorRoutes } from '../Motivator';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Pressable } from 'react-native';
import CarouselCardItem, { ITEM_WIDTH, SLIDER_WIDTH } from './CarouselCardItem';
import { getMotivatorByType, MotivatorTypes } from '../MotivatorProps';
import { backgroundColor } from 'react-native-calendars/src/style';
import { AntDesign } from '@expo/vector-icons';

function getMotivatorParams(name: keyof MotivatorTypes) {
  const motivator = getMotivatorByType(name);
  return motivator.screen === 'OldMotivator' ? motivator.type : undefined;
}

export default function CarouselCards(props: { data: (keyof MotivatorTypes)[] }) {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = useState(0);
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();

  function getRenderItem() {
    return function (props: { item: unknown }) {
      const motivator = props.item as keyof MotivatorTypes;
      return (
        <Pressable
          onPress={() =>
            navigation.navigate(getMotivatorByType(motivator).screen, { props: getMotivatorParams(motivator) })
          }>
          <CarouselCardItem item={props.item as keyof MotivatorTypes} />
        </Pressable>
      );
    };
  }

  return (
    <>
      <Carousel
        data={props.data}
        itemWidth={ITEM_WIDTH}
        layout="default"
        onSnapToItem={(newIndex) => setIndex(newIndex)}
        ref={isCarousel}
        renderItem={getRenderItem()}
        sliderWidth={SLIDER_WIDTH}
        vertical={false}
      />
    </>
  );
}
