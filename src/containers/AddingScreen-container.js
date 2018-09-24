import { connect } from "react-redux";
import AddingScreen from "../components/AddingScreen";
import addingReducer from "../reducer/adding-reducer";

export default connect(
  state => ({}),
  dispatch => ({
    onOpenMain: params => {
      dispatch(addingReducer.openMain(params));
    },
  })
)(AddingScreen);
