import { IconNames } from 'components/Icon';

import { TabScreen1 } from './screen1';
import { TabScreen2 } from './screen2';
import { TabScreen3 } from './screen3';
import { TabScreen4 } from './screen4';

export const tabItems: { name: string; label: string; icon: IconNames; component: () => JSX.Element }[] = [
  {
    name: 'TabScreen1',
    component: TabScreen1,
    label: 'tab1',
    icon: 'sms',
  },
  {
    name: 'TabScreen2',
    component: TabScreen2,
    label: 'tab2',
    icon: 'sms',
  },
  {
    name: 'TabScreen3',
    component: TabScreen3,
    label: 'tab3',
    icon: 'sms',
  },
  {
    name: 'TabScreen4',
    component: TabScreen4,
    label: 'tab4',
    icon: 'sms',
  },
];
