import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { helpers } from '@td-design/react-native';

import { Icon } from 'components';
import { tabItems } from 'tabs';

import { useTheme } from '@shopify/restyle';
import { AppTheme } from 'theme';
import { MultiBarButton } from './MultiBarButton';
import { MultiBarProvider } from './MultiBarContext';
import { BottomTabBarWrapper } from './BottomTabBarWrapper';

const { px } = helpers;
const Tab = createBottomTabNavigator();

export default () => {
  const theme = useTheme<AppTheme>();
  return (
    <MultiBarProvider
      data={[
        ({ navigation }) => (
          <Icon
            name="MapAbseiling"
            color="#E24E1B"
            size={20}
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              }
            }}
          />
        ),
        () => <Icon name="MapArchery" color="#E24E1B" size={20} onPress={() => {}} />,
        () => <Icon name="MapBaseball" color="#E24E1B" size={20} onPress={() => {}} />,
        () => <Icon name="MapCanoe" color="#E24E1B" size={20} onPress={() => {}} />,
        () => <Icon name="MapClimbing" color="#E24E1B" size={20} onPress={() => {}} />,
        () => <Icon name="MapCrossCountrySkiing" color="#E24E1B" size={20} onPress={() => {}} />,
      ]}
    >
      <Tab.Navigator
        tabBar={props => (
          <BottomTabBarWrapper {...props}>
            <BottomTabBar {...props} />
          </BottomTabBarWrapper>
        )}
        screenOptions={{
          // 懒加载TabScreen
          lazy: true,
          // 不显示TabScreen的header
          headerShown: false,
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
                  tabBarIcon: () => <Icon name="plus" size={px(32)} color={'#fff'} />,
                  tabBarButton: props => <MultiBarButton {...props} />,
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
                  <Icon
                    name={item.icon}
                    size={px(28)}
                    color={focused ? theme.colors.primary200 : theme.colors.gray300}
                  />
                ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </MultiBarProvider>
  );
};
