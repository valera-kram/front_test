import React from "react";
import { connect } from "react-redux";

import Auth from "./Auth";
import UserProfile from "./UserProfile";

class App extends React.Component {
  renderAuth = () => {
    return <Auth />;
  };

  render() {
    if (!this.props.access_token) {
      return <div className="ui container">{this.renderAuth()}</div>;
    } else if (this.props.access_token) {
      return (
        <div>
          <UserProfile />
        </div>
      );
    } else return <div>Loading...</div>;
  }
}

const mapStateToProps = (state) => {
  return { access_token: state.auth.access_token };
};

export default connect(mapStateToProps)(App);
