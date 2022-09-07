import { useUserContext } from '../UserProvider';
import React, { useEffect, useState } from 'react';
import * as QRCode from 'qrcode';
import { SvgXml } from 'react-native-svg';
import { StyleSheet, Text, View } from 'react-native';
import { SIZES, WHITE } from '../shared/styles';
import { ACCOUNT_QR_CODE_PREFIX } from '../first_start/AccountQrScanner';

export default function ProfileExport() {
  const [qrCodeXml, setQrCodeXml] = useState<string>();
  const { accountKey } = useUserContext();

  useEffect(() => {
    if (accountKey) {
      QRCode.toString(`${ACCOUNT_QR_CODE_PREFIX}${accountKey}`)
        .then(setQrCodeXml)
        .catch((e) => {
          console.error(e);
          setQrCodeXml(undefined);
        });
    } else {
      setQrCodeXml(undefined);
    }
  }, [accountKey]);

  if (accountKey && qrCodeXml) {
    return (
      <View style={styles.container}>
        <Text style={styles.explanationText}>
          Wenn du die Kopfsachen-App auf einem zweiten Gerät nutzen möchtest, kannst du diesen QR-Code damit scannen, um
          auf beiden Geräten dasselbe Profil zu nutzen.
        </Text>
        <Text></Text>
        <Text style={styles.accountKeyText}>
          Dein Profil-Schlüssel ist
          {'\n'}
          <Text style={styles.monospace}>{accountKey}</Text>
          {'\n'}
          Gib ihn niemals an Andere weiter!
        </Text>
        <View style={styles.qrCode}>
          <SvgXml xml={qrCodeXml} />
        </View>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  explanationText: {
    fontSize: SIZES.font,
    marginTop: SIZES.max_margin,
    marginHorizontal: SIZES.max_margin,
    marginBottom: SIZES.min_margin,
  },
  accountKeyText: {
    fontSize: SIZES.font - 2,
    marginTop: 'auto',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    minHeight: '10%',
  },
  qrCode: {
    flexGrow: 1,
    flexShrink: 1,
    aspectRatio: 1,
  },
  monospace: {
    fontFamily: 'monospace',
  },
});
