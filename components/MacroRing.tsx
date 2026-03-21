import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { summary, theme } from '../data/mock';

type Props = {
  size?: number;
  compact?: boolean;
};

const circumferenceFor = (radius: number) => 2 * Math.PI * radius;

export function MacroRing({ size = 300, compact = false }: Props) {
  const strokeWidth = compact ? 20 : 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = circumferenceFor(radius);
  const rotation = -90;

  const segments = [
    { color: theme.primary, fraction: 0.46, offset: 0 },
    { color: theme.secondary, fraction: 0.34, offset: 0.50 },
    { color: theme.tertiary, fraction: 0.20, offset: 0.87 },
  ];

  return (
    <View style={[styles.wrapper, { width: size, height: size }]}> 
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={theme.softCard}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {segments.map((segment) => (
          <Circle
            key={segment.color}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={segment.color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${circumference * segment.fraction} ${circumference}`}
            strokeDashoffset={-circumference * segment.offset}
            fill="none"
            transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
          />
        ))}
      </Svg>

      <View style={styles.centerContent}>
        <Text style={[styles.metricPrimary, compact && styles.metricPrimaryCompact]}>{summary.protein}g</Text>
        <Text style={styles.metricLabel}>PROTEIN</Text>
        <View style={styles.row}>
          <View style={styles.macroCell}>
            <Text style={styles.metricSecondary}>{summary.carbs}g</Text>
            <Text style={styles.metricSubLabel}>CARBS</Text>
          </View>
          <View style={styles.macroCell}>
            <Text style={styles.metricTertiary}>{summary.fats}g</Text>
            <Text style={styles.metricSubLabel}>FATS</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  centerContent: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 10,
  },
  macroCell: {
    alignItems: 'center',
  },
  metricPrimary: {
    fontSize: 42,
    fontWeight: '800',
    color: theme.primary,
  },
  metricPrimaryCompact: {
    fontSize: 34,
  },
  metricSecondary: {
    fontSize: 28,
    fontWeight: '800',
    color: theme.secondary,
  },
  metricTertiary: {
    fontSize: 28,
    fontWeight: '800',
    color: theme.tertiary,
  },
  metricLabel: {
    fontSize: 12,
    letterSpacing: 2,
    color: theme.label,
  },
  metricSubLabel: {
    fontSize: 10,
    letterSpacing: 1.8,
    color: theme.label,
  },
});
