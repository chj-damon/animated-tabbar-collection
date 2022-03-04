import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { useContext, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { MultiBarContext } from './MultiBarContext';

export function MultiBarButton({ children }: BottomTabBarButtonProps) {
  const { setOverlayVisible, overlayVisible } = useContext(MultiBarContext);
  const animation = useSharedValue(0);

  useEffect(() => {
    animation.value = withSpring(+overlayVisible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overlayVisible]);

  const handlePress = () => {
    animation.value = withSpring(+!animation.value);
    setOverlayVisible(visible => !visible);
  };

  const animatedStyle = useAnimatedStyle(() => {
    const rotateZ = interpolate(animation.value, [0, 1], [0, 135]);

    return {
      transform: [{ rotateZ: `${rotateZ}deg` }],
    };
  });

  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePress} style={{ top: -32 }}>
      <Animated.View style={[styles.container, animatedStyle]}>{children}</Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    borderRadius: 64,
    backgroundColor: '#F4333C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
