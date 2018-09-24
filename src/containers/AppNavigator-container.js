import React from "react";
import { addNavigationHelpers } from "react-navigation";
import { connect } from "react-redux";
import AppNavigator from "../navigators/AppNavigator";

import { addListener } from "../utils/redux-navigation";

class AppWithNavigationState extends React.Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
