import { useMemo, useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import Navigation from "./navigation/index.jsx";
import MenuModal from "./components/App/MenuModal/MenuModal.jsx";

import CommonContext from "./context/common.js";
import fonts from "./constants/common/fonts.js";

import "./lang/index.js";

SplashScreen.preventAutoHideAsync();

function App() {
  const { i18n } = useTranslation();
  const [fontsLoaded] = useFonts(fonts);

  const [lang, setLang] = useState(i18n.language);
  const [visibleMenuModal, setVisibleMenuModal] = useState(false);
  const commonContextValue = useMemo(() => ({
    lang,
    setLang,
    visibleMenuModal,
    setVisibleMenuModal,
  }), [lang, visibleMenuModal]);

  const layoutRootViewHandler = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <CommonContext.Provider
        value={commonContextValue}
      >
        <View
          style={styles.container}
          onLayout={layoutRootViewHandler}
        >
          <MenuModal />
          <Navigation />
        </View>
      </CommonContext.Provider>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});