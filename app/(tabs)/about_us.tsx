import { Text, View , StyleSheet } from "react-native";

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        About Us
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  }
});
