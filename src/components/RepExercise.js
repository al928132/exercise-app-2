import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default function RepExercise({ navigation, route }) {
  const { exercise, exercises } = route.params;
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

  function goToSuggested() {
    const suggested = exercise.suggested;
    const screen = suggested.type === 'reps' ? 'RepetitionExercise' : 'DurationExercise';
    navigation.push(screen, {
      exercise: exercises.find((e) => e.id === suggested.id) || suggested,
      exercises,
    });
  }

  return (
    <View style={styles.container}>
      <Text h3>{exercise.name}</Text>
      <Text h4>{repCount} Reps</Text>
      <View style={styles.buttonRow}>
        <Button title="+" onPress={() => { newRep(); }} />
        <Button title="-" onPress={() => { lessRep(); }} />
      </View>
      <Button title="Reset" onPress={() => { resetReps(); }} />
      <Button
        title={`Suggested: ${exercise.suggested.name}`}
        onPress={goToSuggested}
        type="outline"
      />
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
        type="outline"
      />
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
        type="outline"
      />
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
