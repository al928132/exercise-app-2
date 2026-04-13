import { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default function DurationExercise({ name }) {
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

  let mins = (Math.floor((timer / (1000 * 60)) % 60)).toString().padStart(2, '0');
  let secs = (Math.floor((timer / 1000) % 60)).toString().padStart(2, '0');
  let mills = (timer % 1000).toString().padStart(3, '0');

  return (
    <View style={styles.container}>
      <Text h3>{name}</Text>
      <Text h4>{mins}:{secs}:{mills}</Text>
      <Button title={running ? 'Pause' : 'Start'} onPress={startStop} />
      <Button title="Reset" onPress={() => { setTimer(0); }} />
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
