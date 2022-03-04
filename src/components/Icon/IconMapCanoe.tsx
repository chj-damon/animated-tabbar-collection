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

let IconMapCanoe: FC<SvgIconProps> = ({ size, width = size, height = size, color, ...rest }) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--map" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50"><path fill="${getIconColor(
    color,
    0,
    '#999999',
  )}" d="M17.437 12.885a4.446 4.446 0 0 0 4.45-4.446A4.44 4.44 0 0 0 17.437 4a4.444 4.444 0 0 0-4.451 4.439a4.449 4.449 0 0 0 4.451 4.446zM1 37.167c1 0 2.049-.24 2.947-.643a7.298 7.298 0 0 1 3.048-.676a7.25 7.25 0 0 1 3.042.676a7.306 7.306 0 0 0 2.965.637a7.238 7.238 0 0 0 2.954-.637a7.244 7.244 0 0 1 3.046-.676a7.3 7.3 0 0 1 3.044.676a7.236 7.236 0 0 0 2.954.637c1.047 0 2.06-.234 2.953-.637a7.315 7.315 0 0 1 3.051-.676c1.082 0 2.117.25 3.039.676a7.302 7.302 0 0 0 2.961.637c1.05 0 2.055-.234 2.959-.637a7.231 7.231 0 0 1 5.678-.182a8.068 8.068 0 0 0 2.142-5.461c0-4.474-3.631-8.096-8.11-8.096l-.909.097c-.997 4.037-5.044 4.207-5.044 4.207l-18.52-.005l-1.548-.909l3.733-6.25l4.087 2.356c2.447 1.583 3.721-.636 3.721-.636l4.098-6.666c1.781-2.896-1.997-5.218-3.767-2.311l-2.869 4.672l-6.818-3.764c-4.725-2.629-6.727 1.726-6.727 1.726l-5.355 9.152c-.911 1.902-.104 2.719-.104 2.719L1 27.169v9.998zM49 46a7.168 7.168 0 0 1-2.948-.636a7.307 7.307 0 0 0-3.051-.675a7.23 7.23 0 0 0-3.038.675a7.252 7.252 0 0 1-2.959.636a7.268 7.268 0 0 1-2.961-.636a7.253 7.253 0 0 0-3.039-.675a7.314 7.314 0 0 0-3.051.675A7.195 7.195 0 0 1 25 46a7.207 7.207 0 0 1-2.954-.636a7.3 7.3 0 0 0-3.044-.675a7.242 7.242 0 0 0-3.045.675a7.221 7.221 0 0 1-2.954.636a7.27 7.27 0 0 1-2.965-.636a7.24 7.24 0 0 0-3.04-.675a7.275 7.275 0 0 0-3.044.675A7.221 7.221 0 0 1 1 46v-4.417a7.225 7.225 0 0 0 2.954-.642a7.294 7.294 0 0 1 3.044-.675c1.082 0 2.124.25 3.04.675a7.29 7.29 0 0 0 2.965.642a7.225 7.225 0 0 0 2.954-.642a7.257 7.257 0 0 1 3.045-.675c1.081 0 2.116.25 3.044.675a7.224 7.224 0 0 0 2.954.642a7.2 7.2 0 0 0 2.953-.642a7.33 7.33 0 0 1 3.051-.675c1.082 0 2.117.25 3.039.675a7.289 7.289 0 0 0 2.961.642c1.05 0 2.055-.238 2.959-.642a7.246 7.246 0 0 1 3.038-.675c1.087 0 2.124.25 3.051.675c.894.403 1.9.642 2.948.642V46z"></path></svg>
`;

  return <SvgXml xml={xml} width={width} height={height} {...rest} />;
};

IconMapCanoe.defaultProps = {
  size: px(16),
};

IconMapCanoe = React.memo ? React.memo(IconMapCanoe) : IconMapCanoe;

export default IconMapCanoe;
