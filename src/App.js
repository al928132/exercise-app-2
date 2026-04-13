import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import RepExercise from './components/RepExercise';
import DurationExercise from './components/DurationExercise';


function App() {
  let screen;
  let [currentScreen, setCurrentScreen] = useState('menu');
  let [currentExercise, setCurrentExercise] = useState('none');

  if (currentScreen === 'menu') {
    screen =
      <View style={styles.container}>
        <Text h3>Exercises</Text>
        <View style={styles.buttonGroup}>
          <Button title="Push-ups" onPress={() => { setCurrentExercise('Push-ups'); setCurrentScreen('reps'); }} />
          <Button title="Planks" onPress={() => { setCurrentExercise('Planks'); setCurrentScreen('timer'); }} />
          <Button title="Running" onPress={() => { setCurrentExercise('Running'); setCurrentScreen('timer'); }} />
          <Button title="Swimming" onPress={() => { setCurrentExercise('Swimming'); setCurrentScreen('timer'); }} />
          <Button title="Pull-ups" onPress={() => { setCurrentExercise('Pull-ups'); setCurrentScreen('reps'); }} />
        </View>
      </View>;
  } else if (currentScreen === 'timer') {
    screen = <DurationExercise name={currentExercise} />;
  } else if (currentScreen === 'reps') {
    screen = <RepExercise name={currentExercise} />;
  }

  return (
    <View style={styles.root}>
      <>{screen}</>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  buttonGroup: {
    width: '100%',
    marginTop: 24,
    gap: 12
  }
});

export default App;
