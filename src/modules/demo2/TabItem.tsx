/* eslint-disable react-hooks/rules-of-hooks */
import { BottomTabDescriptorMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { CommonActions, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { ViewStyle, Pressable } from 'react-native';
import { Box } from '@td-design/react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

export interface CustomTabBarProps {
  style?: ViewStyle;
  tintColor?: string;
  duration?: number;
}

export interface TabItemProps<T extends ParamListBase> {
  state: TabNavigationState<T>;
  descriptors: BottomTabDescriptorMap;
  index: number;
}

export function TabItem<T extends ParamListBase>({ state, descriptors, index }: TabItemProps<T>) {
  const focused = index === state.index;
  const route = state.routes[index];
  const { options: routeOptions, navigation } = descriptors[route.key];

  const inputRange = state.routes.map((_, index) => index);
  const outputRange = state.routes.map((_, index) => (index === state.index ? 0 : 1));
  const opacity = interpolate(index, inputRange, outputRange, Extrapolate.CLAMP);

  const renderIcon = () => {
    const style = useAnimatedStyle(() => {
      return {
        opacity,
      };
    });
    if (!routeOptions.tabBarIcon) return null;
    return (
      <Animated.View style={style}>
        {routeOptions.tabBarIcon({ focused: false, color: '#eee', size: 14 })}
      </Animated.View>
    );
  };

  const renderLabel = () => {
    const textStyle = useAnimatedStyle(() => {
      return {
        opacity,
      };
    });

    if (focused) return null;
    return (
      <Animated.Text style={[{ flex: 1, textAlign: 'center' }, routeOptions.tabBarLabelStyle, textStyle]}>
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

  return (
    <Pressable onPress={handlePress} style={{ flex: 1 }}>
      <Box flex={1} justifyContent="center" alignItems="center" height={48}>
        {renderIcon()}
        {renderLabel()}
      </Box>
    </Pressable>
  );
}
