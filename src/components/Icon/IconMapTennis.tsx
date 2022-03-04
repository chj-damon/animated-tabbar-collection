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

let IconMapTennis: FC<SvgIconProps> = ({ size, width = size, height = size, color, ...rest }) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--map" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50"><path fill="${getIconColor(
    color,
    0,
    '#999999',
  )}" d="M5.809 24.21a1.843 1.843 0 0 0-1.838 1.835c0 1.007.828 1.82 1.838 1.82a1.82 1.82 0 0 0 1.826-1.82a1.833 1.833 0 0 0-1.826-1.835zM31.297 8.951a3.975 3.975 0 0 0 3.98-3.969a3.986 3.986 0 0 0-7.973 0c0 2.198 1.79 3.969 3.993 3.969zm17.131 35.412l-6.477-7.626s-2.023-11.774-2.023-11.799l-.303-1.335c.012.013-.814-3.714-1.447-6.627c1.01.582 1.922 1.104 1.971 1.129c.049.108 3.432 6.53 3.432 6.53c.258.475.686.827 1.195.983a2.01 2.01 0 0 0 1.547-.146a1.95 1.95 0 0 0 .984-1.189a1.9 1.9 0 0 0-.135-1.529L43.463 15.7s-.148-.255-.342-.448c-.268-.267-.855-.595-.855-.595l-7.205-4.092c-.914-.461-1.924-.618-2.936-.4c-.416.085-.803.243-1.24.486c-.051.011-1.646.715-2.57 2.878l-3.7 7.429l-5.833 1.129l-.134.048l-5.266-3.715c-1.181-.825-1.326-3.302-1.34-3.399c-.145-1.699-1.12-3.302-2.678-4.407c-1.411-.995-3.117-1.419-4.676-1.166c-1.218.207-2.252.838-2.91 1.762A4.27 4.27 0 0 0 1 13.71l.073.803c.269 1.564 1.23 3.021 2.643 4.029c1.424 1.007 3.117 1.433 4.675 1.166l.366-.073c.036-.024 2.374-.742 3.518.037c0 .011 3.938 2.779 4.986 3.52c-.109.17-.304.545-.292.935a2.023 2.023 0 0 0 2.411 1.967l6.987-1.361s.598-.182.854-.365c.33-.23.572-.715.572-.715l1.838-3.691s1.268 5.96 1.289 6.069c-.145.146-5.732 6.058-5.732 6.058l-.215.122c-.551.496-.973 1.151-.973 1.845v12.526C24 47.92 25.167 49 26.506 49C27.834 49 29 47.92 29 46.582V36.119c1-.533 4.844-5.036 5.988-6.229c.123.704 1.252 7.056 1.252 7.056c.098.559.379 1.068.781 1.479c0 .014 7.699 9.071 7.699 9.071a2.525 2.525 0 0 0 1.657.848a2.47 2.47 0 0 0 1.769-.568a2.436 2.436 0 0 0 .853-1.848a2.39 2.39 0 0 0-.571-1.565zM10.022 17.049c-.426.595-1.083.983-1.899 1.129c-1.145.193-2.424-.134-3.494-.911c-1.083-.766-1.815-1.857-2.009-2.998l-.05-.571c0-.595.159-1.128.488-1.59c1.059-1.48 3.481-1.577 5.404-.218c1.913 1.36 2.619 3.678 1.56 5.159z"></path></svg>
`;

  return <SvgXml xml={xml} width={width} height={height} {...rest} />;
};

IconMapTennis.defaultProps = {
  size: px(16),
};

IconMapTennis = React.memo ? React.memo(IconMapTennis) : IconMapTennis;

export default IconMapTennis;
