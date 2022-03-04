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
    <View style={[styles.tabBar, { height: 70 + insets.bottom, paddingBottom: insets.bottom }]}>
      {routes.map((route, index) => {
        const { tabBarIcon, tabBarLabel } = descriptors[route.key].options;
        const focused = index === activeIndex;

        const icon = tabBarIcon?.({ focused, color: focused ? '#fff' : '#333', size: 24 }) as any as ReactElement;

        return (
          <TabItem
            key={index}
            style={styles.item}
            label={tabBarLabel as string}
            icon={icon}
            active={focused}
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
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
  },
});
