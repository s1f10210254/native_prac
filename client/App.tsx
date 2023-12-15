//App.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { fetchGreeting } from './src/api/api'; // APIリクエスト関数をインポート

export default function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetchGreeting()
      .then((data) => setApiData(data))
      .catch((error) => console.error('API error:', error));
  }, []);

  console.log(apiData);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {apiData && <Text>Data from API: {JSON.stringify(apiData)}</Text>}
      <Text>testtesttes</Text>
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
