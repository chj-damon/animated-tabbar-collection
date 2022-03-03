import { FC, useMemo } from 'react';
import { View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { helpers } from '@td-design/react-native';
import { CommonActions } from '@react-navigation/native';

import TabsShape from './TabsShape';
import TabsHandler from './TabsHandler';

const { deviceWidth } = helpers;
const CustomTabBar: FC<BottomTabBarProps> = ({ state, navigation }) => {
  const { routes, index } = state;
  const tabWidth = useMemo(() => (deviceWidth - 100) / (routes.length - 1), [routes.length]);

  const onTabPress = (index: number) => {
    const route = routes[index];
    navigation.dispatch({
      ...CommonActions.navigate({ name: route.name, merge: true }),
      target: state.key,
    });
  };

  return (
    <View>
      <TabsShape {...{ tabWidth, index }} />
      <TabsHandler {...{ routes, index, onTabPress, tabWidth }} />
    </View>
  );
};
export default CustomTabBar;
