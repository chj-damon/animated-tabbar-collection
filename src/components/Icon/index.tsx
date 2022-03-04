/* tslint:disable */
/* eslint-disable */

import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconMapAbseiling from './IconMapAbseiling';
import IconMapArchery from './IconMapArchery';
import IconMapBaseball from './IconMapBaseball';
import IconMapCanoe from './IconMapCanoe';
import IconMapClimbing from './IconMapClimbing';
import IconMapCrossCountrySkiing from './IconMapCrossCountrySkiing';
import IconMapKayaking from './IconMapKayaking';
import IconMapTennis from './IconMapTennis';
import IconMapWindSurfing from './IconMapWindSurfing';
import IconMobile from './IconMobile';
import IconPassTab from './IconPassTab';
import IconPassword from './IconPassword';
import IconPlus from './IconPlus';
import IconQq from './IconQq';
import IconSms from './IconSms';
import IconSmsTab from './IconSmsTab';
import IconUser from './IconUser';
import IconWarning from './IconWarning';
import IconWechat from './IconWechat';

export type IconNames =
  | 'MapAbseiling'
  | 'MapArchery'
  | 'MapBaseball'
  | 'MapCanoe'
  | 'MapClimbing'
  | 'MapCrossCountrySkiing'
  | 'MapKayaking'
  | 'MapTennis'
  | 'MapWindSurfing'
  | 'mobile'
  | 'passTab'
  | 'password'
  | 'plus'
  | 'qq'
  | 'sms'
  | 'smsTab'
  | 'user'
  | 'warning'
  | 'wechat';

export interface SvgIconProps extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  width?: number | string;
  height?: number | string;
  color?: string | string[];
}

let SvgIcon: FC<SvgIconProps> = ({ name, ...rest }) => {
  switch (name) {
    case 'MapAbseiling':
      return <IconMapAbseiling {...rest} />;
    case 'MapArchery':
      return <IconMapArchery {...rest} />;
    case 'MapBaseball':
      return <IconMapBaseball {...rest} />;
    case 'MapCanoe':
      return <IconMapCanoe {...rest} />;
    case 'MapClimbing':
      return <IconMapClimbing {...rest} />;
    case 'MapCrossCountrySkiing':
      return <IconMapCrossCountrySkiing {...rest} />;
    case 'MapKayaking':
      return <IconMapKayaking {...rest} />;
    case 'MapTennis':
      return <IconMapTennis {...rest} />;
    case 'MapWindSurfing':
      return <IconMapWindSurfing {...rest} />;
    case 'mobile':
      return <IconMobile {...rest} />;
    case 'passTab':
      return <IconPassTab {...rest} />;
    case 'password':
      return <IconPassword {...rest} />;
    case 'plus':
      return <IconPlus {...rest} />;
    case 'qq':
      return <IconQq {...rest} />;
    case 'sms':
      return <IconSms {...rest} />;
    case 'smsTab':
      return <IconSmsTab {...rest} />;
    case 'user':
      return <IconUser {...rest} />;
    case 'warning':
      return <IconWarning {...rest} />;
    case 'wechat':
      return <IconWechat {...rest} />;

    default:
      return null;
  }
};

SvgIcon = React.memo ? React.memo(SvgIcon) : SvgIcon;

export default SvgIcon;
