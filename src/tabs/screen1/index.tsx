import { Container } from 'components';
import { Box, Center, Text } from '@td-design/react-native';

export function TabScreen1() {
  return (
    <Container hasHeader={false}>
      <Box flex={1} backgroundColor="func100">
        <Center>
          <Text>TabScreen1</Text>
        </Center>
      </Box>
    </Container>
  );
}
