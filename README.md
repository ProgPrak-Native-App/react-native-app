<h1 align="center"> Kopfsachen Native App </h1>

<p align="center">
Kopfsachen Native App is a <a href="https://reactnative.dev">React Native</a> based App build for <a href="https://www.kopfsachen.org">Kopfsachen eV.</a> which is an association dedicated to the promotion of young people's mental health.
In the open source spirit, this app is freely available and aims to provide mental support on the go. For development and prototyping we use <a href="https://expo.dev">Expo</a>.
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
The latest Expo release is available on the `main` Expo release-channel [here](https://expo.dev/@progprak_kopfsachen/kopfsachen?release-channel=main).

You can also scan the QR code with the Expo Go app on your phone:

<img alt="Expo QR" src="https://qr.expo.dev/eas-update?projectId=2ed357a3-8d38-431d-bfaa-a6ed64e89caf&channel=main&runtimeVersion=exposdk:46.0.0&appScheme=exp" width="200" height="200">

## 🚀 Usage
### Prerequisites
- Create an Expo account [here](http://expo.dev/signup)
- Install Expo with `npm install --global expo-cli`
- Verify installation with `expo --version`

Optionally, decide on which platform you want to run the App. The easiest way is running it in your browser of choice.

Alternatively, install `Expo Go` on your phone for mobile use or [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/) / [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/) for running the app locally.

### Run
To start Expo, all you need to do is run `expo start` in the root directory of the project. From here, use the context menu to compile and launch the app on the platform of your choice.
It should look something like this:

```
>> expo start
Starting project at /user/username/kopfsachen
Developer tools running on http://localhost:19002
Starting Metro Bundler

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
There you go! You are now running our app and are free to explore.

### Publish
If you wish to build or publish a version of your app for prototyping or internal distribution, you will need an Expo account.
Use the command `expo register` to create an account or `expo login` if you already have one.

When you are ready, use the following command to publish your version:

`expo publish --release-channel={YOUR_RELEASE_CHANNEL}`

Make sure to replace the release channel with an appropriate name.

### Build
To build a version of the app for internal distribution, it is advised to use `EAS build` as it has superseded the default build service. Building can be done either locally or online using the EAS services.

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

To build using EAS services online, remove the `--local` tag from the build command.
This can be especially helpful if you have problems setting up the local environment or just want to leave the heavy lifting to EAS.

It is not possible to build `.ipa`/`.app` locally if you are developing on any operating system other than macOS. This is where EAS is especially helpful. Using EAS services make it possible to build for iOS regardless of your operating system.

We recommend using the predefined `preview` profile, which for Android allows us to build an `.apk` without Playstore credentials.
For iOS, it ensures we build an iOS Simulator compatible `.app`, which conveniently does not require enrollment in the Apple Developer Program.

To specify the output path, use the `--output={/path/filename}` tag.

## 📡 Data management
Our development is done in collaboration with [mindtastic](https://github.com/mindtastic) who are providing the backend service to our app.
We use our joined [API](https://github.com/kopfsachen-dev/api) following the OpenAPI Spec for communication with the backend.
You can see the API live in SwaggerHub [here](https://app.swaggerhub.com/apis/kopfsachen/kopfsachen/0.1)!

## ❌ Limitations

Unfortunately, there are some limitations when it comes to developing cross-platform with Expo and React Native.
- As you might have noticed in the Build section above, building an `.ipa` for distribution on iOS devices is not possible without being enrolled in the [Apple Developer Program](https://developer.apple.com/programs/enroll/). As an alternative, we can build an `.app` for use on the iOS Simulator, which is specified by using the `--profile=preview` tag in the building process.
- Not all components native to Expo behave the same on both platforms, some of which might even be exclusive to one of the platforms.
- Inability to use any libraries that aren't native to the Expo API.

## 👏 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change. Please follow our brief [contributing guide](CONTRIBUTING.md).

## Code of conduct
Please follow our [code of conduct](CODE_OF_CONDUCT.md).

## 💙 Credits
<a href="https://github.com/ProgPrak-Native-App/react-native-app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ProgPrak-Native-App/react-native-app"  alt="contributors"/>
</a>

## 📄 License
[MIT](LICENSE.md)
