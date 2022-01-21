/* eslint-disable react-hooks/rules-of-hooks */
import { FC } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Box, Flex, helpers } from '@td-design/react-native';
import Svg, { Path } from 'react-native-svg';
import * as shape from 'd3-shape';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { CustomTabBarProps, TabItem } from './TabItem';
import { useTheme } from '@shopify/restyle';
import { AppTheme } from 'theme';
import { useUpdateEffect } from '@td-design/rn-hooks';

const { ONE_PIXEL, deviceWidth } = helpers;

const line = shape
  .line()
  .x((d: any) => d.x)
  .y((d: any) => d.y)
  .curve(shape.curveBasis);

const CustomTabBar: FC<BottomTabBarProps & CustomTabBarProps> = ({ state, insets, descriptors }) => {
  const theme = useTheme<AppTheme>();
  const { routes } = state;
  const itemWidth = deviceWidth / routes.length;
  const data: any = [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: deviceWidth / (routes.length * 2), y: 20 },
    { x: deviceWidth / routes.length - 10, y: 0 },
    { x: deviceWidth / routes.length, y: 0 },
  ];

  const currentIndex = useSharedValue(state.index);

  useUpdateEffect(() => {
    currentIndex.value = withSpring(state.index);
  }, [state.index]);

  const renderBackground = () => {
    const style = useAnimatedStyle(() => {
      const inputRange = routes.map((_, index) => index);
      const outputRange = routes.map((_, index) => index * itemWidth);
      const translateX = interpolate(currentIndex.value, inputRange, outputRange, Extrapolate.CLAMP);

      return {
        transform: [{ translateX }],
      };
    });

    return (
      <Animated.View style={[{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, width: itemWidth }, style]}>
        <Svg
          width={itemWidth}
          height={48}
          style={{
            top: -48,
            transform: [{ rotate: '180deg' }],
          }}
        >
          <Path d={line(data)!} stroke={theme.colors.border} strokeWidth={ONE_PIXEL} fill="white" />
        </Svg>
      </Animated.View>
    );
  };

  const renderIcon = (props: { index: number; focused: boolean; route: any }) => {
    const { options: routeOptions } = descriptors[props.route.key];
    if (!routeOptions.tabBarIcon) return null;
    return <Box>{routeOptions.tabBarIcon({ focused: props.focused, color: '#eee', size: 14 })}</Box>;
  };

  const renderActiveItem = () => {
    const style = useAnimatedStyle(() => {
      const inputRange = routes.map((_, index) => index);
      const outputRange = routes.map((_, index) => index * itemWidth);

      const translateX = interpolate(currentIndex.value, inputRange, outputRange, Extrapolate.CLAMP);
      return {
        transform: [{ translateX }, { translateY: -4 }],
      };
    });

    const iconStyle = useAnimatedStyle(() => {
      const inputRange = state.routes.map((_, index) => index);
      const outputRange = state.routes.map((_, index) => (index === state.index ? 1 : 0));
      const opacity = interpolate(state.index, inputRange, outputRange, Extrapolate.CLAMP);
      return {
        opacity,
      };
    });

    return (
      <Animated.View
        style={[
          {
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: theme.colors.func50,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: (itemWidth - 48) / 2,
            width: 48,
            height: 48,
            borderRadius: 48,
          },
          style,
        ]}
      >
        <Animated.View style={[{ position: 'absolute' }, iconStyle]}>
          {renderIcon({
            index: state.index,
            route: routes[state.index],
            focused: true,
          })}
        </Animated.View>
      </Animated.View>
    );
  };

  return (
    <Flex
      borderTopWidth={ONE_PIXEL}
      borderTopColor="border"
      backgroundColor="white"
      style={{
        position: 'relative',
        height: 48,
        marginBottom: insets.bottom,
      }}
    >
      {renderBackground()}
      {/* 渲染Tab项 */}
      {routes.map((_, index) => (
        <TabItem
          key={index}
          {...{
            state,
            descriptors,
            index,
            currentIndex,
          }}
        />
      ))}
      {renderActiveItem()}
    </Flex>
  );
};

export default CustomTabBar;
