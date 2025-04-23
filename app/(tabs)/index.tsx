import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <HStack className="justify-between">
        <Text className="text-2xl font-bold">Home</Text>
        <Text className="text-2xl font-bold">Home</Text>
      </HStack>
    </SafeAreaView>
  );
}
