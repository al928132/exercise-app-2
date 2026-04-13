import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import exercises from './data/exercises';
import Home from './components/Home';
import RepExercise from './components/RepExercise';
import DurationExercise from './components/DurationExercise';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{ exercises }}
          options={{ title: 'Exercises' }}
        />
        <Stack.Screen
          name="RepetitionExercise"
          component={RepExercise}
          options={({ route }) => ({ title: route.params.exercise.name })}
        />
        <Stack.Screen
          name="DurationExercise"
          component={DurationExercise}
          options={({ route }) => ({ title: route.params.exercise.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
