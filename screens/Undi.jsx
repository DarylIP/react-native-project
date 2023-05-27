import { useState } from "react";
import { Button, Pressable, SafeAreaView, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Remember to declare every screen in App.js or Stack Navigator
function UndiScreen(props) {
  // to collect data from profileSreeen and to show on UNDIScreen
  const { voteState } = props.route.params;
  console.log(voteState);

  //
  // function for the voting pole
  const [blueVotes, setBlueVotes] = useState(0);
  const [redVotes, setRedVotes] = useState(0);
  const [isBluePressed, setIsBluePressed] = useState(false);
  const [isRedPressed, setIsRedPressed] = useState(false);

  const handleBlueVote = () => {
    setBlueVotes(blueVotes + 1);
    setIsBluePressed(true);
    setTimeout(() => {
      setIsBluePressed(false);
    }, 200);
  };

  const handleRedVote = () => {
    setRedVotes(redVotes + 1);
    setIsRedPressed(true);
    setTimeout(() => {
      setIsRedPressed(false);
    }, 200);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View>
        <Text style={{ fontSize: 20, marginBottom: 50 }}>
          Vote for {voteState}'s next Representative
        </Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <MaterialCommunityIcons name="vote" size={50} color="black" />

        <Text>Blue Banner: {blueVotes}</Text>
        <Text>Red Banner: {redVotes}</Text>
      </View>

      <View>
        <Pressable
          style={({ pressed }) => [
            {
              alignItems: "center",
              backgroundColor: isBluePressed
                ? "darkblue"
                : pressed
                ? "blue"
                : "navy",
              paddingHorizontal: 8,
              paddingVertical: 6,
              borderRadius: 5,
              marginTop: 20,
            },
            pressed && { opacity: 0.6 },
          ]}
          // the string "UNDIWHO" must be the same as our navigation at App.js so that it can work
          onPress={handleBlueVote}
        >
          <Text style={{ color: "white", fontWeight: 600, fontSize: 20 }}>
            VOTE BLUE
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              alignItems: "center",
              backgroundColor: isRedPressed
                ? "darkred"
                : pressed
                ? "red"
                : "maroon",
              paddingHorizontal: 8,
              paddingVertical: 6,
              borderRadius: 5,
              marginTop: 20,
            },
            pressed && { opacity: 0.6 },
          ]}
          // the string "UNDIWHO" must be the same as our navigation at App.js so that it can work
          onPress={handleRedVote}
        >
          <Text style={{ color: "white", fontWeight: 600, fontSize: 20 }}>
            VOTE RED
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default UndiScreen;
