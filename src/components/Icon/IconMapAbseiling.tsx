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

let IconMapAbseiling: FC<SvgIconProps> = ({ size, width = size, height = size, color, ...rest }) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--map" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50"><path fill="${getIconColor(
    color,
    0,
    '#999999',
  )}" d="M35.009 25.542c-.327-1.293-1.973-2.314-3.21-1.716L27 26v-8.584l8.433-13.243c.612-.967.376-2.249-.609-2.869c-.973-.609-2.24-.326-2.787.62L24.97 13.179l-4.261.011c-.273 0-.544.044-.818.152l-7.366 2.869l-3.795-5.715c-.624-.956-1.914-1.239-2.887-.62s-1.257 1.912-.633 2.879l4.736 7.127c.536.826 1.662 1.195 2.613.804L18 18.589V28l-7.397 16.387c-.558 1.251.054 2.625 1.356 3.354c1.302.729 2.801.304 3.342-.945l5.951-13.582a6.035 6.035 0 0 0 1.673.219a4.44 4.44 0 0 0 1.531-.272l6.681-3.108l1.464 5.857a2.45 2.45 0 0 0 2.97 1.771a2.42 2.42 0 0 0 1.77-2.945l-2.332-9.194zM29 22.088v1.553C39 18.623 42.878 1.435 42.878 0h-1.399C40.954 3.585 37 17.926 29 22.088zm-7.092-9.658c2.046 0 3.708-1.64 3.708-3.672c0-2.031-1.662-3.684-3.708-3.684c-2.046 0-3.708 1.652-3.708 3.684s1.662 3.672 3.708 3.672zM25 50h2V33.432L25 35z"></path></svg>
`;

  return <SvgXml xml={xml} width={width} height={height} {...rest} />;
};

IconMapAbseiling.defaultProps = {
  size: px(16),
};

IconMapAbseiling = React.memo ? React.memo(IconMapAbseiling) : IconMapAbseiling;

export default IconMapAbseiling;
