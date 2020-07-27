import React from "react";
// import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signIn } from "../actions";

import { validate } from "validate.js";

import constraints from "../constraints";

class Auth extends React.Component {
  //   renderInput = ({ input, label }) => {
  //     return (
  //       <div>
  //         <label>{label}</label>
  //         <input {...input} autoComplete="off" />
  //       </div>
  //     );
  //   };

  state = { email: "example@gmail.com", password: "" };

  //   onPressSignIn = () => {
  //     const validationResult = validate(this.state.data, constraints);
  //     this.setState({ errors: validationResult });
  //   };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.signIn(this.state);
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          {/* <Field
            name="email"
            component={this.renderInput}
            label="Enter email"
          />
          <Field
            name="password"
            component={this.renderInput}
            label="Enter password"
          /> */}
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={this.onEmailChange}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.onPasswordChange}
            />
          </div>
          <button className="ui button primary">Sign In</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { signIn })(Auth);
