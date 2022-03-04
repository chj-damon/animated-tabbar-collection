import { ReactElement, useEffect } from 'react';
import { StyleProp, TouchableWithoutFeedback, ViewStyle, StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export interface TabItemProps {
  style?: StyleProp<ViewStyle>;
  icon: ReactElement;
  label: string;
  active: boolean;
  onPress: () => void;
}

export const TabItem: React.FC<TabItemProps> = ({ style, label, icon, active, onPress }) => {
  const animationValue = useSharedValue(0);

  useEffect(() => {
    animationValue.value = withTiming(active ? 1 : 0, { duration: 1000 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const btnAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animationValue.value, [0, 1], [0.5, 1.2]);
    const translateY = interpolate(animationValue.value, [0, 0.93, 1], [0, -34, -24]);

    return {
      transform: [{ scale }, { translateY }],
    };
  });

  const circleAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animationValue.value, [0, 0.3, 0.5, 0.8, 1], [0, 0.9, 0.2, 0.7, 1]);

    return {
      transform: [{ scale }],
    };
  });

  const labelAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animationValue.value, [0, 1], [0, 1]);

    return {
      transform: [{ scale }],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.container, style]}>
        <Animated.View style={[styles.btn, btnAnimatedStyle]}>
          <Animated.View style={[styles.circle, circleAnimatedStyle]} />
          {icon}
        </Animated.View>
        <Animated.Text style={[styles.text, labelAnimatedStyle]}>{label}</Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0189fb',
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: '#0189fb',
  },
});
