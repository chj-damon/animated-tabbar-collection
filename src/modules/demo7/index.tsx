import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { tabItems07 } from 'tabs';
import CustomTabBar from './CustomTabBar';
import { Image } from 'react-native';

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
      {tabItems07.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: item.label,
            tabBarIcon: () => <Image source={item.icon} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
