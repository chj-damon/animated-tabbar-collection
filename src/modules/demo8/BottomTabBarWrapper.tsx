import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MultiBarOverlay } from './MultiBarOverlay';
import { helpers } from '@td-design/react-native';

const { deviceWidth } = helpers;
export const BottomTabBarWrapper: FC<BottomTabBarProps> = ({ children, ...props }) => {
  return (
    <View pointerEvents="box-none" style={styles.container}>
      <MultiBarOverlay {...props} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: deviceWidth,
    justifyContent: 'flex-end',
  },
});
