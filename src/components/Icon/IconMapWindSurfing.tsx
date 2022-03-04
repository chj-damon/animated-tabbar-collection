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

let IconMapWindSurfing: FC<SvgIconProps> = ({ size, width = size, height = size, color, ...rest }) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--map" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50"><path fill="${getIconColor(
    color,
    0,
    '#999999',
  )}" d="M48 49c-.996 0-1.97-.227-2.83-.609a6.998 6.998 0 0 0-2.92-.643a6.975 6.975 0 0 0-2.91.643A7.062 7.062 0 0 1 36.5 49a6.994 6.994 0 0 1-2.831-.609a7.002 7.002 0 0 0-2.921-.643c-1.03 0-2.026.236-2.915.643a6.993 6.993 0 0 1-2.834.609a6.988 6.988 0 0 1-2.829-.609a7.022 7.022 0 0 0-2.92-.643a6.994 6.994 0 0 0-2.915.643A7.023 7.023 0 0 1 13.5 49a7.004 7.004 0 0 1-2.834-.609a6.99 6.99 0 0 0-2.916-.643a6.952 6.952 0 0 0-2.915.643A7.016 7.016 0 0 1 2 49v-4.18a7.008 7.008 0 0 0 2.834-.609a7.123 7.123 0 0 1 2.915-.633a7.13 7.13 0 0 1 2.916.633c.864.383 1.826.609 2.834.609s1.97-.227 2.834-.609a7.162 7.162 0 0 1 2.915-.633c1.042 0 2.032.236 2.92.633a6.971 6.971 0 0 0 2.829.609a6.993 6.993 0 0 0 2.834-.609a7.191 7.191 0 0 1 2.915-.633c1.042 0 2.038.236 2.921.633a6.977 6.977 0 0 0 2.831.609a7.062 7.062 0 0 0 2.84-.609a7.142 7.142 0 0 1 2.91-.633c1.042 0 2.037.236 2.92.633c.86.383 1.834.609 2.83.609V49zM6.937 24.813c1.54 0 2.789-1.228 2.789-2.739c0-1.509-1.249-2.738-2.789-2.738c-1.536 0-2.784 1.229-2.784 2.738c0 1.512 1.248 2.739 2.784 2.739zM19.186 37h-7.972c-1.173 0-2.192-.563-2.651-1.558l-2.949-6.554a2.525 2.525 0 0 1-.086-.657c0-1.588 1.306-2.858 2.916-2.858l6.476-.004l4.444-1.98c.069-.044.251-.087.447-.087c.761 0 1.386.621 1.386 1.365c0 .463-.241.88-.596 1.128l-4.833 2.032c-.321.247-.928.173-.928.173h-2.91l2.44 6h5.389c.532 0 .905-.045 1.23.236l5.282 4.826c.738.674.778 1.756.091 2.488c-.692.721-1.85.615-2.589-.061L19.186 37zm24.841-8.715c.102.17.352.236.584.236a.814.814 0 0 0 .812-.811c0-.215-.105-.406-.207-.588c-4.982-9.353-18.432-6.57-20.081-5.961c-.274.102-.435.406-.435.711c0 .438.366.8.812.8c.138 0 .206-.012.326-.045c13.193-2.919 17.489 4.475 18.189 5.658zm2.291.846L29.448 39.6L14.089 1c13.744 1.792 31.219 12.296 32.229 28.131z"></path></svg>
`;

  return <SvgXml xml={xml} width={width} height={height} {...rest} />;
};

IconMapWindSurfing.defaultProps = {
  size: px(16),
};

IconMapWindSurfing = React.memo ? React.memo(IconMapWindSurfing) : IconMapWindSurfing;

export default IconMapWindSurfing;
