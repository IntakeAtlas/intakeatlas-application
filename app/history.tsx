import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../data/mock';

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrap}>
        <Text style={styles.title}>History</Text>
        <Text style={styles.body}>POC placeholder for intake history, pattern analytics, and editorial summaries.</Text>
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
