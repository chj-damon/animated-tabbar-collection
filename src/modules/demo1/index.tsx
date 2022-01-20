import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { helpers, Text } from '@td-design/react-native';
import { Icon } from 'components';
import { tabItems } from 'tabs';

const { px } = helpers;
const Tab = createBottomTabNavigator();

export const AnimatedTabbarDemo1 = () => {
  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        // 懒加载TabScreen
        lazy: true,
        // 不显示TabScreen的header
        headerShown: false,
        tabBarStyle: {
          paddingTop: px(4),
        },
      }}
    >
      {tabItems.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            title: item.label,
            tabBarLabel: () => <Text>{item?.label}</Text>,
            tabBarIcon: () => <Icon name={item.icon} size={px(20)} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
