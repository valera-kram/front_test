import "./Auth.css";

import React from "react";
import { connect } from "react-redux";
import { signIn } from "../actions";

import {
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback,
} from "react-form-with-constraints";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
  }

  handleChange = (e) => {
    this.form.validateFields(e.target);
  };

  contactSubmit = (e) => {
    e.preventDefault();

    this.form.validateFields();

    if (!this.form.isValid()) {
      console.log("form is invalid: do not submit");
    } else {
      console.log("form is valid: submit");
    }
  };

  onEmailChange = (event) => {
    this.form.validateFields(event.target);
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.form.validateFields(event.target);
    this.setState({ password: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.signIn(this.state);
  };

  render() {
    return (
      <div className="ui two column centered grid">
        <FormWithConstraints
          className="ui form"
          ref={(form) => (this.form = form)}
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <br />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              autoComplete="off"
              onChange={this.onEmailChange}
            />
            <FieldFeedbacks for="email">
              <FieldFeedback when="*" />
            </FieldFeedbacks>
          </div>
          <div className="field">
            <label>Password</label>
            <input
              name="password"
              type="password"
              size="50"
              placeholder="password"
              autoComplete="off"
              required
              onChange={this.onPasswordChange}
            />
            <FieldFeedbacks for="name">
              <FieldFeedback when="*" />
            </FieldFeedbacks>
          </div>
          <button className="ui button primary">Sign In</button>
        </FormWithConstraints>
      </div>
    );
  }
}

export default connect(null, { signIn })(Auth);
