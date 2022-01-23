import { FC } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { Homepage } from 'modules/homepage';
import AnimatedTabbarDemo1 from 'modules/demo1';
import AnimatedTabbarDemo2 from 'modules/demo2';
import AnimatedTabbarDemo3 from 'modules/demo3';
import AnimatedTabbarDemo4 from 'modules/demo4';
import AnimatedTabbarDemo5 from 'modules/demo5';
import AnimatedTabbarDemo6 from 'modules/demo6';
import AnimatedTabbarDemo7 from 'modules/demo7';
import AnimatedTabbarDemo8 from 'modules/demo8';
import AnimatedTabbarDemo9 from 'modules/demo9';

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
  {
    name: 'AnimatedTabbarDemo5',
    component: AnimatedTabbarDemo5,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'AnimatedTabbarDemo6',
    component: AnimatedTabbarDemo6,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'AnimatedTabbarDemo7',
    component: AnimatedTabbarDemo7,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'AnimatedTabbarDemo8',
    component: AnimatedTabbarDemo8,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'AnimatedTabbarDemo9',
    component: AnimatedTabbarDemo9,
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
