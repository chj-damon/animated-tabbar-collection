/* eslint-disable react-hooks/rules-of-hooks */
import { FC } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Flex, helpers, Text } from '@td-design/react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useUpdateEffect } from '@td-design/rn-hooks';

import { CustomTabBarProps, TabItem } from './TabItem';
import { useTheme } from '@shopify/restyle';
import { AppTheme } from 'theme';

const { deviceWidth, ONE_PIXEL } = helpers;
const defaultTabBarHeight = 48;

const CustomTabBar: FC<BottomTabBarProps & CustomTabBarProps> = ({
  duration = 200,
  tabBarHeight = defaultTabBarHeight,
  backgroundStyle,
  state,
  insets,
  descriptors,
}) => {
  const theme = useTheme<AppTheme>();
  const { routes } = state;
  const { options } = descriptors[routes[state.index].key];
  const itemWidth = deviceWidth / routes.length;

  const currentIndex = useSharedValue(state.index);

  useUpdateEffect(() => {
    currentIndex.value = withTiming(state.index, {
      duration,
      easing: Easing.linear,
    });
  }, [state.index, duration]);

  const renderIcon = () => {
    if (!options.tabBarIcon) return null;
    return (
      <Animated.View>{options.tabBarIcon({ focused: true, color: theme.colors.primary200, size: 20 })}</Animated.View>
    );
  };

  const renderLabel = () => {
    if (!options.tabBarLabel) return null;
    return (
      <Animated.View>
        <Text color="primary200">{options.tabBarLabel}</Text>
      </Animated.View>
    );
  };

  const renderActiveItem = () => {
    const activeItemWidth = itemWidth;
    const inputRange = routes.map((_, index) => index);

    const style = useAnimatedStyle(() => {
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
        <Flex
          flex={1}
          margin="x1"
          paddingHorizontal={'x2'}
          backgroundColor="func100"
          justifyContent="space-around"
          alignItems="center"
          style={[{ borderRadius: tabBarHeight }, backgroundStyle]}
        >
          {renderIcon()}
          {renderLabel()}
        </Flex>
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
      {/* 渲染Tab项 */}
      {routes.map((_, index) => (
        <TabItem
          key={index}
          {...{
            state,
            descriptors,
            index,
            tabBarHeight,
          }}
        />
      ))}
      {renderActiveItem()}
    </Flex>
  );
};

export default CustomTabBar;
