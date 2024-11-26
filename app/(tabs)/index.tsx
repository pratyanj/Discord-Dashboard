import { Text, View , StyleSheet, Animated} from "react-native";
import { Link} from "expo-router";
import { useEffect, useRef } from "react";
export default function Index() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 2,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 20,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello World
      </Text>
      <Link href={"/(tabs)/about_us"} style={[styles.text,styles.links]}>Go to About us</Link>
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
  links: {
    fontSize: 16,
    marginTop: 20,
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});