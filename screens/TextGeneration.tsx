import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { RobotPNG, UserPng } from "../assets/images";

export default function TextGeneration() {
  const [kh, setKh] = useState(0);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", (e) => {
      setKh(e.endCoordinates.height - 30);
    });
    Keyboard.addListener("keyboardWillHide", (e) => {
      setKh(0);
    });
  }, [kh]);

  const input = useRef(null);

  const handleSubmit = () => {
    //@ts-ignore
    input.current.clear();
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <View style={styles.container}>
        {/* robot chat container */}
        <View style={styles.robotChatContainer}>
          <Image style={styles.robotImg} source={RobotPNG} />
          <Text
            style={{
              fontSize: 16,
              textAlign: "left",
              backgroundColor: "white",
              padding: 20,
            }}
          >
            Hi, How can I help you?
          </Text>
        </View>
        {/* user chat container  */}
        <View style={styles.userChatContainer}>
          <Text
            style={{
              fontSize: 16,
              textAlign: "right",
              backgroundColor: "white",
              padding: 20,
            }}
          >
            Tell me what's happeing arround the world
          </Text>
          <Image style={styles.userImg} source={UserPng} />
        </View>
      </View>
      {/* input field container  */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          paddingBottom: 50,
          position: "absolute",
          bottom: kh,
          width: "100%",
        }}
      >
        <TextInput
          onChangeText={(e) => setUserInput(e)}
          ref={input}
          onSubmitEditing={(e) => {
            handleSubmit();
            console.log(userInput);
          }}
          style={{
            borderWidth: 1,
            padding: 10,
            fontSize: 15,
          }}
          placeholder="Type here..."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
  },
  robotChatContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "flex-start",
    width: "90%",
    marginRight: "auto",
  },
  userChatContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "90%",
    marginLeft: "auto",
    marginTop: 10,
  },
  robotImg: {
    width: 30,
    height: 30,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: 10,
  },
  userImg: {
    width: 30,
    height: 30,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 10,
  },
});
