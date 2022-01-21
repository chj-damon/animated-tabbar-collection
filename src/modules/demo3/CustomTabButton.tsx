import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { Icon } from 'components';
import { useRef } from 'react';
import { GestureResponderEvent, Text, TouchableWithoutFeedback } from 'react-native';
import { Transition, Transitioning, TransitioningView } from 'react-native-reanimated';

export default function CustomTabButton(
  props: BottomTabBarButtonProps & {
    label: string;
    icon: string;
    activeBgColor: string;
    activeTextColor: string;
    inactiveTextColor: string;
  },
) {
  const focused = props.accessibilityState?.selected;
  const backgroundColor = focused ? props.activeBgColor : 'white';

  const ref = useRef<TransitioningView>(null);

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={0} />
      <Transition.Change interpolation="easeInOut" durationMs={200} />
      <Transition.In type="fade" durationMs={200} />
    </Transition.Sequence>
  );

  const handlePress = (e: GestureResponderEvent) => {
    ref.current?.animateNextTransition();
    props.onPress?.(e);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
          margin: 8,
          backgroundColor,
        }}
      >
        <Icon name={props.icon as any} size={24} />
        {focused && (
          <Text
            style={{
              color: focused ? props.activeTextColor : props.inactiveTextColor,
              marginLeft: 8,
              fontWeight: '600',
            }}
          >
            {props.label}
          </Text>
        )}
      </Transitioning.View>
    </TouchableWithoutFeedback>
  );
}
