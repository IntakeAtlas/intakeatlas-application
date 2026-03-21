import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../data/mock';

export default function TargetsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrap}>
        <Text style={styles.title}>Targets</Text>
        <Text style={styles.body}>POC placeholder for macro targets, hydration goals, and non-calorie health metrics.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.background },
  wrap: { flex: 1, padding: 24, justifyContent: 'center', gap: 16 },
  title: { fontSize: 34, fontWeight: '800', color: theme.text },
  body: { fontSize: 17, lineHeight: 28, color: theme.label, maxWidth: 560 },
});
