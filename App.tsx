import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [test, setTest] = useState(true)
  const [text] = useState("text")
  console.log(test)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {test &&(
          <View>
             <Text>aaaaa</Text>
             <Text>{text}</Text>
          </View>
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
