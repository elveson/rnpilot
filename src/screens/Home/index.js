import React from 'react';
import { Text, SafeAreaView } from 'react-native'

import { styles } from './styles';

export function Home() {
  return (
    <SafeAreaView style={styles.content}>
      <Text style={styles.name}>Elveson Costa!</Text>
    </SafeAreaView>
  );
}