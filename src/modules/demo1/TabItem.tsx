/* eslint-disable react-hooks/rules-of-hooks */
import { CommonActions, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { Pressable, ViewStyle } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { BottomTabDescriptorMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

export interface CustomTabBarProps {
  duration?: number;
  tabBarHeight?: number;
  activeTintColor?: string;
  inactiveTintColor?: string;
  allowFontScaling?: boolean;
  backgroundStyle?: ViewStyle;
  adaptive?: boolean;
  style?: ViewStyle;
  tintColor?: string;
  onPressInScale?: number;
  onPressOutScale?: number;
  defaultFlexValue?: number;
  activeFlexValue?: number;
}

export interface TabItemProps<T extends ParamListBase>
  extends Pick<CustomTabBarProps, 'tabBarHeight' | 'activeTintColor' | 'inactiveTintColor'>,
    Required<Pick<CustomTabBarProps, 'onPressInScale' | 'onPressOutScale'>> {
  state: TabNavigationState<T>;
  descriptors: BottomTabDescriptorMap;
  index: number;
  currentIndex: Animated.SharedValue<number>;
  itemWidthAnimations: Animated.SharedValue<number>[];
  pressAnimations: Animated.SharedValue<number>[];
}

enum PressType {
  IN = 'in',
  OUT = 'out',
}
export function TabItem<T extends ParamListBase>({
  currentIndex,
  itemWidthAnimations,
  pressAnimations,
  state,
  descriptors,
  index,
  tabBarHeight,
  activeTintColor,
  inactiveTintColor,
  onPressInScale,
  onPressOutScale,
}: TabItemProps<T>) {
  const focused = index === state.index;
  const route = state.routes[index];
  const { options: routeOptions, navigation } = descriptors[route.key];

  const containerStyle = useAnimatedStyle(() => {
    return {
      flex: itemWidthAnimations[index].value,
    };
  });

  const contentStyle = useAnimatedStyle(() => {
    const inputRange = state.routes.map((_, index) => index);
    const outputRange = state.routes.map((_, key) => (key === index ? 1 : 0.7));
    const scale = interpolate(currentIndex.value, inputRange, outputRange, Extrapolate.CLAMP);
    return {
      transform: [{ scale }],
    };
  });

  const renderIcon = (props: { index: number; focused: boolean; route: any }) => {
    const iconStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: pressAnimations[props.index].value }],
      };
    });

    if (!routeOptions.tabBarIcon) return null;
    return (
      <Animated.View style={iconStyle}>
        {routeOptions.tabBarIcon({ focused: props.focused, color: '#eee', size: 14 })}
      </Animated.View>
    );
  };

  const renderLabel = (props: { index: number; focused: boolean; route: any }) => {
    const textColor = props.focused ? activeTintColor : inactiveTintColor;

    if (!routeOptions.tabBarLabel || !focused) return null;
    return (
      <Animated.Text style={[{ flex: 1, textAlign: 'center', color: textColor }, routeOptions.tabBarLabelStyle]}>
        {routeOptions.tabBarLabel}
      </Animated.Text>
    );
  };

  const handlePress = () => {
    if (!focused) {
      navigation.dispatch({
        ...CommonActions.navigate({ name: route.name, merge: true }),
        target: state.key,
      });
    }
  };

  const onPress = (pressType: PressType) => () => {
    if (index === state.index) return;

    const toValue = pressType === PressType.IN ? onPressInScale : onPressOutScale;
    pressAnimations[index].value = withSpring(toValue);
  };

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={onPress(PressType.IN)}
      onPressOut={onPress(PressType.OUT)}
      style={{ flex: 1 }}
    >
      <Animated.View
        style={[
          {
            alignItems: 'center',
            paddingHorizontal: 4,
            height: tabBarHeight,
          },
          containerStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 4,
            },
            contentStyle,
          ]}
        >
          {renderIcon({ index, focused, route })}
          {renderLabel({ index, focused, route })}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}
