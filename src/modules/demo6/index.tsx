import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { tabItems } from 'tabs';
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
      {tabItems.map(item => (
        <Tab.Screen key={item.name} name={item.name} component={item.component} />
      ))}
    </Tab.Navigator>
  );
};
