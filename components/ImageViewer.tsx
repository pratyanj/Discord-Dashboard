// Import required dependencies from React Native and Expo
import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from "expo-image";

// Define the type of props (properties) that this component will receive
type Props = {
  imgSource: ImageSource;    // Property to hold the default image source
  selectedImage?: string;    // Optional property to hold a selected image URL (? means optional)
};

// Create and export the ImageViewer component that accepts imgSource and selectedImage as props
export default function ImageViewer({ imgSource, selectedImage }: Props) {
  // If a selectedImage exists, use it as the image source, otherwise use the default imgSource
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  // Render an Image component with the determined source and apply styles
  return <Image source={imageSource} style={styles.image} />;
}

// Create styles for the component using StyleSheet
const styles = StyleSheet.create({
  image: {
    width: 320,          // Set the width of the image to 320 pixels
    height: 440,         // Set the height of the image to 440 pixels
    borderRadius: 18,    // Add rounded corners to the image (18 pixels radius)
  },
});