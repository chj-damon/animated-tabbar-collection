/* eslint-disable react-hooks/rules-of-hooks */
import { CommonActions, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { Pressable, ViewStyle } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { BottomTabDescriptorMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

export interface CustomTabBarProps {
  duration?: number;
  tabBarHeight?: number;
  activeTintColor?: string;
  inactiveTintColor?: string;
  backgroundStyle?: ViewStyle;
  adaptive?: boolean;
  style?: ViewStyle;
  tintColor?: string;
}

export interface TabItemProps<T extends ParamListBase> extends Pick<CustomTabBarProps, 'tabBarHeight'> {
  state: TabNavigationState<T>;
  descriptors: BottomTabDescriptorMap;
  index: number;
}

export function TabItem<T extends ParamListBase>({ state, descriptors, index, tabBarHeight }: TabItemProps<T>) {
  const focused = index === state.index;
  const route = state.routes[index];
  const { options: routeOptions, navigation } = descriptors[route.key];

  const renderIcon = (props: { index: number; focused: boolean }) => {
    const inputRange = state.routes.map((_, index) => index);
    const outputRange = state.routes.map((_, index) => (index === state.index ? 0 : 1));

    const iconStyle = useAnimatedStyle(() => {
      const scale = interpolate(index, inputRange, outputRange, Extrapolate.CLAMP);
      return {
        transform: [{ scale }],
      };
    });

    if (!routeOptions.tabBarIcon) return null;
    return (
      <Animated.View style={iconStyle}>
        {routeOptions.tabBarIcon({ focused: props.focused, color: '#eee', size: 14 })}
      </Animated.View>
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

  return (
    <Pressable onPress={handlePress} style={{ flex: 1 }}>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 4,
          height: tabBarHeight,
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 4,
          }}
        >
          {renderIcon({ index, focused })}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}
