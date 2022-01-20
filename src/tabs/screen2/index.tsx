import { Container } from 'components';
import { Box, Center, Text } from '@td-design/react-native';

export function TabScreen2() {
  return (
    <Container hasHeader={false}>
      <Box flex={1} backgroundColor="func200">
        <Center>
          <Text>TabScreen2</Text>
        </Center>
      </Box>
    </Container>
  );
}
