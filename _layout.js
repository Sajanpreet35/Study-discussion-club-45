
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{
            title: 'Welcome'
          }}
        />
        <Stack.Screen 
          name="signup" 
          options={{
            title: 'Sign Up'
          }}
        />
        <Stack.Screen 
          name="login" 
          options={{
            title: 'Login'
          }}
        />
        <Stack.Screen 
          name="exam-list" 
          options={{
            title: 'Exam List'
          }}
        />
        <Stack.Screen 
          name="payment" 
          options={{
            title: 'Payment'
          }}
        />
      </Stack>
    </>
  );
}
