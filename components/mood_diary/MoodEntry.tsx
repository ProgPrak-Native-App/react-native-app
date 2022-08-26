import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Title from '../shared/components/Title';
import { MoodDiaryRoutes } from './MoodDiary';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NEGATIVE, NEUTRAL, POSITIVE } from '../shared/styles';

function MoodButton(props: { color: string; iconName: string; linkTo: keyof MoodDiaryRoutes; descriptions: string[] }) {
  const navigation = useNavigation<NavigationProp<MoodDiaryRoutes>>();
  const { color, iconName, linkTo, descriptions } = props;
  return (
    <Pressable onPress={() => navigation.navigate(linkTo)} style={[styles.moodButton, { backgroundColor: color }]}>
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
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hallo,{'\n'}wie geht's dir?</Text>
        </View>
        <MoodButton
          color={NEGATIVE}
          descriptions={['wütend', 'traurig', 'ängstlich']}
          iconName="frown"
          linkTo="NegativeIntro"
        />
        <MoodButton
          color={NEUTRAL}
          descriptions={['unmotiviert', 'müde', 'gleichgültig']}
          iconName="meh"
          linkTo="NeutralIntro"
        />
        <MoodButton
          color={POSITIVE}
          descriptions={['fröhlich', 'aufgeregt', 'entspannt']}
          iconName="smile-beam"
          linkTo="PositiveIntro"
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
