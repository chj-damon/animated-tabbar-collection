import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'components';
import { tabItems11 } from 'tabs';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();
export default () => {
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
      {tabItems11.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={
            {
              tabBarLabel: item.name,
              bgColor: item.bgColor,
              bgAlpha: item.bgAlpha,
              tabBarIcon: ({ color }: { color: string }) => <Icon name={item.icon} size={28} color={color} />,
            } as any
          }
        />
      ))}
    </Tab.Navigator>
  );
};
