import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { onBoardingInfo } from "../Constants";

//@ts-ignore
export default function Onboarding({ navigation }) {
  const [currentInfo, setCurrentInfo] = useState(1);
  return (
    <View style={{ height: "100%", alignItems: "center" }}>
      <View style={styles.container}>
        <View style={styles.infoBar}>
          {onBoardingInfo.map((info) => (
            <View
              key={info.id}
              style={[
                styles.infoBarTab,
                currentInfo === info.id
                  ? { borderColor: "#555" }
                  : { borderColor: "#D9D9D9" },
              ]}
            ></View>
          ))}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            {onBoardingInfo[currentInfo - 1].title}
          </Text>
          <Text style={styles.subtitleText}>
            {onBoardingInfo[currentInfo - 1].subtitle}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          if (currentInfo === 3) {
            setCurrentInfo(currentInfo);
            navigation.navigate("Home");
          } else {
            setCurrentInfo(currentInfo + 1);
          }
        }}
      >
        <Text style={styles.buttonContainerText}>
          {currentInfo === 3 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    marginTop: 100,
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 25,
  },
  titleText: {
    color: "#333",
    fontSize: 32,
    fontFamily: "PoppinsSemiBold",
    // textAlign: "center",
    lineHeight: 38,
    marginBottom: 15,
  },
  subtitleText: {
    color: "#999",
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    // textAlign: "center",
    lineHeight: 20,
  },
  infoBar: {
    flexDirection: "row",
    marginBottom: 40,
  },
  infoBarTab: {
    borderWidth: 3,
    width: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: "#146EBE",
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    width: "90%",
  },
  buttonContainerText: {
    color: "white",
    fontSize: 18,
    letterSpacing: 1,
  },
});
