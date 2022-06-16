import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {getMoods, Mood} from '../../api';
import {Calendar} from 'react-native-calendars/src';
import {DateData} from 'react-native-calendars/src/types';
import BasicDay from 'react-native-calendars/src/calendar/day/basic';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {LocaleConfig} from 'react-native-calendars';
import {LocalDate, LocalDateTime} from '@js-joda/core';
import Title from '../Title';
import {MoodDiaryRoutes} from './MoodDiary';

LocaleConfig.locales.de = {
  monthNames: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
  monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
};
LocaleConfig.defaultLocale = 'de';

function DayWithMood({mood}: {mood: Mood}) {
  if (mood.type === 'positive') {
    return <Image source={require('../../assets/emoji_happy.png')} style={styles.icon} />;
  } else if (mood.type === 'neutral') {
    return <Image source={require('../../assets/emoji_neutral.png')} style={styles.icon} />;
  } else {
    return <Image source={require('../../assets/emoji_sad.png')} style={styles.icon} />;
  }
}

function AddMoodButton() {
  const navigation = useNavigation<NavigationProp<MoodDiaryRoutes>>();
  return (
    <Pressable onPress={() => navigation.navigate('MoodEntry')}>
      <Image source={require('../../assets/icon_plus.png')} style={styles.icon} />
    </Pressable>
  );
}

const Day = (moods: Mood[]) => (props: {date?: DateData}) => {
  const date = LocalDate.parse(props.date!.dateString);
  const moodAtDate = moods.find(mood => LocalDateTime.parse(mood.timestamp).toLocalDate().equals(date));
  if (moodAtDate) {
    // User has previously entered a mood for this day, so we show it
    return <DayWithMood mood={moodAtDate} />;
  } else if (date.equals(LocalDate.now())) {
    // We show the button to enter today's mood
    return <AddMoodButton />;
  } else {
    // User has not entered a mood for this day, so we use react-native-calendars' default day component
    return <BasicDay {...props} date={props.date?.dateString} state='inactive' />;
  }
};

export default function MoodCalendar() {
  const [moods, setMoods] = useState<Mood[] | null>(null);
  useEffect(() => {
    getMoods().then(setMoods);
  }, []);

  return (
    <>
      <Title text='Stimmungstagebuch' />
      <Calendar
        dayComponent={Day(moods ?? [])}
        displayLoadingIndicator={moods === null}
        theme={{calendarBackground: undefined}}
      />
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
