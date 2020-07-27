import React from "react";
import { connect } from "react-redux";

import Auth from "./Auth";
import UserProfile from "./UserProfile";

class App extends React.Component {
  renderAuth = () => {
    return <Auth />;
  };

  render() {
    if (!this.props.isSignedIn) {
      return <div className="ui container">{this.renderAuth()}</div>;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <UserProfile />
        </div>
      );
    } else return <div>Loading...</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(App);
