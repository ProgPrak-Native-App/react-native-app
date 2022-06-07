import React from "react";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppWrapper from "./components/AppWrapper";


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AppWrapper/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

