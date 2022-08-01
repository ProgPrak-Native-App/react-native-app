// eslint-disable-next-line import/no-anonymous-default-export
import { version } from './package.json';

export default ({}) => {
  return {
    owner: 'progprak_kopfsachen',
    name: 'Kopfsachen-Native-App',
    slug: 'kopfsachen',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'org.kopfsachen.app',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#CAE2E2',
      },
      package: 'org.kopfsachen.app',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    version: version || '1.0.0',
    extra: {
      // Available environments: live, dev, stage
      environment: process.env.NODE_ENV ?? 'dev',
    },
  };
};
