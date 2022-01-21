import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { tabItems } from 'tabs';

import CustomTabButton from './CustomTabButton';
import { useTheme } from '@shopify/restyle';
import { AppTheme } from 'theme';

const Tab = createBottomTabNavigator();
export default () => {
  const theme = useTheme<AppTheme>();

  return (
    <Tab.Navigator
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
            tabBarButton: props => (
              <CustomTabButton
                {...props}
                label={item.label}
                icon={item.icon}
                activeBgColor={item.bgColor}
                activeTextColor={theme.colors.func500}
                inactiveTextColor={theme.colors.gray300}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
