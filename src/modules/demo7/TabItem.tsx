import { cloneElement, ReactElement, useEffect } from 'react';
import { View, Text, StyleProp, TouchableWithoutFeedback, ViewStyle, StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const activeColor = 'rgb(30, 30, 110)';
const inactiveColor = 'rgba(30, 30, 110, 0.4)';

export interface TabItemProps {
  style?: StyleProp<ViewStyle>;
  icon: ReactElement;
  label: string;
  active: boolean;
  onPress: () => void;
}

export const TabItem: React.FC<TabItemProps> = ({ style, icon, label, active, onPress }) => {
  const animationValue = useSharedValue(0);

  useEffect(() => {
    animationValue.value = withSpring(active ? 1 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const labelAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(animationValue.value, [0, 1], [20, 0]);
    return {
      opacity: animationValue.value,
      transform: [{ translateY }],
    };
  });

  const iconAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(animationValue.value, [0, 1], [0, -30]);
    const opacity = interpolate(animationValue.value, [0, 1], [1, 0]);

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  const dotAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: animationValue.value }],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Animated.View style={[styles.centered, labelAnimatedStyle]}>
          <Text style={styles.label}>{label}</Text>
        </Animated.View>
        <Animated.View style={[styles.centered, iconAnimatedStyle]}>
          {cloneElement(icon, { style: styles.icon })}
        </Animated.View>
        <Animated.View style={[styles.dot, dotAnimatedStyle]} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    position: 'absolute',
  },
  label: {
    color: activeColor,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  icon: {
    tintColor: inactiveColor,
    width: 32,
    height: 32,
  },
  dot: {
    position: 'absolute',
    bottom: 8,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: activeColor,
  },
});
