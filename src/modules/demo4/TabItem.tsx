import { BottomTabDescriptorMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { NavigationState, ParamListBase } from '@react-navigation/native';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useDerivedValue } from 'react-native-reanimated';

export interface TabItemProps<T extends ParamListBase> {
  state: NavigationState<T>;
  descriptors: BottomTabDescriptorMap;
  index: number;
  itemWidth: number;
  currentIndexAnimation: Animated.SharedValue<number>;
  onTabPress: (index: number) => void;
}

export function TabItem<T extends ParamListBase>({
  index,
  state,
  descriptors,
  itemWidth,
  currentIndexAnimation,
  onTabPress,
}: TabItemProps<T>) {
  const { routes } = state;
  const { options } = descriptors[routes[index].key];
  const offset = itemWidth * index;

  const focused = useDerivedValue(() => (currentIndexAnimation.value === index ? 1 : 0));

  const activeItemStyle = useAnimatedStyle(() => {
    const inputRange = state.routes.map((_, index) => index);
    const outputRange = state.routes.map((_, key) => (key === index ? 1 : 0));
    const activeOpacity = interpolate(currentIndexAnimation.value, inputRange, outputRange, Extrapolate.CLAMP);
    return {
      opacity: activeOpacity,
    };
  });

  const tabItemStyle = useAnimatedStyle(() => {
    const inputRange = state.routes.map((_, index) => index);
    const outputRange = state.routes.map((_, key) => (key === index ? 0 : 1));
    const opacity = interpolate(currentIndexAnimation.value, inputRange, outputRange, Extrapolate.CLAMP);

    return {
      opacity,
    };
  });

  const handlePress = () => {
    if (index !== state.index) {
      onTabPress(index);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View
          style={[
            {
              flex: 1,
              height: 64,
              zIndex: 100,
              justifyContent: 'center',
              alignItems: 'center',
            },
            tabItemStyle,
          ]}
        >
          {options.tabBarIcon?.({ focused: !!focused.value, size: 14, color: '#eee' })}
          <Text
            style={[
              {
                fontSize: 12,
                fontWeight: '600',
                color: 'black',
              },
              options.tabBarLabelStyle,
            ]}
          >
            {options.tabBarLabel}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: -8,
            left: offset,
            width: itemWidth,
            height: 64,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 50,
          },
          activeItemStyle,
        ]}
      >
        <View
          style={{
            backgroundColor: '#fff',
            width: 60,
            height: 60,
            borderRadius: 60,
            marginBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {options.tabBarIcon?.({ focused: true, size: 14, color: '#eee' })}
        </View>
      </Animated.View>
    </>
  );
}
