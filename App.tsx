import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { index } from '@src/styles/theme';
import { SafeAreaView, StatusBar } from 'react-native';
import MainStack from '@src/modules/navigation/index';
import { store } from '@src/store';
import { Provider } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { authActions } from '@src/modules/auth/store';

export default function App() {
  const currentUser = auth().currentUser;
  if (currentUser) {
    store.dispatch(authActions.setUser(currentUser));
  }

  return (
    <ThemeProvider theme={index}>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <StatusBar barStyle="dark-content" />
          <MainStack />
        </SafeAreaView>
      </Provider>
    </ThemeProvider>
  );
}
