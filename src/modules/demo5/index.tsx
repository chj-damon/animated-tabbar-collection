import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { helpers } from '@td-design/react-native';

import { Icon } from 'components';
import { tabItems } from 'tabs';

import { useTheme } from '@shopify/restyle';
import { AppTheme } from 'theme';
import { CustomTabBarButton } from './CustomTabBarButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './style';

const { px } = helpers;
const Tab = createBottomTabNavigator();
export default () => {
  const theme = useTheme<AppTheme>();
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        // 懒加载TabScreen
        lazy: true,
        // 不显示TabScreen的header
        headerShown: false,

        tabBarStyle: {
          position: 'absolute',
          left: 20,
          right: 20,
          height: 64,
          paddingBottom: 10,
          marginBottom: insets.bottom,
          borderRadius: 8,
          borderTopWidth: 0,
          ...styles.shadow,
        },
      }}
    >
      {tabItems.map(item => {
        if (item.label === 'tab3') {
          return (
            <Tab.Screen
              key={item.name}
              name={item.name}
              component={item.component}
              options={{
                title: item.label,
                tabBarLabel: () => null,
                tabBarIcon: () => <Icon name={item.icon} size={px(32)} color={'#fff'} />,
                tabBarButton: props => <CustomTabBarButton {...props} />,
              }}
            />
          );
        }
        return (
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
        );
      })}
    </Tab.Navigator>
  );
};
