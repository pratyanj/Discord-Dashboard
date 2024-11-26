import { Text, View , StyleSheet} from "react-native";
import { Link, Stack} from "expo-router";
export default function NotFound() {
  return (
    <>
    <Stack.Screen options={{title:'Opps! Not Found'}}/>
    <View style={styles.container}>
        <Link href={"/(tabs)/index"} style={styles.links}>Go to Home</Link>
    </View>
    </>
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
  },
  links: {
    fontSize: 16,
    color: "#fff",
    marginTop: 20,
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 20,
  }
});