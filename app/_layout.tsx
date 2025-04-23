import { SplashScreen, Stack } from 'expo-router';
import '@/global.css';
import { useFonts } from 'expo-font';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; // or a loading indicator
  }

  return (
    <GluestackUIProvider mode="light">
      <Stack />
    </GluestackUIProvider>
  );
}
