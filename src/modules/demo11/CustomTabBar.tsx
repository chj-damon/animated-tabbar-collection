import { FC, ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';

import { TabItem } from './TabItem';

const CustomTabBar: FC<BottomTabBarProps> = ({ state, insets, navigation, descriptors }) => {
  const { routes, index: activeIndex } = state;

  const onTabPress = (index: number) => {
    const route = routes[index];
    navigation.dispatch({
      ...CommonActions.navigate({ name: route.name, merge: true }),
      target: state.key,
    });
  };

  return (
    <View style={[styles.tabBar, { height: 60 + insets.bottom, paddingBottom: insets.bottom }]}>
      {routes.map((route, index) => {
        const { tabBarIcon, tabBarLabel, bgColor, bgAlpha } = descriptors[route.key].options as any;
        const focused = index === activeIndex;

        const icon = tabBarIcon?.({ focused, color: focused ? '#fff' : '#333', size: 16 }) as any as ReactElement;

        return (
          <TabItem
            key={index}
            label={tabBarLabel as string}
            icon={icon}
            active={focused}
            bgColor={bgColor}
            bgAlpha={bgAlpha}
            onPress={() => onTabPress(index)}
          />
        );
      })}
    </View>
  );
};
export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});
