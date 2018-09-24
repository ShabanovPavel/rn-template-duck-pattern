import { ADDING_OPEN_MAIN, MAIN_OPEN_ADDING } from "../utils/actions";

export default function app(
  state = {
    currentUser: { name: "-", age: "-" },
  },
  action = {}
) {
  switch (action.type) {
    case ADDING_OPEN_MAIN:
      return { ...state, currentUser: action.params };
    default:
      return state;
  }
}
app.init = async () => dispatch => {
  //initialization
};

app.openAddingNewUser = () => dispatch => {
  dispatch({
    type: MAIN_OPEN_ADDING,
  });
};
