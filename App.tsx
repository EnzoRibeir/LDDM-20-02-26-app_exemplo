import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello, Word!</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Clicou é gay!')}>
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    color: 'blue',
  },
  button: { 
    backgroundColor: '#6200ee', 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    borderRadius: 8, 
    marginTop: 16 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600' 
  }
});
