import { Link, usePathname } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../data/mock';

type Item = {
  href: '/' | '/log' | '/targets' | '/history';
  label: string;
  icon: string;
};

const items: Item[] = [
  { href: '/', label: 'Dashboard', icon: '▦' },
  { href: '/log', label: 'Logger', icon: '⊕' },
  { href: '/targets', label: 'Targets', icon: '◔' },
  { href: '/history', label: 'History', icon: '↺' },
];

export function HeaderNav({ desktop = false }: { desktop?: boolean }) {
  const pathname = usePathname();

  if (!desktop) {
    return null;
  }

  return (
    <View style={styles.header}>
      <Text style={styles.brand}>IntakeAtlas</Text>
      <View style={styles.desktopNav}>
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} asChild>
              <Pressable style={styles.desktopNavItem}>
                <Text style={[styles.desktopNavText, active && styles.activeDesktopNavText]}>{item.label}</Text>
              </Pressable>
            </Link>
          );
        })}
      </View>
      <View style={styles.avatar}><Text style={styles.avatarText}>D</Text></View>
    </View>
  );
}

export function BottomTabBar() {
  const pathname = usePathname();

  return (
    <View style={styles.bottomBarWrap}>
      <View style={styles.bottomBar}>
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} asChild>
              <Pressable style={styles.bottomItem}>
                <Text style={[styles.bottomIcon, active && styles.bottomActive]}>{item.icon}</Text>
                <Text style={[styles.bottomLabel, active && styles.bottomActive]}>{item.label}</Text>
              </Pressable>
            </Link>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 76,
    borderRadius: 28,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(247,251,240,0.88)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    fontSize: 28,
    fontWeight: '800',
    color: theme.primary,
  },
  desktopNav: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  desktopNavItem: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  desktopNavText: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.muted,
  },
  activeDesktopNavText: {
    color: theme.primary,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: '#E8D7C6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D8BEA5',
  },
  avatarText: {
    color: theme.primary,
    fontWeight: '800',
  },
  bottomBarWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 18,
    alignItems: 'center',
  },
  bottomBar: {
    width: '92%',
    maxWidth: 520,
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#181D17',
    shadowOpacity: 0.08,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
  },
  bottomItem: {
    alignItems: 'center',
    gap: 4,
    minWidth: 64,
  },
  bottomIcon: {
    fontSize: 18,
    color: theme.muted,
  },
  bottomLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.muted,
  },
  bottomActive: {
    color: theme.primary,
  },
});
