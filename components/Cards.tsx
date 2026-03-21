import { Link } from 'expo-router';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { intake, summary, theme } from '../data/mock';

function flattenStyle(...styles: StyleProp<ViewStyle>[]): StyleProp<ViewStyle> {
  return StyleSheet.flatten(styles);
}

export function StreakCard() {
  return (
    <View style={[styles.card, styles.softCard, { minHeight: 160 }]}>
      <Text style={styles.cardEyebrow}>CURRENT STREAK</Text>
      <Text style={styles.bigValue}>{summary.streakDays} Days</Text>
      <Text style={styles.bodyCopy}>You&apos;re in the top 5% of protein-consistent users this week.</Text>
    </View>
  );
}

export function HydrationCard() {
  return (
    <View style={[styles.card, styles.softCard, { minHeight: 160 }]}>
      <View style={styles.inlineRowBetween}>
        <Text style={styles.cardEyebrow}>HYDRATION FLOW</Text>
        <View style={styles.badge}><Text style={styles.badgeText}>75% TARGET</Text></View>
      </View>
      <Text style={styles.bigValue}>2.4 L</Text>
      <View style={styles.barRow}>
        {Array.from({ length: summary.hydrationTarget }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.bar,
              index < summary.hydrationProgress ? styles.barActive : styles.barInactive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

export function InsightCard() {
  return (
    <View style={[styles.card, styles.insightCard]}>
      <Text style={[styles.bigValue, { color: 'white', fontSize: 22 }]}>Afternoon Spike</Text>
      <Text style={[styles.bodyCopy, { color: '#D8F0D8' }]}>Your protein intake is high this morning. Aim for a complex carb snack around 4 PM to maintain momentum.</Text>
    </View>
  );
}

export function RecentIntakeList({ desktop = false }: { desktop?: boolean }) {
  return (
    <View style={styles.listWrap}>
      <View style={styles.inlineRowBetween}>
        <View>
          <Text style={[styles.cardEyebrow, { color: theme.secondary }]}>TIMELINE</Text>
          <Text style={styles.sectionTitle}>Recent Intake</Text>
        </View>
        <Link href="/history" asChild>
          <Pressable>
            <Text style={styles.linkText}>View history →</Text>
          </Pressable>
        </Link>
      </View>

      <View style={{ gap: 14 }}>
        {intake.map((item) => (
          <View key={item.id} style={[styles.card, styles.timelineCard]}>
            <View style={styles.emojiWrap}><Text style={styles.emoji}>{item.emoji}</Text></View>
            <View style={{ flex: 1, gap: 3 }}>
              <Text style={styles.timelineTitle}>{item.name}</Text>
              <Text style={styles.timelineMeta}>{item.mealType} • {item.time}</Text>
              {desktop ? (
                <View style={styles.macroBadgeRow}>
                  {item.macros.map((macro) => (
                    <View key={macro.label} style={styles.macroBadge}>
                      <Text style={[styles.macroBadgeText, { color: macro.color }]}>{macro.label}: {macro.value}</Text>
                    </View>
                  ))}
                </View>
              ) : (
                <View style={styles.dotRow}>
                  {item.macros.map((macro) => <View key={macro.label} style={[styles.dot, { backgroundColor: macro.color }]} />)}
                </View>
              )}
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.timelineKcal}>{item.kcal}</Text>
              <Text style={styles.timelineMeta}>kcal</Text>
            </View>
          </View>
        ))}

        <Link href="/log" asChild>
          <Pressable style={flattenStyle(styles.card, styles.addCard)}>
            <View style={styles.addIconWrap}><Text style={styles.addIcon}>+</Text></View>
            <View>
              <Text style={[styles.timelineTitle, { color: theme.primary }]}>Log Next Meal</Text>
              <Text style={[styles.timelineMeta, { fontStyle: 'italic' }]}>Stay kinetic. Stay fueled.</Text>
            </View>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 28,
    padding: 22,
  },
  softCard: {
    backgroundColor: theme.softCard,
  },
  insightCard: {
    backgroundColor: theme.primary,
    minHeight: 190,
    justifyContent: 'center',
    shadowColor: '#181D17',
    shadowOpacity: 0.08,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 12 },
    elevation: 6,
  },
  cardEyebrow: {
    fontSize: 11,
    letterSpacing: 2.2,
    color: theme.label,
    marginBottom: 12,
  },
  bigValue: {
    fontSize: 30,
    fontWeight: '800',
    color: theme.text,
    marginBottom: 12,
  },
  bodyCopy: {
    fontSize: 16,
    lineHeight: 26,
    color: theme.label,
    maxWidth: 420,
  },
  badge: {
    borderRadius: 999,
    backgroundColor: theme.card,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  badgeText: {
    fontSize: 10,
    letterSpacing: 0.8,
    fontWeight: '700',
    color: theme.text,
  },
  inlineRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  barRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  bar: {
    flex: 1,
    height: 14,
    borderRadius: 4,
  },
  barActive: {
    backgroundColor: theme.tertiary,
  },
  barInactive: {
    backgroundColor: '#C7CEC5',
  },
  listWrap: {
    gap: 18,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: theme.text,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.primary,
  },
  timelineCard: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  emojiWrap: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: theme.section,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 24,
  },
  timelineTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.text,
  },
  timelineMeta: {
    fontSize: 14,
    color: theme.label,
  },
  timelineKcal: {
    fontSize: 28,
    fontWeight: '800',
    color: theme.text,
  },
  dotRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
  },
  macroBadgeRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
    flexWrap: 'wrap',
  },
  macroBadge: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: theme.section,
  },
  macroBadgeText: {
    fontWeight: '700',
    fontSize: 12,
  },
  addCard: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: theme.border,
    backgroundColor: '#F8F8F6',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  addIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.section,
  },
  addIcon: {
    fontSize: 28,
    lineHeight: 28,
    color: theme.primary,
  },
});
