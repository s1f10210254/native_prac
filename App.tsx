import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [test, setTest] = useState(true)
  console.log(test)
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app kodgksaogksgggg</Text>
      <StatusBar style="auto" />
      {test &&(
        
            <Text>aaaaa</Text>
        
        
      )}
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
});
