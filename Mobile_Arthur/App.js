import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './components/Profile';
import { Person } from './components/Profile';
import { Arthur } from './components/Profile';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Person/> */}
      <Text>ELETRO LIXO</Text>
      <Profile/>
      <Arthur></Arthur>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:  // coloca as frases uma do lado da outra 
    backgroundColor: '#ff6803ff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
