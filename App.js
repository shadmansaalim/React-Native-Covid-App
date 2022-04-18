import React, { useState } from "react";
import * as Font from 'expo-font';
import Navigator from './routes/Navigator';
import AppLoading from "expo-app-loading";
import { NativeBaseProvider } from 'native-base';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'poppins-extra-light': require('./assets/fonts/Poppins-ExtraLight.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <NativeBaseProvider>
        <Navigator />
      </NativeBaseProvider>
    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}