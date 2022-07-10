import { Dimensions, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { PRIMARY, SHADOW } from '../styles';
import React from 'react';
import { NavigationProp, NavigationState, useNavigation } from '@react-navigation/native';
import { TabRoutes } from './Routes';

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

  return (
    <View style={[styles.container, { backgroundColor: color ?? PRIMARY }, style]}>
      {back && navigation.canGoBack() && (
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign color="black" name="left" size={30} />
          <Text style={{ left: -5, fontSize: 12 }}>Zurück</Text>
        </Pressable>
      )}
      <Text style={styles.text}>{text}</Text>
      {Icon && (
        <View style={styles.icon}>
          <Icon />
        </View>
      )}
      <Pressable
        onPress={() => {
          mainNav.navigate('EmergencyNumbers');
        }}
        style={styles.firstAidBtn}>
        <FontAwesome5 name="first-aid" size={30} />
        <Text style={{ fontSize: 11 }}>Notfall</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstAidBtn: {
    position: 'absolute',
    top: 15,
    right: 15,
    height: 48,
    width: 48,
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 11,
  },
  container: {
    zIndex: 100,
    height: Dimensions.get('window').height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: SHADOW,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    marginTop: 20,
  },
});
