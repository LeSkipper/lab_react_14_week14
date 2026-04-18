import { StatusBar } from 'expo-status-bar';
import ContactsScreen from './src/screens/ContactsScreen';

export default function App() {
  return (
    <>
      <ContactsScreen />
      <StatusBar style="auto" />
    </>
  );
}
