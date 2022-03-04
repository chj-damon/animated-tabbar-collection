import { ReactElement, useEffect } from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export interface TabItemProps {
  icon: ReactElement;
  label: string;
  active: boolean;
  bgColor: string;
  bgAlpha: string;
  onPress: () => void;
}

export const TabItem: React.FC<TabItemProps> = ({ label, icon, active, onPress, bgColor, bgAlpha }) => {
  const animationValue = useSharedValue(0);

  useEffect(() => {
    animationValue.value = withTiming(active ? 1 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const bgAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animationValue.value, [0, 1], [0, 1]);

    return {
      transform: [{ scale }],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.container, { flex: active ? 1 : 0.65 }]}>
        <Animated.View
          style={[StyleSheet.absoluteFillObject, { backgroundColor: bgColor, borderRadius: 16 }, bgAnimatedStyle]}
        />
        <Animated.View style={[styles.btn, { backgroundColor: active ? 'transparent' : bgAlpha }]}>
          {icon}
          {active && <Animated.Text style={styles.text}>{label}</Animated.Text>}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
  text: {
    color: '#fff',
    paddingHorizontal: 8,
  },
});
