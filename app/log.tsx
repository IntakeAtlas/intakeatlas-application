import { Link } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../data/mock';

export default function LogScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrap}>
        <Text style={styles.eyebrow}>LOGGER</Text>
        <Text style={styles.title}>Minimal logging flow</Text>
        <Text style={styles.body}>This placeholder route proves expo-router navigation works on native and web. Next step: wire in meal search, barcode input, and custom food entry.</Text>
        <Link href="/" asChild>
          <Pressable style={styles.button}><Text style={styles.buttonText}>Back to dashboard</Text></Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.background },
  wrap: { flex: 1, padding: 24, justifyContent: 'center', gap: 16 },
  eyebrow: { fontSize: 12, letterSpacing: 2, color: theme.secondary },
  title: { fontSize: 34, fontWeight: '800', color: theme.text },
  body: { fontSize: 17, lineHeight: 28, color: theme.label, maxWidth: 560 },
  button: { alignSelf: 'flex-start', borderRadius: 999, backgroundColor: theme.primary, paddingHorizontal: 18, paddingVertical: 12 },
  buttonText: { color: 'white', fontWeight: '700' },
});
