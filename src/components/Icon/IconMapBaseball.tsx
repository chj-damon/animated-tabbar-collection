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

let IconMapBaseball: FC<SvgIconProps> = ({ size, width = size, height = size, color, ...rest }) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--map" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50"><path fill="${getIconColor(
    color,
    0,
    '#999999',
  )}" d="M29.334 13.609c1.897 0 3.441-1.688 3.441-3.764c0-2.077-1.544-3.765-3.441-3.765c-1.9 0-3.445 1.688-3.445 3.765c0 2.076 1.545 3.764 3.445 3.764zm9.547 32.873L34 30V17c0-1.766-2.006-2-2.006-2h-6.562s-.863.495-1.432 1l-3.229 1.48l-3.988-4.434c-.65-.844-1.797-1.001-2.569-.291c-.782.71-.822 1.981-.173 2.836l5.084 5.555c.347.401.823.668 1.361.668c.396 0-.192-.141.114-.369L24 20v10l-5.176 16.45c-.376 1.488.912 3.02 2.281 3.42c1.362.399 3.003-.488 3.369-1.977l4.597-14.78l4.622 14.814c.363 1.498 1.895 2.376 3.256 1.976c1.361-.398 2.305-1.932 1.932-3.421zM13.137 17.474a.432.432 0 0 0 .65 0l.061-.056c.174-.201.184-.522 0-.716l-.995-1.116a.444.444 0 0 0-.662-.005l-.05.061c-.182.2-.193.517-.01.711l1.006 1.121zm9.521-12.637l-5.875 6.946l.713.794l6.555-6.18l4.358-4.392c.174-.211.284-.488.284-.789c0-.666-.488-1.21-1.087-1.216a1.06 1.06 0 0 0-.75.306l-4.198 4.531z"></path></svg>
`;

  return <SvgXml xml={xml} width={width} height={height} {...rest} />;
};

IconMapBaseball.defaultProps = {
  size: px(16),
};

IconMapBaseball = React.memo ? React.memo(IconMapBaseball) : IconMapBaseball;

export default IconMapBaseball;
