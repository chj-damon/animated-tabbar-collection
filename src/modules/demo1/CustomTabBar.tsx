/* eslint-disable react-hooks/rules-of-hooks */
import { FC, useEffect } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Box, Flex, helpers } from '@td-design/react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { CustomTabBarProps, TabItem } from './TabItem';
import { usePrevious } from '@td-design/rn-hooks';

const { deviceWidth, ONE_PIXEL } = helpers;
const defaultTabBarHeight = 48;

const CustomTabBar: FC<BottomTabBarProps & CustomTabBarProps> = ({
  onPressInScale = 1.3,
  onPressOutScale = 1,
  defaultFlexValue = 1,
  activeFlexValue = 2,
  duration = 200,
  tabBarHeight = defaultTabBarHeight,
  backgroundStyle,
  state,
  activeTintColor,
  inactiveTintColor,
  insets,
  descriptors,
}) => {
  const prevIndex = usePrevious(state.index) ?? state.index;
  const { routes } = state;
  const currentIndex = useSharedValue(state.index);
  const itemWidth = (deviceWidth / routes.length) * defaultFlexValue;
  const itemWidthAnimations = routes.map((_, index) =>
    useSharedValue(index === state.index ? activeFlexValue : defaultFlexValue),
  );
  const pressAnimations = routes.map(() => useSharedValue(1));

  useEffect(() => {
    currentIndex.value = withTiming(state.index, {
      duration,
      easing: Easing.linear,
    });

    itemWidthAnimations[prevIndex].value = withTiming(defaultFlexValue, {
      duration,
      easing: Easing.linear,
    });
    itemWidthAnimations[state.index].value = withTiming(activeFlexValue, {
      duration,
      easing: Easing.linear,
    });
  }, [activeFlexValue, currentIndex, defaultFlexValue, duration, itemWidthAnimations, prevIndex, routes, state.index]);

  const renderBackground = () => {
    const activeItemWidth = itemWidth;

    const style = useAnimatedStyle(() => {
      const inputRange = routes.map((_, index) => index);
      const outputRange = routes.map((_, index) => itemWidth * index);
      const translateX = interpolate(currentIndex.value, inputRange, outputRange, Extrapolate.CLAMP);

      return {
        transform: [{ translateX }],
      };
    });

    return (
      <Animated.View
        style={[{ position: 'absolute', top: 0, left: 0, width: activeItemWidth, height: tabBarHeight }, style]}
      >
        <Box flex={1}>
          <Box
            flex={1}
            margin={'x1'}
            backgroundColor="func100"
            style={[{ borderRadius: tabBarHeight }, backgroundStyle]}
          />
        </Box>
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
        height: tabBarHeight,
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
            tabBarHeight,
            currentIndex,
            activeTintColor,
            inactiveTintColor,
            onPressInScale,
            onPressOutScale,
            itemWidthAnimations,
            pressAnimations,
          }}
        />
      ))}
    </Flex>
  );
};

export default CustomTabBar;
