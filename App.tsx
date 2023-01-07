import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FontSource } from "expo-font";
import Onboarding from "./screens/Onboarding";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { APP_NAME } from "./utils/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextGeneration from "./screens/TextGeneration";
import ImageGeneration from "./screens/ImageGeneration";

const Stack = createNativeStackNavigator();

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
  const initialRoute = async () => {
    const val = await AsyncStorage.getItem("isInfoDone");
    return val === "done" ? "Home" : "Onboarding";
  };
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName={initialRoute.toString()}>
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: APP_NAME,
              headerBackVisible: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="text_generation"
            component={TextGeneration}
            options={{ title: "Text Generation", headerBackTitle: "Home" }}
          />
          <Stack.Screen
            name="image_generation"
            component={ImageGeneration}
            options={{ title: "Image Generation", headerBackTitle: "Home" }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
});
