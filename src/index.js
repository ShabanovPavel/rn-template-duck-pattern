// @flow
import React from "react";
import { Platform } from "react-native";
import SplashScreen from "react-native-smart-splash-screen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import LaunchScreen from "./components/LaunchScreen";
import AppNavigator from "./containers/AppNavigator-container";
import appReducer from "./reducer/app-reducer";
import configureStore from "./store/configure-store";
import { requestCameraPermission } from "./utils/permissions";
const { store, persistor } = configureStore();

class AppInitializer extends React.Component {
  async componentWillMount() {
    await store.dispatch(appReducer.init());
    await requestCameraPermission();
  }

  componentDidMount() {
    Platform.select({
      ios: () =>
        SplashScreen.close({
          animationType: SplashScreen.animationType.fade,
          duration: 500,
          delay: 250,
        }),
      android: () => {},
    })();
  }

  render() {
    return this.props.children;
  }
}

export default () => (
  <Provider store={store}>
    <PersistGate loading={<LaunchScreen />} persistor={persistor}>
      <AppInitializer>
        <AppNavigator />
      </AppInitializer>
    </PersistGate>
  </Provider>
);
