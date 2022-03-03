import { FC, useMemo } from 'react';
import * as shape from 'd3-shape';
import Svg, { Path } from 'react-native-svg';
import { helpers } from '@td-design/react-native';

const ACTIVE_CURVE_RADIUS = 21;
const MIDDLE_CURVE_RADIUS = 50;
const NAVIGATION_BOTTOM_TABS_HEIGHT = 65;
const { deviceWidth } = helpers;

const TabsShape: FC<{ tabWidth: number; index: number }> = ({ tabWidth, index }) => {
  const d = useMemo(() => {
    const start = tabWidth / 2 - ACTIVE_CURVE_RADIUS + index * tabWidth + (index > 2 ? 100 - tabWidth : 0);
    const left = shape
      .line()
      .x((d: any) => d.x)
      .y((d: any) => d.y)([
      {
        x: 0,
        y: 0,
      },
      {
        x: start,
        y: 0,
      },
    ] as any);

    const tab = shape
      .line()
      .x((d: any) => d.x)
      .y((d: any) => d.y)
      .curve(shape.curveBasis)([
      {
        x: start,
        y: 0.3,
      },
      {
        x: start + 4,
        y: 1,
      },
      {
        x: start + 8,
        y: 3,
      },
      {
        x: start + 12,
        y: 6,
      },
      {
        x: start + 18,
        y: 10,
      },
      {
        x: start + 21,
        y: 10.5,
      },
      {
        x: start + 24,
        y: 10,
      },
      {
        x: start + 30,
        y: 6,
      },
      {
        x: start + 34,
        y: 3,
      },
      {
        x: start + 38,
        y: 1,
      },
      {
        x: start + 42,
        y: 0.3,
      },
    ] as any);

    const startMiddle = deviceWidth / 2 - MIDDLE_CURVE_RADIUS;
    const middleTab = shape
      .line()
      .x((d: any) => d.x)
      .y((d: any) => d.y)
      .curve(shape.curveBasis)([
      {
        x: startMiddle,
        y: 0.3,
      },
      {
        x: startMiddle + 5,
        y: 1,
      },
      {
        x: startMiddle + 15,
        y: 8,
      },
      {
        x: startMiddle + 22,
        y: 17,
      },

      {
        x: startMiddle + 32,
        y: 28,
      },

      {
        x: startMiddle + 50,
        y: 33,
      },
      {
        x: startMiddle + 68,
        y: 28,
      },
      {
        x: startMiddle + 78,
        y: 17,
      },
      {
        x: startMiddle + 85,
        y: 8,
      },
      {
        x: startMiddle + 95,
        y: 1,
      },
      {
        x: startMiddle + 100,
        y: 0.3,
      },
    ] as any);

    const right = shape
      .line()
      .x((d: any) => d.x)
      .y((d: any) => d.y)([
      {
        x: startMiddle * 2,
        y: 0.3,
      },
      {
        x: deviceWidth,
        y: 0,
      },
      {
        x: deviceWidth,
        y: NAVIGATION_BOTTOM_TABS_HEIGHT,
      },
      {
        x: 0,
        y: NAVIGATION_BOTTOM_TABS_HEIGHT,
      },
      {
        x: 0,
        y: 0,
      },
    ] as any);

    return `${left} ${tab} ${middleTab} ${right}`;
  }, [index, tabWidth]);

  return (
    <Svg width={deviceWidth} height={NAVIGATION_BOTTOM_TABS_HEIGHT}>
      <Path fill="white" {...{ d }} />
    </Svg>
  );
};

export default TabsShape;
