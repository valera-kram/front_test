import React from "react";
import { connect } from "react-redux";

import Auth from "./Auth";

class App extends React.Component {
  renderAuth = () => {
    return <Auth />;
  };

  render() {
    return <div className="ui container">{this.renderAuth()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(App);
