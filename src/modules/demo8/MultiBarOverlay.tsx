import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { FC, useContext, useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { COMMON_DEGREES, overlayHeight, surfaceSize } from './constant';
import { MultiBarContext } from './MultiBarContext';
import { MultiBarItem } from './MultiBarItem';

export const MultiBarOverlay: FC<BottomTabBarProps> = props => {
  const { data, overlayVisible } = useContext(MultiBarContext);
  const angleStep = useMemo(() => COMMON_DEGREES / data.length, [data]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const animations = data.map(() => useSharedValue(0));

  useEffect(() => {
    animations.map((anim, index) => (anim.value = withDelay(index * 50, withTiming(+overlayVisible))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overlayVisible]);

  return (
    <View pointerEvents="box-none" style={styles.container}>
      {data.map((item, index) => (
        <MultiBarItem
          key={index}
          {...props}
          renderer={item}
          current={index}
          angleStep={angleStep}
          animation={animations[index]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    bottom: 0,
    alignSelf: 'center',
    width: surfaceSize,
    height: overlayHeight,
  },
});
