import { FC } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const TabsHandler: FC<{
  routes: any[];
  index: number;
  tabWidth: number;
  onTabPress: (index: number) => void;
}> = ({ routes, tabWidth, onTabPress }) => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={{ flexDirection: 'row' }}>
        {routes.map((_, idx) => (
          <TouchableOpacity key={idx} onPress={() => onTabPress(idx)}>
            <View style={{ width: tabWidth }}>
              <Text>test</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TabsHandler;
