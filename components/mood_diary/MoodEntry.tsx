import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Title from '../Title';
import { MoodDiaryRoutes } from './MoodDiary';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NEGATIVE, NEUTRAL, POSITIVE } from '../../styles';
import { testId } from '../../util';

type Props = {
  color: string;
  iconName: string;
  linkTo: keyof MoodDiaryRoutes;
  descriptions: string[];
  testID?: string;
};

function MoodButton({ color, descriptions, iconName, linkTo, testID }: Props) {
  const navigation = useNavigation<NavigationProp<MoodDiaryRoutes>>();
  return (
    <Pressable
      onPress={() => navigation.navigate(linkTo)}
      style={[styles.moodButton, { backgroundColor: color }]}
      testID={testID}>
      <View style={styles.moodButtonInner}>
        <FontAwesome5 color="black" name={iconName} size={80} />
        <View style={styles.moodDescriptionList}>
          {descriptions.map((description) => (
            <Text key={description} style={styles.moodDescription}>
              {description}
            </Text>
          ))}
        </View>
      </View>
    </Pressable>
  );
}

export default function MoodEntry() {
  return (
    <>
      <Title back text="Stimmungstagebuch" />
      <View style={styles.container} testID={testId('mood-entry')}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hallo,{'\n'}wie geht's dir?</Text>
        </View>
        <MoodButton
          color={NEGATIVE}
          descriptions={['wütend', 'traurig', 'ängstlich']}
          iconName="frown"
          linkTo="NegativeIntro"
          testID={testId('negative-button')}
        />
        <MoodButton
          color={NEUTRAL}
          descriptions={['unmotiviert', 'müde', 'gleichgültig']}
          iconName="meh"
          linkTo="NeutralIntro"
          testID={testId('neutral-button')}
        />
        <MoodButton
          color={POSITIVE}
          descriptions={['fröhlich', 'aufgeregt', 'entspannt']}
          iconName="smile-beam"
          linkTo="PositiveIntro"
          testID={testId('positive-button')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    maxWidth: 600,
    width: '100%',
  },
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  greetingContainer: {
    justifyContent: 'center',
    flexGrow: 0.2,
    flexShrink: 1,
    flexBasis: 100,
  },
  moodButton: {
    flexGrow: 1,
    flexShrink: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moodButtonInner: {
    flexDirection: 'row',
  },
  moodDescriptionList: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '5%',
    width: 100,
  },
  moodDescription: {
    fontSize: 18,
  },
});
