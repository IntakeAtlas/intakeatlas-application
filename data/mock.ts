export const theme = {
  background: '#F7FBF0',
  section: '#F1F5EB',
  card: '#FFFFFF',
  softCard: '#EBEFE5',
  text: '#181D17',
  muted: '#485860',
  label: '#40493D',
  primary: '#0D631B',
  primarySoft: '#DDECD8',
  secondary: '#9C4400',
  tertiary: '#485860',
  border: '#DCE3D4',
};

export const summary = {
  title: 'The Kinetic State',
  subtitle: 'Daily summary',
  caloriesRemaining: 842,
  protein: 165,
  carbs: 120,
  fats: 45,
  streakDays: 12,
  hydrationProgress: 3,
  hydrationTarget: 4,
};

export const intake = [
  {
    id: '1',
    name: '3 Poached Eggs & Avocado',
    mealType: 'Breakfast',
    time: '08:30 AM',
    kcal: 420,
    macros: [
      { label: 'P', value: '24g', color: '#0D631B' },
      { label: 'C', value: '12g', color: '#9C4400' },
      { label: 'F', value: '28g', color: '#485860' },
    ],
    emoji: '🥑',
  },
  {
    id: '2',
    name: 'Grilled Chicken Salad',
    mealType: 'Lunch',
    time: '12:45 PM',
    kcal: 385,
    macros: [
      { label: 'P', value: '42g', color: '#0D631B' },
      { label: 'C', value: '14g', color: '#9C4400' },
      { label: 'F', value: '11g', color: '#485860' },
    ],
    emoji: '🥗',
  },
];
