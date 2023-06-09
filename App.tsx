/* eslint-disable camelcase */
import React from "react";
import { ThemeProvider } from "styled-components";
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
  useFonts,
} from "@expo-google-fonts/dm-sans";
import AppLoading from "expo-app-loading";
import { NativeBaseProvider } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LogBox } from "react-native";
import FlashMessage from "react-native-flash-message";
import { Routes } from "./src/routes";
import { theme } from "./src/styles/theme";
// import { AuthProvider } from "./src/hooks/AuthProvider";

LogBox.ignoreLogs([
  "expo-app-loading is deprecated in favor of expo-splash-screen",
]);
export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlashMessage
        position="top"
        titleStyle={{ fontFamily: "DMSans_700Bold", fontSize: 16 }}
        textStyle={{ fontFamily: "DMSans_500Medium", fontSize: 14 }}
        duration={1000}
        style={{ marginTop: 33 }}
      />
      <ThemeProvider theme={theme}>
        <NativeBaseProvider>
          {/* <AuthProvider> */}
          <Routes />
          {/* </AuthProvider> */}
        </NativeBaseProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
