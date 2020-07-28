import React from "react";
import { connect } from "react-redux";

import { getProfile } from "../actions/profileAction";
import { deleteSession } from "../actions/sessionsActions";

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.access_token);
  }

  renderUserProfile = () => {
    const { profile } = this.props;

    return (
      <div key={profile.id}>
        <div className="ui segment">First name: {profile.first_name}</div>
        <div className="ui segment">Last name: {profile.last_name}</div>
        <div className="ui segment">Phone: {profile.phone}</div>
      </div>
    );
  };

  onSignOut = () => {
    this.props.deleteSession();
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
  if (state.profile) {
    return {
      access_token: state.authorization.createdSession.access_token,
      profile: state.profile.user,
    };
  }
};

export default connect(mapStateToProps, { getProfile, deleteSession })(
  UserProfile
);
