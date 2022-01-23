import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export function CustomTabBarButton({ children, onPress }: BottomTabBarButtonProps) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={{ top: -32 }}>
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 64,
          backgroundColor: '#F4333C',
          justifyContent: 'center',
          alignItems: 'center',
          ...styles.shadow,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}
