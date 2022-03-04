import { FC, useContext } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { COMMON_DEGREES, iconSize, iconSizeHalf, overlayRadius, surfaceSize, surfaceSizeHalf } from './constant';
import { MultiBarContext } from './MultiBarContext';
import { MultiBarItemProps } from './types';

export const MultiBarItem: FC<MultiBarItemProps> = ({ current, angleStep, animation, renderer, ...restProps }) => {
  const { setOverlayVisible } = useContext(MultiBarContext);

  const angle = COMMON_DEGREES + angleStep * current + angleStep / 2;

  const x = overlayRadius * Math.cos((angle * Math.PI) / COMMON_DEGREES) + (surfaceSizeHalf - iconSizeHalf);
  const y = overlayRadius * Math.sin((angle * Math.PI) / COMMON_DEGREES) + surfaceSizeHalf;

  const animatedStyle = useAnimatedStyle(() => {
    const left = interpolate(animation.value, [0, 1], [surfaceSizeHalf - iconSizeHalf, x]);
    const top = interpolate(animation.value, [0, 1], [surfaceSize, y]);
    const rotateZ = interpolate(animation.value, [0, 1], [90, 0]);

    return {
      left,
      top,
      transform: [{ rotateZ: `${rotateZ}deg` }],
    };
  });

  const handleTouchEnd = () => {
    setOverlayVisible(false);
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]} onTouchEnd={handleTouchEnd}>
      {renderer(restProps)}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    overflow: 'hidden',
    width: iconSize,
    height: iconSize,
  },
});
