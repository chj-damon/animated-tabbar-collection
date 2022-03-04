import { ReactElement, useEffect } from 'react';
import { StyleProp, TouchableWithoutFeedback, ViewStyle, StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export interface TabItemProps {
  style?: StyleProp<ViewStyle>;
  icon: ReactElement;
  active: boolean;
  onPress: () => void;
}

export const TabItem: React.FC<TabItemProps> = ({ style, icon, active, onPress }) => {
  const animationValue = useSharedValue(0);

  useEffect(() => {
    animationValue.value = withSpring(active ? 1 : 0, { stiffness: 100 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animationValue.value, [0, 1], [0.8, 1.2]);
    const rotate = interpolate(animationValue.value, [0, 1], [0, 360]);

    return {
      transform: [{ scale }, { rotate: `${rotate}deg` }],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.container, style, animatedStyle]}>{icon}</Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
