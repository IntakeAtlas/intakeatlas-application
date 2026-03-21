import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

export function useResponsive() {
  const { width } = useWindowDimensions();

  return useMemo(
    () => ({
      width,
      isDesktop: width >= 1100,
      isTablet: width >= 768,
      pageMaxWidth: 1320,
      horizontalPadding: width >= 1100 ? 24 : width >= 768 ? 20 : 16,
    }),
    [width],
  );
}
