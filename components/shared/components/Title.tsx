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
  emergencyButton?: boolean;
};

export default function Title({ text, color, Icon, back, style, emergencyButton }: Props) {
  const navigation = useNavigation<NavigationProp<TabRoutes>>();
  const statusbarInsetHeight = useSafeAreaInsets().top;

  return (
    <View style={[styles.container, STYLES.shadow, { backgroundColor: color ?? PRIMARY }, style]}>
      <View style={{ height: statusbarInsetHeight }} />
      <View style={styles.innerContainer}>
        {back && navigation.canGoBack() && (
          <Pressable onPress={() => navigation.goBack()} style={[styles.button, { left: 5 }]}>
            <AntDesign color="black" name="left" size={30} style={styles.buttonIcon} />
            <Text style={styles.buttonCaption}>Zurück</Text>
          </Pressable>
        )}

        {(emergencyButton ?? true) && (
          <Pressable
            onPress={() => {
              navigation.navigate('EmergencyNumbers');
            }}
            style={[styles.button, { right: 5 }]}>
            <FontAwesome5 name="first-aid" size={30} style={styles.buttonIcon} />
            <Text style={styles.buttonCaption}>Notfall</Text>
          </Pressable>
        )}

        <Text style={styles.text}>{text}</Text>

        {Icon && (
          <View>
            <Icon />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 240,
    height: '33%',
    zIndex: 100,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: 'column',
    elevation: 10,
  },
  innerContainer: {
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    height: 48,
    width: 48,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
  },
  buttonIcon: {
    flexGrow: 1,
  },
  buttonCaption: {
    fontSize: 12,
    flexGrow: 0,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
