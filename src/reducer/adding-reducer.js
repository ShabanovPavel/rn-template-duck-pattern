import { ADDING_OPEN_MAIN } from "../utils/actions";

export default function adding(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

adding.openMain = params => dispatch => {
  dispatch({
    type: ADDING_OPEN_MAIN,
    params,
  });
};
