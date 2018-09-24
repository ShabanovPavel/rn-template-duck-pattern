import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import adding from "./adding-reducer";
import app from "./app-reducer";
import nav from "./nav-reducer";

const rootReducer = combineReducers({
  app,
  adding,
  nav,
  form,
});

export default rootReducer;
