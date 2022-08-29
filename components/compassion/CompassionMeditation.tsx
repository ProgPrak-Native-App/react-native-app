import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Audio, AVPlaybackStatus } from 'expo-av';
import Slider from '@react-native-community/slider';
import track from '../../assets/Compassion-Meditation-Example.mp3';
import { getMotivatorByType } from '../motivators/model';
import { BLACK, DARK_GREEN, GREY, PRIMARY, PURPLE, SIZES, TERTIARY } from '../shared/styles';
import Title from '../shared/components/Title';
import Bold from '../shared/Bold';
import { MotivatorRoutes } from '../motivators/MotivatorNavigator';

/** source code for audio player:
 * https://github.com/expo/playlist-example/blob/master/App.js
 */

export default function CompassionMeditation() {
  async function setUpSound() {
    const { sound, status } = await Audio.Sound.createAsync(track, initalStatus, onPlaybackStatusUpdate);
    setStatus(status);
    return sound;
  }

  const props = getMotivatorByType('compassion');
  const { navigate } = useNavigation<NavigationProp<MotivatorRoutes>>();

  const [shouldPlayAtEndOfSeek, setShouldPlayAtEndOfSeek] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [sound, setSound] = useState(new Audio.Sound());
  const [durationString, setDurationString] = useState('');
  const [duration, setDuration] = useState(0);

  const [status, setStatus] = useState<any>({
    muted: false,
    playbackInstancePosition: null,
    playbackInstanceDuration: null,
    shouldPlay: false,
    isPlaying: false,
    isBuffering: false,
    isLoading: true,
    shouldCorrectPitch: true,
    volume: 1.0,
    rate: 1.0,
    poster: false,
    useNativeControls: false,
    fullscreen: false,
    throughEarpiece: false,
  });

  const initalStatus = {
    shouldPlay: isPlaying,
    rate: 1.0,
    volume: 1.0,
  };

  /** if status changes of playback */
  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (sound && status.isLoaded) {
      setStatus({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        shouldCorrectPitch: status.shouldCorrectPitch,
      });
    }
  };

  /** handle press play / pause */
  const onPlayPausePressed = () => {
    if (sound !== undefined) {
      if (isPlaying) {
        sound.pauseAsync();
      } else {
        sound.playAsync();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  /** if slider is manually moved calculate new position etc */
  const onSeekSliderValueChange = () => {
    if (status.playbackInstance !== undefined && !isSeeking && sound !== undefined) {
      setIsSeeking(true);
      setShouldPlayAtEndOfSeek(status.shouldPlay);
      sound.pauseAsync();
    }
  };

  /** if slider is moved manually, play sound at point rom where it was put  */
  const onSeekSliderSlidingComplete = async (value: number) => {
    if (sound !== undefined) {
      setIsSeeking(false);
      const seekPosition = value * duration;
      if (!Number.isNaN(seekPosition)) {
        if (shouldPlayAtEndOfSeek) {
          sound.playFromPositionAsync(seekPosition);
        } else {
          sound.setPositionAsync(seekPosition);
        }
      }
    }
  };

  /** source code for millisToMinutesAndSeconds func:
   * https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript */
  const millisToMinutesAndSeconds = (milliSeconds: number) => {
    const minutes = Math.floor(milliSeconds / 60000);
    const seconds = parseFloat(((milliSeconds % 60000) / 1000).toFixed(0));
    return seconds === 60 ? minutes + 1 + ':00' : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  /** advance slider according to how long we have already listen */
  const getSeekSliderPosition = () => {
    if (sound !== undefined && status.playbackInstancePosition !== undefined && status.durationMillis !== undefined) {
      return status.playbackInstancePosition / status.durationMillis;
    }
    return 0;
  };

  /** function to catch undefined before getting mill seconds to m:ss string  */
  const getMilliSecondsPassed = () => {
    if (status.playbackInstancePosition !== undefined) {
      return millisToMinutesAndSeconds(status.playbackInstancePosition);
    }
    return '0:00';
  };

  /** setting async sound */
  useEffect(() => {
    setUpSound().then(setSound);
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, []);

  /** unload for goingBackwards, with clean up function for unmouted components :) */
  useEffect(() => {
    return sound
      ? () => {
          // console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  /** unload for going forward */
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        sound.unloadAsync();
      };
    }, [sound])
  );
  /** set duration after status has figured out how long it is */
  useEffect(() => {
    if (status.durationMillis !== undefined) {
      setDurationString(millisToMinutesAndSeconds(status.durationMillis));
      setDuration(status.durationMillis);
    }
  }, [status]);

  return (
    <>
      <Title Icon={() => props.icon} back color={PURPLE} text="Selbstbezogenes Mitgefühl" />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>
            Begib dich an einen <Bold>ungestörten Ort, </Bold>
            suche dir eine <Bold>bequeme Position</Bold> im Sitzen und starte die Meditation.
          </Text>
          <Image source={require('../../assets/Compassion_Meditation_Cover.png')} style={styles.img} />
          <Text style={styles.title}>Mitgefühl Meditation</Text>
          <Slider
            disabled={status.isLoading}
            maximumTrackTintColor={GREY}
            onSlidingComplete={onSeekSliderSlidingComplete}
            onValueChange={onSeekSliderValueChange}
            style={{ alignSelf: 'stretch' }}
            thumbTintColor={DARK_GREEN}
            value={getSeekSliderPosition()}
          />
          <View
            style={{
              marginHorizontal: 5,
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ width: 42 }}>
              <Text style={styles.minutes}>{getMilliSecondsPassed()}</Text>
            </View>
            <Pressable onPress={onPlayPausePressed} style={{ alignItems: 'center' }}>
              <AntDesign color="black" name={isPlaying ? 'pausecircleo' : 'playcircleo'} size={50} />
            </Pressable>
            <Text style={styles.minutes}>{durationString}</Text>
          </View>
          <Pressable
            onPress={() => navigate('Feedback', { motivator: 'compassion' })}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.button]}>
            <Text style={styles.text}>Geschafft!</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingBottom: 40,
    width: '80%',
    height: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
    flex: 0,
  },
  img: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    maxWidth: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 25,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: SIZES.font,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
  },
  minutes: {
    fontSize: SIZES.font,
  },
  button: {
    marginTop: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: BLACK,
    minHeight: SIZES.target_size,
    padding: 15,
  },
  heading: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: SIZES.font * 1.2,
    lineHeight: SIZES.default_line_height,
    marginBottom: 10,
  },
});
