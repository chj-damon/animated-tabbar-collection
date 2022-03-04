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

let IconMapArchery: FC<SvgIconProps> = ({ size, width = size, height = size, color, ...rest }) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--map" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50"><path fill="${getIconColor(
    color,
    0,
    '#999999',
  )}" d="M18.855 10.597c2.242 0 4.041-1.854 4.041-4.138c0-2.285-1.799-4.139-4.041-4.139c-2.225 0-4.042 1.854-4.042 4.139c0 2.284 1.817 4.138 4.042 4.138zM20 12H8c-2 0-2 3 0 3h12c2 0 2-3 0-3zm19 1.254c0-4.587-1.605-8.969-4.53-12.422C34.483.82 33.732 0 33.732 0l-11.38 11.648l-.194.192l.108.146c.175.319.272.674.312 1.028c.012.146 0 .297-.017.448c-.022.308-.08.61-.209.896l-.012.029l-.073.174l-.074.146c-.5.786-1.356 1.293-2.396 1.293H13v16l-2.187 15.233c-.239 1.255.717 2.476 1.943 2.72C13.982 50.21 15.75 49.268 16 48l2-17h1l3.39 17.128c.25 1.268 2.002 2.082 3.239 1.825c1.216-.244 1.894-1.465 1.655-2.72L24 30.969V17.357l9.326 9.135s.953-.825.953-.836C37.19 22.206 39 17.823 39 13.254zM36.939 15c-.334 3-2.082 6.628-4.273 9.282C30.641 22.215 26 18.322 24 15.771V15h12.939zm0-3H23.902c2.395-3 6.873-7.033 9.168-9.375C35.271 5.275 36.617 8 36.939 12z"></path></svg>
`;

  return <SvgXml xml={xml} width={width} height={height} {...rest} />;
};

IconMapArchery.defaultProps = {
  size: px(16),
};

IconMapArchery = React.memo ? React.memo(IconMapArchery) : IconMapArchery;

export default IconMapArchery;
