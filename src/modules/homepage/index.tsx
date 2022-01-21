import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Center } from '@td-design/react-native';
import { Container } from 'components';

export function Homepage() {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <Container>
      <Center>
        <Button title="底部导航自定义动画示例1" onPress={() => navigation.navigate('AnimatedTabbarDemo1')} />
        <Button title="底部导航自定义动画示例2" onPress={() => navigation.navigate('AnimatedTabbarDemo2')} />
      </Center>
    </Container>
  );
}
