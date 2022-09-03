// Based upon https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/#usage
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScannedCallback, BarCodeScanner, PermissionStatus } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { IntroductionProp } from './Introduction';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useUserContext } from '../UserProvider';
import Enquote from '../shared/Enquote';
import { BLACK, SIZES, WHITE } from '../shared/styles';

export const ACCOUNT_QR_CODE_PREFIX = 'kopfsachen:account/';

const TRANSPARENT_BACKGROUND = '#0006';

export default function AccountQrScanner() {
  const [permission, setPermission] = useState<PermissionStatus>(PermissionStatus.UNDETERMINED);
  const { setAccountKey } = useUserContext();
  const navigation = useNavigation<NavigationProp<IntroductionProp>>();
  const { top: topInset } = useSafeAreaInsets();

  useEffect(() => {
    BarCodeScanner.requestPermissionsAsync().then(({ status }) => setPermission(status));
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = ({ type, data }) => {
    if (type !== BarCodeScanner.Constants.BarCodeType.qr) {
      console.debug('Scanned something other than a qr code, ignoring');
      return;
    } else if (!data.startsWith(ACCOUNT_QR_CODE_PREFIX)) {
      console.debug(`QR code data does not start with '${ACCOUNT_QR_CODE_PREFIX}', ignoring`);
      return;
    }

    const accountKey = data.substring(ACCOUNT_QR_CODE_PREFIX.length);
    // We can't use uuid.validate here because account keys aren't UUIDs, they just look a lot like them :/
    if (accountKey.length !== 36) {
      console.debug(`QR code does not contain a valid account key after '${ACCOUNT_QR_CODE_PREFIX}', ignoring`);
      return;
    }

    setAccountKey(accountKey);
  };

  if (permission === PermissionStatus.GRANTED) {
    return (
      <View style={styles.container}>
        <View style={[styles.explanation, { paddingTop: topInset }]}>
          <View style={styles.explanationLine}>
            <Text style={styles.explanationNumber}>1</Text>
            <Text style={styles.explanationText}>Öffne die Kopfsachen-App auf deinem alten Gerät</Text>
          </View>
          <View style={[styles.explanationLine, { marginVertical: 20 }]}>
            <Text style={styles.explanationNumber}>2</Text>
            <Text style={styles.explanationText}>
              Gehe unter <Enquote>Profil</Enquote> auf <Enquote>Profil übertragen</Enquote>
            </Text>
          </View>
          <View style={styles.explanationLine}>
            <Text style={styles.explanationNumber}>3</Text>
            <Text style={styles.explanationText}>Scanne den QR Code hier</Text>
          </View>
        </View>
        <View style={styles.scanner}>
          <BarCodeScanner
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            onBarCodeScanned={handleBarCodeScanned}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.reticle} />
        </View>
        <View style={styles.footer}>
          <Text onPress={() => navigation.navigate('UserSetup')} style={styles.footerButton}>
            Abbrechen
          </Text>
          <View style={styles.footerSpacer} />
          <Text style={styles.footerButton}>Manuell eingeben</Text>
        </View>
      </View>
    );
  } else if (permission === PermissionStatus.UNDETERMINED) {
    return <Text style={styles.permissionMessage}>Frage Kamerazugriff an</Text>;
  } else {
    return <Text style={styles.permissionMessage}>Kein Kamerazugriff :(</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: BLACK,
  },
  explanation: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: 15,
    zIndex: 1,
    backgroundColor: TRANSPARENT_BACKGROUND,
  },
  explanationLine: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  explanationText: {
    color: WHITE,
    fontSize: SIZES.font,
    marginLeft: 10,
    marginVertical: '-100%',
    overflow: 'visible',
  },
  explanationNumber: {
    color: WHITE,
    fontSize: SIZES.font + 1,
    borderRadius: 100,
    borderColor: WHITE,
    borderWidth: 1,
    width: 30,
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  reticle: {
    width: 256,
    height: 256,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderWidth: 5,
    borderColor: WHITE,
    borderRadius: 10,
    borderStyle: 'dashed',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: TRANSPARENT_BACKGROUND,
    height: '5%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  footerButton: {
    color: WHITE,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: SIZES.font,
    flexBasis: 0,
    flexGrow: 1,
  },
  footerSpacer: {
    borderLeftWidth: 2,
    borderLeftColor: WHITE,
    height: '100%',
  },
  scanner: {
    ...StyleSheet.absoluteFillObject,
    top: 100,
  },
  permissionMessage: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: BLACK,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: SIZES.font + 2,
  },
});
