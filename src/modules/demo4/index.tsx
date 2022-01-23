import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { helpers } from '@td-design/react-native';

import { Icon } from 'components';
import { tabItems } from 'tabs';

import CustomTabBar from './CustomTabBar';
import { useTheme } from '@shopify/restyle';
import { AppTheme } from 'theme';

const { px } = helpers;
const Tab = createBottomTabNavigator();
export default () => {
  const theme = useTheme<AppTheme>();
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} bgColors={tabItems.map(item => item.bgColor)} />}
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
            tabBarIcon: ({ focused }) => (
              <Icon name={item.icon} size={px(28)} color={focused ? theme.colors.primary200 : theme.colors.gray300} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
