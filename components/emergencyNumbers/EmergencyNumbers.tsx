import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Linking,
  ImageSourcePropType,
} from 'react-native';
import KsButton, { KsButtonProp } from '../shared/button/KsButton';
import Card from '../shared/layout/Card';
import { emergencies } from '../../assets/data/emergency';
import { Emergency } from '../shared/model/emergency';
import Title from '../Title';

export default function EmergencyNumbers() {
  return (
    <ScrollView style={styles.emergencyCardsContainer}>
      {/* Cover Container */}
      <Title text="Externe Hilfe" />
      {/* Description Card */}
      <Card color="#F4F5F7">
        <Text style={styles.descriptionText}>
          Wenn du gerade nicht mehr weiter weißt gibt es viele externe Hilfsangebote, die dich in jeder Lage
          unterstützen.
        </Text>
      </Card>
      {/* */}
      <Text style={styles.guidanceTitle}>Online Beratung</Text>
      {/* Emergencies */}
      {emergencies.map((emergency: Emergency, index) => {
        return (
          <Card key={index}>
            {/*  Logo Header as button */}
            <TouchableHighlight
              onPress={() => Linking.openURL(emergency.website.link)}
              style={{ padding: 6, borderRadius: 6 }}
              underlayColor="#c7c7c7">
              <Image
                accessibilityLabel={emergency.title}
                source={emergency.logo as ImageSourcePropType}
                style={styles.emergencyLogo}></Image>
            </TouchableHighlight>
            {/* Card Body */}
            <View style={styles.emergencyCardButtonContainer}>
              {/* Emergency service features */}
              {emergency.buttons.map((button: KsButtonProp, buttonIndex) => {
                return (
                  <KsButton backgroundColor="#FFFFFF" icon={button.icon} key={buttonIndex} link={button.link}>
                    <View>
                      <Text style={styles.emergencyButtonLabel}>{button.label}</Text>
                      {!!button.description && <Text>{button.description}</Text>}
                    </View>
                  </KsButton>
                );
              })}
            </View>
          </Card>
        );
      })}
    </ScrollView>
  );
}

const BACKGROUND_COLOR = '#f7f7f7';

const styles = StyleSheet.create({
  descriptionText: {
    textAlign: 'center',
  },
  emergencyLogo: {
    width: '100%',
    height: 125,
    backgroundColor: BACKGROUND_COLOR,
    resizeMode: 'contain',
    borderRadius: 6,
  },

  emergencyCardsContainer: {
    marginTop: 8,
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
    flexDirection: 'column',
    overflow: 'visible',
  },

  emergencyCardButtonContainer: {
    marginTop: 8,
    padding: 6,
  },

  emergencyButtonLabel: {
    fontWeight: 'bold',
  },

  guidanceTitle: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 26,
    textAlign: 'left',
    paddingLeft: 16,
    paddingTop: 10,
    backgroundColor: BACKGROUND_COLOR,
  },
});
