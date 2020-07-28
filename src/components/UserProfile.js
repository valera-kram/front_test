import React from "react";
import { connect } from "react-redux";

import { fetchUserProfile, signOut } from "../actions";

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchUserProfile(this.props.access_token);
  }

  renderUserProfile = () => {
    if (this.props.user) {
      return this.props.user.map((current_user) => {
        return (
          <div key={current_user.id}>
            <div className="ui segment">
              First name: {current_user.first_name}
            </div>
            <div className="ui segment">
              Last name: {current_user.last_name}
            </div>
            <div className="ui segment">Phone: {current_user.phone}</div>
          </div>
        );
      });
    }
  };

  onSignOut = () => {
    this.props.signOut();
  };

  render() {
    return (
      <div className="ui segment">
        <h1>Your profile!</h1>
        <div className="ui two column grid">{this.renderUserProfile()}</div>
        <br />
        <button className="ui button primary" onClick={this.onSignOut}>
          Sign Out
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.user) {
    return {
      access_token: state.auth.access_token,
      user: Object.values(state.user),
    };
  }
  return { access_token: state.auth.access_token };
};

export default connect(mapStateToProps, { fetchUserProfile, signOut })(
  UserProfile
);
