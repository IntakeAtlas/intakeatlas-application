import { Link } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StreakCard, HydrationCard, InsightCard, RecentIntakeList } from '../components/Cards';
import { MacroRing } from '../components/MacroRing';
import { HeaderNav, BottomTabBar } from '../components/Navigation';
import { useResponsive } from '../components/Responsive';
import { summary, theme } from '../data/mock';

export default function Home() {
  const responsive = useResponsive();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.page, { paddingHorizontal: responsive.horizontalPadding }]}> 
        <HeaderNav desktop={responsive.isDesktop} />

        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: responsive.isDesktop ? 40 : 120, maxWidth: responsive.pageMaxWidth },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.heroWrap}>
            <Text style={styles.heroEyebrow}>{responsive.isDesktop ? 'TUESDAY, OCTOBER 24 — OPTIMIZING PERFORMANCE' : 'DAILY SUMMARY'}</Text>
            <Text style={[styles.heroTitle, responsive.isDesktop && styles.heroTitleDesktop]}>
              {responsive.isDesktop ? 'Kinetic ' : 'The Kinetic\n'}
              <Text style={styles.heroAccent}>{responsive.isDesktop ? 'State' : 'State'}</Text>
            </Text>
          </View>

          {responsive.isDesktop ? (
            <View style={styles.desktopGrid}>
              <View style={styles.leftColumn}>
                <View style={styles.heroCardDesktop}>
                  <MacroRing size={380} />
                  <Text style={styles.remainingLabel}>CALORIES REMAINING</Text>
                  <View style={styles.remainingRowDesktop}>
                    <Text style={styles.remainingNumberDesktop}>{summary.caloriesRemaining}</Text>
                  </View>
                  <View style={styles.goalChip}><Text style={styles.goalChipText}>↗ On track for goal</Text></View>
                </View>

                <View style={styles.desktopStatsRow}>
                  <View style={{ flex: 1 }}><StreakCard /></View>
                  <View style={{ flex: 1 }}><HydrationCard /></View>
                </View>
              </View>

              <View style={styles.rightColumn}>
                <RecentIntakeList desktop />
                <InsightCard />
              </View>
            </View>
          ) : (
            <>
              <View style={styles.heroCardMobile}>
                <MacroRing size={responsive.isTablet ? 340 : 280} compact={!responsive.isTablet} />
                <Text style={styles.remainingLabel}>CALORIES REMAINING</Text>
                <View style={styles.remainingRowMobile}>
                  <Text style={styles.remainingNumberMobile}>{summary.caloriesRemaining}</Text>
                  <Text style={styles.remainingKcal}>KCAL</Text>
                </View>
              </View>

              <View style={styles.mobileStack}>
                <StreakCard />
                <HydrationCard />
                <RecentIntakeList />
              </View>
            </>
          )}
        </ScrollView>

        {!responsive.isDesktop && (
          <>
            <Link href="/log" asChild>
              <Pressable style={styles.fab}>
                <Text style={styles.fabText}>+</Text>
              </Pressable>
            </Link>
            <BottomTabBar />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.background,
  },
  page: {
    flex: 1,
    backgroundColor: theme.background,
  },
  scrollContent: {
    width: '100%',
    alignSelf: 'center',
    gap: 22,
    paddingTop: 16,
  },
  heroWrap: {
    gap: 10,
  },
  heroEyebrow: {
    fontSize: 14,
    letterSpacing: 2.2,
    color: theme.label,
  },
  heroTitle: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
    color: theme.text,
  },
  heroTitleDesktop: {
    fontSize: 72,
    lineHeight: 80,
  },
  heroAccent: {
    color: theme.primary,
    fontStyle: 'italic',
  },
  heroCardMobile: {
    borderRadius: 32,
    padding: 24,
    backgroundColor: theme.section,
    alignItems: 'center',
    gap: 18,
  },
  heroCardDesktop: {
    borderRadius: 40,
    padding: 34,
    backgroundColor: theme.section,
    alignItems: 'center',
    gap: 18,
    minHeight: 640,
    justifyContent: 'center',
  },
  remainingLabel: {
    fontSize: 14,
    letterSpacing: 4,
    color: theme.text,
  },
  remainingRowMobile: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  remainingRowDesktop: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  remainingNumberMobile: {
    fontSize: 64,
    lineHeight: 66,
    fontWeight: '800',
    color: theme.text,
    fontStyle: 'italic',
  },
  remainingNumberDesktop: {
    fontSize: 72,
    lineHeight: 74,
    fontWeight: '800',
    color: theme.text,
  },
  remainingKcal: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '800',
    color: theme.primary,
    fontStyle: 'italic',
  },
  goalChip: {
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: theme.primarySoft,
  },
  goalChipText: {
    color: theme.primary,
    fontWeight: '700',
    fontSize: 16,
  },
  mobileStack: {
    gap: 18,
  },
  desktopGrid: {
    flexDirection: 'row',
    gap: 38,
    alignItems: 'flex-start',
  },
  leftColumn: {
    flex: 1.45,
    gap: 22,
  },
  rightColumn: {
    flex: 1,
    gap: 22,
    paddingTop: 28,
  },
  desktopStatsRow: {
    flexDirection: 'row',
    gap: 22,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 96,
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#181D17',
    shadowOpacity: 0.16,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 32,
    lineHeight: 34,
  },
});
