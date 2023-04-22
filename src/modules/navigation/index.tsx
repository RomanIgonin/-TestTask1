import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '@src/modules/auth/ui/screens/start';
import NoConnectionScreen from '@src/modules/noConnection/ui';
import SignUpScreen from '@src/modules/auth/ui/screens/signUp';
import LoginScreen from '@src/modules/auth/ui/screens/login';
import HomeScreen from '@src/modules/home/ui/index';
import {
  isUserLoadingSelector,
  UserSelector,
} from '@src/modules/auth/store/selectors';
import { useAppSelector } from '@src/hooks';
import Loader from '@src/modules/loader/ui';

const Stack = createNativeStackNavigator();

export default function Navigate() {
  const currentUser = useAppSelector(UserSelector);
  const isUserLoading = useAppSelector(isUserLoadingSelector);

  if (isUserLoading) {
    return <Loader />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!currentUser ? (
          <>
            <Stack.Screen
              name="StartScreen"
              component={StartScreen}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{ gestureEnabled: false }}
            />
          </>
        ) : (
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ gestureEnabled: false }}
          />
        )}
        <Stack.Screen
          name="NoConnectionScreen"
          component={NoConnectionScreen}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
