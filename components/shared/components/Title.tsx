import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { PRIMARY, STYLES } from '../styles';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TabRoutes } from '../../Routes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  text: string;
  color?: string;
  Icon?: () => JSX.Element;
  back?: true;
  style?: StyleProp<ViewStyle>;
};

export default function Title({ text, color, Icon, back, style }: Props) {
  const navigation = useNavigation<NavigationProp<never>>();
  const mainNav = useNavigation<NavigationProp<TabRoutes>>();
  const STATUSBAR_INSET_HEIGHT = useSafeAreaInsets().top;

  return (
    <View style={[styles.container, STYLES.shadow, { backgroundColor: color ?? PRIMARY }, style]}>
      <View style={[styles.buttonContainer, { paddingTop: STATUSBAR_INSET_HEIGHT }]}>
        <Pressable
          onPress={() => {
            mainNav.navigate('EmergencyNumbers');
          }}
          style={styles.firstAidBtn}>
          <FontAwesome5 name="first-aid" size={30} />
          <Text style={{ fontSize: 11 }}>Notfall</Text>
        </Pressable>
        {back && navigation.canGoBack() && (
          <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
            <AntDesign color="black" name="left" size={30} />
            <Text style={{ left: -5, fontSize: 12 }}>Zurück</Text>
          </Pressable>
        )}
      </View>

      <Text style={styles.text}>{text}</Text>

      {Icon ? (
        <View>
          <Icon />
        </View>
      ) : (
        <View />
      )}

      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstAidBtn: {
    height: 48,
    width: 48,
    alignItems: 'center',
    fontSize: 11,
  },
  container: {
    maxHeight: 240,
    height: '33%',
    zIndex: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
