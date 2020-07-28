import React from "react";
import { connect } from "react-redux";

import Profile from "./Profile";
import SignIn from "./SignIn";

class App extends React.Component {
  render() {
    if (!this.props.access_token) {
      return <div className="ui container">{<SignIn />}</div>;
    } else if (this.props.access_token) {
      return (
        <div>
          <Profile />
        </div>
      );
    } else return <div>Loading...</div>;
  }
}

const mapStateToProps = (state) => {
  if (state.authorization.createdSession) {
    return { access_token: state.authorization.createdSession.access_token };
  } else {
    return { access_token: null };
  }
};

export default connect(mapStateToProps)(App);
