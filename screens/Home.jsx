import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TextInputComponent,
  View,
  ViewComponent,
} from "react-native";

function HomeScreen(props) {
  // logIn function
  const [sixidnumber, setSixIdNumber] = useState("");
  const [twoidnumber, setTwoIdNumber] = useState("");
  const [fouridnumber, setFourIdNumber] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const handleLogin = () => {
    // conditon for the inputing the I/c no.
    const currentYear = new Date().getFullYear();

    const thisYear = currentYear - 18;
    const thatYear = currentYear - 80;

    if (
      sixidnumber.length === 6 &&
      twoidnumber.length === 2 &&
      fouridnumber.length === 4
    ) {
      if (birthYear >= thatYear && birthYear <= thisYear) {
        props.navigation.navigate("Profile", {
          sixidnumber,
          twoidnumber,
          fouridnumber,
          birthYear,
          currentYear,
        });
      } else {
        Alert.alert("You Are Not Eligible To Vote.", "Invalid ID");
      }

      // Perform successful login action here
    } else {
      // Display error message for failed login attempt
      Alert.alert("Kindly Key-In Your Valid Identification No.", "Invalid ID");
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        {/* login code */}
        <Text style={{ marginBottom: 10, fontSize: 20 }}>
          Enter your 12-digit I/C:
        </Text>
        <View style={{ flexDirection: "row" }}>
          {/* TextInput for the first 6 id no. */}
          <TextInput
            placeholder="XXXXXX"
            value={sixidnumber}
            keyboardType="number-pad"
            maxLength={6}
            onChangeText={setSixIdNumber}
            style={{
              width: 100,
              height: 40,
              borderWidth: 1,
              borderColor: "black",
              textAlign: "center",
              fontSize: 20,
            }}
          />
          <Text style={{ fontSize: 30 }}>-</Text>
          <TextInput
            placeholder="XX"
            value={twoidnumber}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={setTwoIdNumber}
            style={{
              width: 50,
              height: 40,
              borderWidth: 1,
              borderColor: "black",
              textAlign: "center",
              fontSize: 20,
            }}
          />
          <Text style={{ fontSize: 30 }}>-</Text>
          <TextInput
            placeholder="XXXX"
            value={fouridnumber}
            keyboardType="number-pad"
            maxLength={4}
            onChangeText={setFourIdNumber}
            style={{
              width: 75,
              height: 40,
              borderWidth: 1,
              borderColor: "black",
              textAlign: "center",
              fontSize: 20,
            }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ marginBottom: 10, marginTop: 50, fontSize: 20 }}>
            Please Enter Your Birth Year:
          </Text>
          <TextInput
            placeholder="XXXX"
            value={birthYear}
            keyboardType="number-pad"
            maxLength={4}
            onChangeText={setBirthYear}
            style={{
              width: 75,
              height: 40,
              borderWidth: 1,
              borderColor: "black",
              textAlign: "center",
              fontSize: 20,
            }}
          />
        </View>
        <Pressable
          onPress={handleLogin}
          style={{
            alignItems: "center",
            backgroundColor: "darkolivegreen",
            paddingHorizontal: 60,
            paddingVertical: 6,
            borderRadius: 5,
            marginTop: 80,
          }}
        >
          <Text style={{ color: "white", fontWeight: 700, fontSize: 20 }}>
            Next
          </Text>
        </Pressable>

        {/* for testing purpose */}
        {/* <Pressable
          onPress={() => props.navigation.navigate("Test")}
          style={{
            backgroundColor: "black",
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 2,
          }}
        >
          <Text style={{ color: "white" }}>For Testing Purpose</Text>
        </Pressable> */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default HomeScreen;
