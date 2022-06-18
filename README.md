<h1 align="center"> Kopfsachen Native App </h1>

<p align="center">
Kopfsachen Native App is a <a href="https://reactnative.dev">React Native</a> based App build for <a href="https://www.kopfsachen.org">Kopfsachen eV.</a> which is an association for the promotion of young people's mental health. (add intended use here) For development and prototyping we use <a href="https://expo.dev">Expo</a>.
</p>

<p align="center">
  <a href="LICENSE.md">
    <img alt="GitHub license" src="https://img.shields.io/badge/license-MIT-brightgreen">
  </a>
  <a href="https://github.com/ProgPrak-Native-App/react-native-app/releases">
    <img alt="GitHub package version" src="https://img.shields.io/badge/version-v0.1.0-orange">
  </a>
  <a href="https://github.com/ProgPrak-Native-App/react-native-app/compare">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome">
  </a>
  <a href="https://expo.dev">
    <img alt="runs with expo" src="https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat&logo=EXPO&labelColor=ffffff&logoColor=000">
  </a>
</p>

---
## Contents
- [Latest Release](#-latest-release)
- [Usage](#-usage)
- [Limitations](#-limitations)
- [Contributing](#-contributing)
- [Credits](#-credits)
- [License](#-license)

## 🎉 Latest Release
The latest Expo release is available on the default Expo release-channel [here](https://expo.dev/@progprak_kopfsachen/kopfsachen?release-channel=default).

You can also scan the QR code with the Expo Go app on your phone:

<img alt="Expo QR" src="https://qr.expo.dev/expo-go?owner=progprak_kopfsachen&slug=kopfsachen&releaseChannel=default" width="200" height="200">

## 🚀 Usage
### Prerequisites
- Create an Expo account [here](http://expo.dev/signup)
- Install Expo with `npm install --global expo-cli`
- Login to Expo with `expo login`
- Verify installation with `expo whoami`

Optionally, decide on which platform you want to run the App. The easiest way is running it in your browser of choice.

Alternatively, install `Expo Go` on your phone for mobile use or `iOS Simulator` / `Android Emulator` for running the App locally.

### Run
In the root directory of the cloned repo, run `expo start` to start Expo. From here, use the context menu to compile and launch the App on the platform of your choice.
It should look something like this:

```
› Metro waiting on exp://192.168.68.109:19000
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
› Press d │ show developer tools
› shift+d │ toggle auto opening developer tools on startup (disabled)

› Press ? │ show all commands
```
There you go! You are now running our App and are free to explore.

### Publish
If you want to publish a version of your app using Expo run the following:

`expo publish --release-channel={YOUR_RELEASE_CHANNEL}`

Make sure to replace the release channel with an appropriate name.

### Build
To build a version of the app for internal distribution, it is advised to use `eas-cli`. This can be done either locally or using the Expo services.

```bash
# Install eas-cli
npm install -g eas-cli

# Check wether you are logged in already
eas whoami

# If you are not logged in, login to Expo
eas login

# Build for Android
eas build -p android --profile=preview --local

# Build for iOS
eas build -p ios --profile=preview --local
```

To build using Expo services, remove the `--local` tag from the build command.
This can be especially helpful if you have problems building locally or just want to leave the heavy lifting to Expo.
To specify the output path, use the `--output={/path/filename}` tag.

## ❌ Limitations

Unfortunately, there are some limitations when it comes to developing cross-platform.
- Building an `.ipa` for distribution on iOS devices is not possible without being enrolled in the [Apple Developer Program](https://developer.apple.com/programs/enroll/). As an alternative, we can build an `.app` for use on the iOS Simulator, which is specified by using the `--profile=preview` tag while building.
- Not all components native to Expo behave the same on both platforms, some of which are exclusive to one platform.
## 👏 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please follow our brief [contributing guide](CONTRIBUTING.md).

## Code of conduct
Please follow our [code of conduct](CODE_OF_CONDUCT.md).

## 💙 Credits
<a href="https://github.com/ProgPrak-Native-App/react-native-app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ProgPrak-Native-App/react-native-app"  alt="contributors"/>
</a>

## 📄 License
[MIT](LICENSE.md)
