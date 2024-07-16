import React, { useEffect, useRef } from "react";
import { AppState, Button } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { checkToken } from "./src/api/User";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/redux/store';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import RNBootSplash from "react-native-bootsplash";




function App() {

  // Rendering the App component with a Provider and NavigationContainer component
  // We're passing in the store prop to the Provider component, making the store available to all child components

  const appState = useRef(AppState.currentState);


  useEffect(() => {

    const subscription = AppState.addEventListener('change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('You have come back into the app');
          await checkToken();
          //we are coming from background to the foreground
        }

        appState.current = nextAppState;
      },
    );

    checkToken();
    console.log('Application has rendered');
  }, []);


  return (
    
    <Provider store={store}>

      <PersistGate persistor={persistor} loading={null}>

        <NavigationContainer onReady={() => RNBootSplash.hide()}>
          <RootNavigation />
        </NavigationContainer>

      </PersistGate>

    </Provider>
  );
}


export default App;
