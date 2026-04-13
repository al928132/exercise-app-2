import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default function Home({ navigation, route }) {
  const exercises = route.params.exercises;

  function navigateToExercise(item) {
    const screen = item.type === 'reps' ? 'RepetitionExercise' : 'DurationExercise';
    navigation.push(screen, { exercise: item, exercises });
  }

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>Exercises</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigateToExercise(item)}
            containerStyle={styles.buttonContainer}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    textAlign: 'center'
  },
  list: {
    width: '100%',
    marginTop: 24,
    gap: 12
  },
  buttonContainer: {
    width: '100%',
  },
});
