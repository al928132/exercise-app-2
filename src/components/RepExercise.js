import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default function RepExercise({ name }) {
  let [repCount, setRepCount] = useState(0);

  function newRep() {
    setRepCount(repCount + 1);
  }

  function lessRep() {
    setRepCount(repCount - 1);
  }

  function resetReps() {
    setRepCount(0);
  }

  return (
    <View style={styles.container}>
      <Text h3>{name}</Text>
      <Text h4>{repCount} Reps</Text>
      <View style={styles.buttonRow}>
        <Button title="+" onPress={() => { newRep(); }} />
        <Button title="-" onPress={() => { lessRep(); }} />
      </View>
      <Button title="Reset" onPress={() => { resetReps(); }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12
  }
});
