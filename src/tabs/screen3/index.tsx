import { Container } from 'components';
import { Box, Center, Text } from '@td-design/react-native';

export function TabScreen3() {
  return (
    <Container hasHeader={false}>
      <Box flex={1} backgroundColor="func300">
        <Center>
          <Text>TabScreen3</Text>
        </Center>
      </Box>
    </Container>
  );
}
