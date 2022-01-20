import { FC } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { Homepage } from 'modules/homepage';
import { AnimatedTabbarDemo1 } from 'modules/demo1';

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
