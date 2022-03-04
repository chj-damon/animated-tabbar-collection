import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button } from '@td-design/react-native';
import { Container } from 'components';
import { ScrollView } from 'react-native';

export function Homepage() {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <Container>
      <ScrollView>
        <Button title="底部导航自定义动画示例1" onPress={() => navigation.navigate('AnimatedTabbarDemo1')} />
        <Button title="底部导航自定义动画示例2" onPress={() => navigation.navigate('AnimatedTabbarDemo2')} />
        <Button title="底部导航自定义动画示例3" onPress={() => navigation.navigate('AnimatedTabbarDemo3')} />
        <Button title="底部导航自定义动画示例4" onPress={() => navigation.navigate('AnimatedTabbarDemo4')} />
        <Button title="底部导航自定义动画示例5" onPress={() => navigation.navigate('AnimatedTabbarDemo5')} />
        <Button title="底部导航自定义动画示例6" onPress={() => navigation.navigate('AnimatedTabbarDemo6')} />
        <Button title="底部导航自定义动画示例7" onPress={() => navigation.navigate('AnimatedTabbarDemo7')} />
        <Button title="底部导航自定义动画示例8" onPress={() => navigation.navigate('AnimatedTabbarDemo8')} />
        <Button title="底部导航自定义动画示例9" onPress={() => navigation.navigate('AnimatedTabbarDemo9')} />
        <Button title="底部导航自定义动画示例10" onPress={() => navigation.navigate('AnimatedTabbarDemo10')} />
        <Button title="底部导航自定义动画示例11" onPress={() => navigation.navigate('AnimatedTabbarDemo11')} />
        <Button title="底部导航自定义动画示例12" onPress={() => navigation.navigate('AnimatedTabbarDemo12')} />
      </ScrollView>
    </Container>
  );
}
