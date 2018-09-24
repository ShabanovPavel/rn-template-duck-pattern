import { StackNavigator } from "react-navigation";
import AddingScreen from "../containers/AddingScreen-container";
import MainScreen from "../containers/MainScreen-container";

const AppNavigator = StackNavigator(
  {
    Main: { screen: MainScreen },
    Adding: { screen: AddingScreen },
  },
  {
    navigationOptions: { header: null },
  }
);

export default AppNavigator;
