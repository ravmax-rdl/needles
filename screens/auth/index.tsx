import { Button, ButtonText } from '@/components/ui/button';
import { Input, InputField } from '@/components/ui/input';
import { useAuth } from '@/providers/AuthProvider';
import React from 'react';
import { SafeAreaView } from 'react-native';

export default () => {
  const { user } = useAuth();
  const [phone, setPhone] = React.useState('');

  const handleSignIn = () => {
    console.log('Signed In with phone number:', phone);
  };

  return (
    <SafeAreaView>
      <Input variant="outline" size="md">
        <InputField
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          secureTextEntry={true}
        />
      </Input>
      <Button onPress={handleSignIn}>
        <ButtonText>Sign In</ButtonText>
      </Button>
    </SafeAreaView>
  );
};
