import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Animated from 'react-native-reanimated';

export type MultiBarOverlayProps = {
  iconSize?: number;
  overlayRadius?: number;
  expandingMode?: 'staging' | 'flat';
};

export type MultiBarExtrasRender = (props: BottomTabBarProps) => React.ReactNode;

export type MultiBarContextProps = {
  data: MultiBarExtrasRender[];
  overlayVisible: boolean;
  setOverlayVisible: React.Dispatch<React.SetStateAction<boolean>>;
  overlayProps?: MultiBarOverlayProps;
};

export type MultiBarItemProps = BottomTabBarProps & {
  current: number;
  angleStep: number;
  animation: Animated.SharedValue<number>;
  renderer: MultiBarExtrasRender;
};
