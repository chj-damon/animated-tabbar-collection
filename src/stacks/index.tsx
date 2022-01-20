import { StackNavigationOptions, CardStyleInterpolators } from '@react-navigation/stack';

import { MainStack } from './mainStack';
import { CustomHeader } from 'components';

export const Stack = () => {
  const commonStackOptions: StackNavigationOptions = {
    header: props => <CustomHeader {...props} />,
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  return <MainStack {...{ commonStackOptions }} />;
};
