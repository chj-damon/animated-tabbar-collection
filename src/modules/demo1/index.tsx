import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { helpers } from '@td-design/react-native';

import { Icon } from 'components';
import { tabItems } from 'tabs';

import CustomTabBar from './CustomTabBar';

const { px } = helpers;
const Tab = createBottomTabNavigator();
export const AnimatedTabbarDemo1 = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        // 懒加载TabScreen
        lazy: true,
        // 不显示TabScreen的header
        headerShown: false,
      }}
    >
      {tabItems.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            title: item.label,
            tabBarLabel: item.label,
            tabBarIcon: () => <Icon name={item.icon} size={px(28)} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
