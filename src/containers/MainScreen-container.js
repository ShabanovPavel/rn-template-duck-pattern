import { connect } from "react-redux";
import MainScreen from "../components/MainScreen";
import appReducer from "../reducer/app-reducer";

export default connect(
  state => ({ user: state.app.currentUser }),
  dispatch => ({
    onOpenAddingNewUser: () => {
      dispatch(appReducer.openAddingNewUser());
    },
  })
)(MainScreen);
