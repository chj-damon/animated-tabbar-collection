/* eslint-disable react-hooks/rules-of-hooks */
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { helpers } from '@td-design/react-native';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import * as shape from 'd3-shape';
import { TabItem } from './TabItem';
import { CommonActions } from '@react-navigation/native';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const { deviceWidth } = helpers;
const height = 65;
const CustomTabBar: FC<BottomTabBarProps & { bgColors: string[] }> = ({
  state,
  insets,
  navigation,
  descriptors,
  bgColors,
}) => {
  const { routes } = state;
  const itemWidth = deviceWidth / routes.length;

  const currentIndexAnimation = useSharedValue(0);

  const onTabPress = (index: number) => {
    currentIndexAnimation.value = withTiming(index);

    const route = routes[index];
    navigation.dispatch({
      ...CommonActions.navigate({ name: route.name, merge: true }),
      target: state.key,
    });
  };

  const svgStyle = useAnimatedStyle(() => {
    const inputRange = routes.map((_, index) => index);
    const outputRange = routes.map((_, index) => -deviceWidth + index * itemWidth);
    const translateX = interpolate(currentIndexAnimation.value, inputRange, outputRange, Extrapolate.CLAMP);
    return {
      transform: [{ translateX }],
    };
  });

  return (
    <View
      style={{
        backgroundColor: 'white',
        position: 'absolute',
        bottom: insets.bottom,
        alignSelf: 'center',
      }}
    >
      <View
        style={{
          width: deviceWidth,
          height,
          backgroundColor: 'white',
          alignSelf: 'center',
        }}
      >
        <AnimatedSvg
          width={deviceWidth * 2}
          height={height}
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
            svgStyle,
          ]}
        >
          <Path d={getPath(itemWidth, deviceWidth)} fill={bgColors[state.index]} />
        </AnimatedSvg>
        <View style={StyleSheet.absoluteFill}>
          <View style={{ flexDirection: 'row' }}>
            {routes.map((_, index) => (
              <TabItem key={index} {...{ state, descriptors, index, itemWidth, onTabPress, currentIndexAnimation }} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};
export default CustomTabBar;

function getPath(tabWidth: number, width: number) {
  const data: any = [
    { x: width + tabWidth / 2 - 100, y: 0 },
    { x: width + tabWidth / 2 - 65 - 35, y: 0 },
    { x: width + tabWidth / 2 - 50 + 10, y: -6 },
    { x: width + tabWidth / 2 - 50 + 15, y: height - 14 },
    { x: width + tabWidth / 2 + 50 - 15, y: height - 14 },
    { x: width + tabWidth / 2 + 50 - 10, y: -6 },
    { x: width + tabWidth / 2 + 65 + 35, y: 0 },
    { x: width + tabWidth / 2 + 100, y: 0 },
  ];
  const line = shape
    .line<string>()
    .x((d: any) => d.x)
    .y((d: any) => d.y)
    .curve(shape.curveBasis);

  return `${line(data)} `;
}
