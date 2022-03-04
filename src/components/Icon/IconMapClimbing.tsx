/* tslint:disable */
/* eslint-disable */

import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { GProps, SvgXml } from 'react-native-svg';
import { getIconColor } from './helper';

import { helpers } from '@td-design/react-native';

const { px } = helpers;

export interface SvgIconProps extends GProps, ViewProps {
  size?: number;
  width?: number | string;
  height?: number | string;
  color?: string | string[];
}

let IconMapClimbing: FC<SvgIconProps> = ({ size, width = size, height = size, color, ...rest }) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--map" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50"><path fill="${getIconColor(
    color,
    0,
    '#999999',
  )}" d="M6.432 21.55a5.17 5.17 0 0 0-.519 2.261l.193 12.125l-4.205 9.024a2.735 2.735 0 0 0-.301.902a2.723 2.723 0 0 0 2.295 3.105a2.724 2.724 0 0 0 2.803-1.386l4.626-9.864c.096-.229.182-.47.217-.734l.025-.372l-.036-7.496l7.109 3.092l1.148 7.326a2.725 2.725 0 0 0 2.259 2.106a2.751 2.751 0 0 0 3.118-2.285c.035-.253.035-.506.011-.746l-1.401-8.844a2.762 2.762 0 0 0-1.534-1.962l-6.354-2.812l4.046-7.014l2.007 2.539c.205.228.471.421.772.541l7.648 2.225a2.154 2.154 0 0 0 2.452-1.286a2.15 2.15 0 0 0-1.183-2.803l-.109-.036l-6.645-1.949l-5.002-5.979a5.071 5.071 0 0 0-2.911-1.541a4.99 4.99 0 0 0-4.972 2.298L6.432 21.55zm21.939 17.384l-.483 3.633l-13.156 3.187l.127 2.246h32.086A2.046 2.046 0 0 0 49 45.957l-.036-43.069l-4.396-1.022l-2.526 11.323l-4.223 1.768l-3.745 10.441l3.558 7.989l-1.002 3.067l-8.259 2.48zM19.438 9.157c2.259 0 4.095-1.828 4.095-4.078C23.532 2.83 21.697 1 19.438 1s-4.096 1.83-4.096 4.079c-.001 2.25 1.836 4.078 4.096 4.078zm-8.149.638a1.16 1.16 0 0 0-.435-1.588L8.872 7.052a1.185 1.185 0 0 0-1.607.433L1.153 17.989a1.163 1.163 0 0 0 .434 1.588l1.994 1.144a1.169 1.169 0 0 0 1.594-.422l6.114-10.504z"></path></svg>
`;

  return <SvgXml xml={xml} width={width} height={height} {...rest} />;
};

IconMapClimbing.defaultProps = {
  size: px(16),
};

IconMapClimbing = React.memo ? React.memo(IconMapClimbing) : IconMapClimbing;

export default IconMapClimbing;
