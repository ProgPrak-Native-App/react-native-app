import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MotivatorRoutes } from '../Motivator';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Pressable, StyleSheet, View } from 'react-native';
import CarouselCardItem, { ITEM_WIDTH, SLIDER_WIDTH } from './CarouselCardItem';
import { getMotivatorByType, MotivatorTypes } from '../MotivatorProps';
import { AntDesign } from '@expo/vector-icons';

function getMotivatorParams(name: keyof MotivatorTypes) {
  const motivator = getMotivatorByType(name);
  return motivator.screen === 'OldMotivator' ? motivator.type : undefined;
}

export default function CarouselCards(props: { data: (keyof MotivatorTypes)[] }) {
  const carouselRef = React.createRef<any>();
  const [index, setIndex] = useState(0);
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();

  function getRenderItem() {
    return function (props: { item: unknown }) {
      const motivator = props.item as keyof MotivatorTypes;
      return (
        <Pressable
          onPress={() =>
            navigation.navigate(getMotivatorByType(motivator).screen, { props: getMotivatorParams(motivator) })
          }
          style={{ paddingBottom: 15 }}>
          <CarouselCardItem item={props.item as keyof MotivatorTypes} />
        </Pressable>
      );
    };
  }

  return (
    <>
      <View style={styles.indicatorArrows}>
        <AntDesign
          accessibilityHint={'vorheriger Starkmacher'}
          color="black"
          name="left"
          onPress={() => carouselRef.current.snapToPrev()}
          size={40}
        />

        <Pagination activeDotIndex={index} carouselRef={carouselRef} dotsLength={props.data.length} />

        <AntDesign
          accessibilityHint={'nächster Starkmacher'}
          color="black"
          name="right"
          onPress={() => {
            carouselRef.current.snapToNext();
          }}
          size={40}
        />
      </View>

      <Carousel
        data={props.data}
        itemWidth={ITEM_WIDTH}
        loop={true}
        onSnapToItem={(newIndex) => setIndex(newIndex)}
        ref={carouselRef}
        renderItem={getRenderItem()}
        sliderWidth={SLIDER_WIDTH}
        useScrollView={true}
        vertical={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  indicatorArrows: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingBottom: 15,
    width: '100%',
  },
});
