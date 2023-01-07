import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { homeListData } from "../utils/Constants";
import { RobotPNG } from "../assets/images";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 40, height: 80, marginBottom: 10 }}
        source={RobotPNG}
      />
      <Text style={styles.mainText}>Select one to proceed</Text>
      <View style={styles.cardContainer}>
        {homeListData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate(item.routeName)}
          >
            <View style={styles.card}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "PoppinsBold",
                  color: "#555",
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  color: "#999",
                }}
              >
                {item.subtitle}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    color: "#777",
    fontFamily: "PoppinsSemiBold",
    fontSize: 20,
  },
  cardContainer: {
    marginTop: 20,
  },
  card: {
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 10,
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
});
