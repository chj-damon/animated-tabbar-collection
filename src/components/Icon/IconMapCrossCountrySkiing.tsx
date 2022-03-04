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

let IconMapCrossCountrySkiing: FC<SvgIconProps> = ({ size, width = size, height = size, color, ...rest }) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--map" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50"><g fill="${getIconColor(
    color,
    0,
    '#999999',
  )}"><ellipse cx="36.615" cy="6.695" rx="3.683" ry="3.695"></ellipse><path d="M13.26 42.202L1 29.869l.005 2.154L12.416 43.51c1.311 1.425 3.557-.223 3.557-.223l-1.077-1.157s-1.061.698-1.61.104l-.026-.032zM1 19h13v1H1zm46.57-3.506l1.43.677L34.755 45h-1.577zm-23.639-2.36l-5.733 6.638c-.337.42-.854.682-1.431.682a1.855 1.855 0 0 1-1.854-1.86c0-.556.239-1.052.625-1.391l6.179-7.14a1.858 1.858 0 0 1 1.43-.671l8.948-.005c.658 0 1.246.268 1.681.682l5.705 5.722l4.727-4.729a1.892 1.892 0 0 1 1.229-.453c1.061 0 1.915.862 1.915 1.92c0 .463-.158.883-.43 1.216l-5.7 5.76c-1.729 1.735-3.123.262-3.123.262l-3.496-3.523l-5.467 6.338l5.009 5.023s1.055.982.452 2.94L31.79 43.091A2.387 2.387 0 0 1 29.457 45a2.386 2.386 0 0 1-2.383-2.389c0-.208.021-.409.077-.601l2.306-10.297l-5.689-5.543l-4.895 5.471s-.794.982-2.894.906l-9.926.017a2.383 2.383 0 0 1-2.366-1.866a2.351 2.351 0 0 1 1.784-2.836c.201-.045.402-.066.598-.055l8.54.021L27.234 13.15l-3.303-.016z"></path></g><path fill="${getIconColor(
    color,
    1,
    '#999999',
  )}" d="M45.825 45.168c-.003.967-.804 1.832-1.765 1.832H15v1h29.056c1.617.009 2.936-1.239 2.944-2.864l-1.175.032z"></path></svg>
`;

  return <SvgXml xml={xml} width={width} height={height} {...rest} />;
};

IconMapCrossCountrySkiing.defaultProps = {
  size: px(16),
};

IconMapCrossCountrySkiing = React.memo ? React.memo(IconMapCrossCountrySkiing) : IconMapCrossCountrySkiing;

export default IconMapCrossCountrySkiing;
