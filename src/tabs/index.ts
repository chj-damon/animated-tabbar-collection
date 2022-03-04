import { IconNames } from 'components/Icon';
import { ImageRequireSource } from 'react-native';

import { TabScreen1 } from './screen1';
import { TabScreen2 } from './screen2';
import { TabScreen3 } from './screen3';
import { TabScreen4 } from './screen4';
import { TabScreen5 } from './screen5';

export const tabItems: {
  name: string;
  label: string;
  bgColor: string;
  icon: IconNames;
  component: () => JSX.Element;
}[] = [
  {
    name: 'TabScreen1',
    component: TabScreen1,
    label: 'tab1',
    icon: 'sms',
    bgColor: '#FFF7E3',
  },
  {
    name: 'TabScreen2',
    component: TabScreen2,
    label: 'tab2',
    icon: 'qq',
    bgColor: '#FFD21D',
  },
  {
    name: 'TabScreen3',
    component: TabScreen3,
    label: 'tab3',
    icon: 'user',
    bgColor: '#52C41A',
  },
  {
    name: 'TabScreen4',
    component: TabScreen4,
    label: 'tab4',
    icon: 'wechat',
    bgColor: '#1890FF',
  },
  {
    name: 'TabScreen5',
    component: TabScreen5,
    label: 'tab5',
    icon: 'mobile',
    bgColor: '#F86E21',
  },
];

export const tabItems07: {
  name: string;
  label: string;
  icon: ImageRequireSource;
  component: () => JSX.Element;
}[] = [
  {
    name: 'TabScreen1',
    component: TabScreen1,
    label: 'tab1',
    icon: require('./assets/event.png'),
  },
  {
    name: 'TabScreen2',
    component: TabScreen2,
    label: 'tab2',
    icon: require('./assets/flash.png'),
  },
  {
    name: 'TabScreen3',
    component: TabScreen3,
    label: 'tab3',
    icon: require('./assets/search.png'),
  },
  {
    name: 'TabScreen4',
    component: TabScreen4,
    label: 'tab4',
    icon: require('./assets/setting.png'),
  },
];

export const tabItems11: {
  name: string;
  label: string;
  bgColor: string;
  bgAlpha: string;
  icon: IconNames;
  component: () => JSX.Element;
}[] = [
  {
    name: 'TabScreen1',
    component: TabScreen1,
    label: 'tab1',
    icon: 'sms',
    bgColor: '#637aff',
    bgAlpha: 'rgba(99, 122, 255, 0.15)',
  },
  {
    name: 'TabScreen2',
    component: TabScreen2,
    label: 'tab2',
    icon: 'qq',
    bgColor: '#60c5a8',
    bgAlpha: 'rgba(96, 197, 168, 0.15)',
  },
  {
    name: 'TabScreen3',
    component: TabScreen3,
    label: 'tab3',
    icon: 'user',
    bgColor: '#ff5454',
    bgAlpha: 'rgba(255, 84, 84, 0.15)',
  },
  {
    name: 'TabScreen4',
    component: TabScreen4,
    label: 'tab4',
    icon: 'wechat',
    bgColor: '#8f06e4',
    bgAlpha: 'rgba(146, 6, 228, 0.15)',
  },
];
