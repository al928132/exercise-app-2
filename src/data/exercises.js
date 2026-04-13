const exercises = [
  {
    id: '1',
    name: 'Push-ups',
    type: 'reps',
    suggested: { id: '5', name: 'Pull-ups', type: 'reps' },
  },
  {
    id: '2',
    name: 'Planks',
    type: 'timer',
    suggested: { id: '3', name: 'Running', type: 'timer' },
  },
  {
    id: '3',
    name: 'Running',
    type: 'timer',
    suggested: { id: '4', name: 'Swimming', type: 'timer' },
  },
  {
    id: '4',
    name: 'Swimming',
    type: 'timer',
    suggested: { id: '2', name: 'Planks', type: 'timer' },
  },
  {
    id: '5',
    name: 'Pull-ups',
    type: 'reps',
    suggested: { id: '1', name: 'Push-ups', type: 'reps' },
  },
];

export default exercises;
