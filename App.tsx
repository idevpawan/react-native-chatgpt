import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FontSource } from "expo-font";
import Onboarding from "./pages/Onboarding";
import { useFonts } from "expo-font";

export default function App() {
  //Loading fonts
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsBlack: require("./assets/fonts/Poppins-Black.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    PoppinsThin: require("./assets/fonts/Poppins-Thin.ttf"),
    PoppinsExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsExtraLight: require("./assets/fonts/Poppins-ExtraLight.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Onboarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
});
