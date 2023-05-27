import { SafeAreaView, Text, View } from "react-native";

// Remember to declare every screen in App.js or Stack Navigator
function UndiScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View>
        <Text>UNDIWHO</Text>
      </View>
    </SafeAreaView>
  );
}

export default UndiScreen;
