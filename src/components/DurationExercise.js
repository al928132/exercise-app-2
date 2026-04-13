import { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default function DurationExercise({ navigation, route }) {
  const { exercise, exercises } = route.params;
  let [running, setRunning] = useState(false);
  let [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!running) {
      clearInterval(intervalRef.current);
      return undefined;
    }
    intervalRef.current = setInterval(() => {
      setTimer((currentValue) => currentValue + 10);
    }, 10);
    return () => clearInterval(intervalRef.current);
  }, [running]);

  let startStop = useCallback(() => {
    setRunning(!running);
    clearInterval(intervalRef.current);
  }, [running]);

  function goToSuggested() {
    const suggested = exercise.suggested;
    const screen = suggested.type === 'reps' ? 'RepetitionExercise' : 'DurationExercise';
    navigation.push(screen, {
      exercise: exercises.find((e) => e.id === suggested.id) || suggested,
      exercises,
    });
  }

  let mins = (Math.floor((timer / (1000 * 60)) % 60)).toString().padStart(2, '0');
  let secs = (Math.floor((timer / 1000) % 60)).toString().padStart(2, '0');
  let mills = (timer % 1000).toString().padStart(3, '0');

  return (
    <View style={styles.container}>
      <Text h3>{exercise.name}</Text>
      <Text h4>{mins}:{secs}:{mills}</Text>
      <Button title={running ? 'Pause' : 'Start'} onPress={startStop} />
      <Button title="Reset" onPress={() => { setTimer(0); setRunning(false); }} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  }
});
