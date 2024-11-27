// Import necessary components from react-native and expo vector icons
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Define the type of props that this Button component accepts
type Props = {
  label: string;          // The text to display on the button
  theme?: 'primary';      // Optional theme property - currently only supports 'primary'
  onPress?: () => void;   // Optional function to handle button press
};

// Main Button component that accepts label, theme and onPress as props
export default function Button({ label, theme, onPress }: Props) {
  // If theme is 'primary', return a styled button with an icon
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#0690aa', borderRadius: 15 }, // Add yellow border and rounded corners
        ]}>
        <Pressable style={[styles.button, { backgroundColor: '#cfc6c6' }]} onPress={onPress}>
          {/* Add a camera icon from FontAwesome */}
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          {/* Display the button label with dark text color */}
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  // If no theme is specified, return a basic button
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        {/* Display the button label with default styling */}
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
