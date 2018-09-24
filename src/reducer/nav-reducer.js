import { NavigationActions } from "react-navigation";
import AppNavigator from "../navigators/AppNavigator";
import { APP_INIT, MAIN_OPEN_ADDING, ADDING_OPEN_MAIN } from "../utils/actions";

const secondAction = AppNavigator.router.getActionForPathAndParams("Main");
const initialNavState = AppNavigator.router.getStateForAction(secondAction);

export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case ADDING_OPEN_MAIN:
    case APP_INIT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case MAIN_OPEN_ADDING:
      nextState = navigation(state, "Adding");
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}
const navigation = (state, nameScreen) => {
  let nextState;
  if (!state.routes.some(el => el.routeName === nameScreen)) {
    nextState = AppNavigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: nameScreen }),
      state
    );
  }
  return nextState;
};
