import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  StatusBar,
  TextInput,
  Alert,
} from "react-native";

const TestScreen = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     backgroundColor: isDarkMode ? "#000000" : "#ffffff",
  //   },
  //   text: {
  //     fontSize: 24,
  //     color: isDarkMode ? "#ffffff" : "#000000",
  //   },
  // });
  // return (
  //   // <View style={styles.container}>
  //   //   <StatusBar
  //   //     barStyle={isDarkMode ? "light-content" : "dark-content"}
  //   //     backgroundColor={isDarkMode ? "#000000" : "#ffffff"}
  //   //   />
  //   //   <Text style={styles.text}>Hello, Dark Mode!</Text>
  //   //   <Button
  //   //     title={isDarkMode ? "Light Mode" : "Dark Mode"}
  //   //     onPress={toggleDarkMode}
  //   //   />
  //   // </View>
  // );
  // const [enteredPin, setEnteredPin] = useState("");
  // const handlePinChange = (text) => {
  //   setEnteredPin(text);
  // };
  // const handleLogin = () => {
  //   // Here, you can add your own logic to validate the entered PIN
  //   if (enteredPin === "1234") {
  //     Alert.alert("Success", "Login successful");
  //   } else {
  //     Alert.alert("Error", "Invalid PIN");
  //   }
  // };
  // return (
  //   <View style={styles.container}>
  //     <TextInput
  //       style={styles.input}
  //       onChangeText={handlePinChange}
  //       value={enteredPin}
  //       keyboardType="numeric"
  //       maxLength={4}
  //       placeholder="Enter your PIN"
  //       secureTextEntry
  //     />
  //     <Button title="Login" onPress={handleLogin} />
  //   </View>
  // );
  // const [number, setNumber] = useState("");
  // const handleNumberChange = (input) => {
  //   // Remove any non-digit characters from the input
  //   const cleanedInput = input.replace(/[^0-9]/g, "");
  //   // Check if the cleaned input matches the desired digit lengths
  //   if (
  //     cleanedInput.length === 6 ||
  //     cleanedInput.length === 2 ||
  //     cleanedInput.length === 4
  //   ) {
  //     setNumber(cleanedInput);
  //   }
  // };
  // return (
  //   <View style={styles.container}>
  //     <TextInput
  //       style={styles.input}
  //       placeholder="Enter a number"
  //       value={number}
  //       onChangeText={handleNumberChange}
  //       keyboardType="numeric"
  //     />
  //   </View>
  // );

  const [text, setText] = useState("");

  const handlePress = () => {
    Alert.prompt(
      "Enter Text",
      "Please enter some text:",
      (inputText) => {
        setText(inputText);
      },
      "plain-text",
      text
    );
  };

  return (
    <View>
      <Button title="Show Alert" onPress={handlePress} />
      <TextInput
        style={{ borderWidth: 1, marginTop: 10 }}
        value={text}
        placeholder="Entered Text"
        onChangeText={(input) => setText(input)}
      />
    </View>
  );
};

export default TestScreen;
