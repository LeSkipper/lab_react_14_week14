import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import RegistrationScreen from './src/screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.root}>
      <RegistrationScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
