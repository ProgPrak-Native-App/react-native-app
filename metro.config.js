// Learn more https://docs.expo.io/guides/customizing-metro
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  // eslint-disable-next-line no-undef
  return await getDefaultConfig(__dirname);
})();
