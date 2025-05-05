import { Tabs, useRouter } from 'expo-router';
import { Heart, Home, Plus, Search, User } from 'lucide-react-native';

export default function TabLayout() {
  const router = useRouter();
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => <Home color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => <Search color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="postredirect"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => <Plus color={color} size={24} />,
        }}
        listeners={{
          tabPress: (e) => {
            router.push('./post');
          },
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => <Heart color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => <User color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
