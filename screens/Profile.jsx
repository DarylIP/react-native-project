import { launchCameraAsync } from "expo-image-picker";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

function ProfileScreen(props) {
  const goToUndiScreen = () => {
    props.navigation.navigate("Undi");
  };

  // function to collect data from homescreen
  const { birthYear, twoidnumber, fouridnumber, currentYear } =
    props.route.params;

  // this is a condition to identify gender
  const isEven = (number) => {
    return number % 2 === 0;
  };

  const genderIdentifier = (number) => {
    if (isEven(number)) {
      return "Female";
    } else {
      return "Male";
    }
  };

  // this is a condition for your voting state
  const voteState = (number1) => {
    if (
      number1 == 1 ||
      number1 == 21 ||
      number1 == 22 ||
      number1 == 23 ||
      number1 == 24
    ) {
      return "Johor";
    } else if (
      number1 == 2 ||
      number1 == 25 ||
      number1 == 26 ||
      number1 == 27
    ) {
      return "Kedah";
    } else if (number1 == 3 || number1 == 28 || number1 == 29) {
      return "Kelantan";
    } else if (number1 == 4 || number1 == 30) {
      return "Melaka";
    } else if (number1 == 5 || number1 == 31 || number1 == 59) {
      return "Negeri Sembilan";
    } else if (number1 == 6 || number1 == 32 || number1 == 33) {
      return "Pahang";
    } else if (number1 == 7 || number1 == 34 || number1 == 35) {
      return "Pulau Pinang";
    } else if (
      number1 == 8 ||
      number1 == 37 ||
      number1 == 38 ||
      number1 == 39
    ) {
      return "Perak";
    } else if (number1 == 9 || number1 == 40) {
      return "Perlis";
    } else if (
      number1 == 10 ||
      number1 == 41 ||
      number1 == 42 ||
      number1 == 43 ||
      number1 == 44
    ) {
      return "Selangor";
    } else if (number1 == 11 || number1 == 45 || number1 == 46) {
      return "Terengganu";
    } else if (
      number1 == 12 ||
      number1 == 47 ||
      number1 == 48 ||
      number1 == 49
    ) {
      return "Sabah";
    } else if (
      number1 == 13 ||
      number1 == 50 ||
      number1 == 51 ||
      number1 == 52 ||
      number1 == 53
    ) {
      return "Sarawak";
    } else if (
      number1 == 14 ||
      number1 == 54 ||
      number1 == 55 ||
      number1 == 56 ||
      number1 == 57
    ) {
      return "W.P Kuala Lumpur";
    } else if (number1 == 15 || number1 == 58) {
      return "W.P Labuan";
    } else if (number1 == 16) {
      return "W.P Putrajaya";
    } else if (number1 == 88) {
      return "Polis";
    } else if (number1 == 99) {
      return "Tentera";
    } else {
      Alert.alert("Kindly Key-In Your Valid State ID", "Invalid ID");
      return "Unkwown";
    }
  };

  // condition for age

  const yourAge = currentYear - birthYear;

  // set profile picture
  const [image, setImages] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets);
      setImages(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 200,
                height: 200,
                marginBottom: 20,
                borderRadius: 100,
              }}
            />
          )}
        </View>
        <Pressable
          style={{
            alignItems: "center",
            backgroundColor: "darkolivegreen",
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 5,
            marginBottom: 20,
          }}
          // the string "UNDIWHO" must be the same as our navigation at App.js so that it can work
          onPress={pickImage}
        >
          <Text style={{ color: "white", fontWeight: 600, fontSize: 20 }}>
            Choose Your Profile Photo
          </Text>
        </Pressable>

        {/* info */}
        <Text style={{ fontSize: 20 }}>
          Gender: {genderIdentifier(fouridnumber)}
        </Text>
        <Text style={{ fontSize: 20 }}>Age: {yourAge}</Text>
        <Text style={{ fontSize: 20 }}>
          Voting State: {voteState(twoidnumber)}
        </Text>
        {/* to go to Settings */}
        <Pressable
          style={{
            alignItems: "center",
            backgroundColor: "darkolivegreen",
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 5,
            marginTop: 50,
          }}
          // the string "UNDIWHO" must be the same as our navigation at App.js so that it can work
          onPress={() => props.navigation.navigate("UNDIWHO")}
        >
          <Text style={{ color: "white", fontWeight: 700, fontSize: 20 }}>
            Next
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;
