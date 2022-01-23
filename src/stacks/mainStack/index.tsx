import { FC } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { Homepage } from 'modules/homepage';
import AnimatedTabbarDemo1 from 'modules/demo1';
import AnimatedTabbarDemo2 from 'modules/demo2';
import AnimatedTabbarDemo3 from 'modules/demo3';
import AnimatedTabbarDemo4 from 'modules/demo4';

const Stack = createStackNavigator();

const screens = [
  {
    name: 'Homepage',
    component: Homepage,
    options: {
      headerTitle: 'Homepage',
    },
  },
  {
    name: 'AnimatedTabbarDemo1',
    component: AnimatedTabbarDemo1,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'AnimatedTabbarDemo2',
    component: AnimatedTabbarDemo2,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'AnimatedTabbarDemo3',
    component: AnimatedTabbarDemo3,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'AnimatedTabbarDemo4',
    component: AnimatedTabbarDemo4,
    options: {
      headerShown: false,
    },
  },
];

export const MainStack: FC<{ commonStackOptions: StackNavigationOptions }> = ({ commonStackOptions }) => {
  return (
    <Stack.Navigator initialRouteName="Tab" screenOptions={commonStackOptions}>
      {screens.map(screen => (
        <Stack.Screen key={screen.name} {...screen} />
      ))}
    </Stack.Navigator>
  );
};
