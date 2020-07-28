import React from "react";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

import _trim from "lodash/trim";

import { connect } from "react-redux";
import { createSession } from "../actions/sessionsActions";
import { setError } from "../actions/errorsAction";

const checkEmptyString = (str) => {
  return !!str.replace(/\s/g, "").length;
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: "",
        error: "",
      },
      password: {
        value: "",
        error: "",
      },
      loading: false,
    };
  }

  onNextClick = () => {
    const { username, password } = this.state;
    let hasError = false;

    if (!checkEmptyString(username.value)) {
      this.setState({
        username: { ...username, error: `Email or Phone can't be empty` },
      });
      hasError = true;
    }
    if (!password.value) {
      this.setState({
        password: { ...password, error: `Password can't be empty` },
      });
      hasError = true;
    }
    if (hasError) return;
    this.setState({ loading: true }, () => {
      this.props
        .createSession({
          email: _trim(username.value),
          password: password.value,
        })
        .catch((error) => {
          this.setState({ loading: false }, () => {
            this.props.setError(error);
          });
        });
    });
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.onNextClick();
    }
  };

  render = () => {
    const { username, password, loading } = this.state;

    return (
      <React.Fragment>
        <Box>
          <FormControl fullWidth margin="dense" error={!!username.error}>
            <InputLabel htmlFor="username">E-mail or Phone</InputLabel>
            <Input
              id="username"
              value={username.value}
              onChange={({ target: { value } }) =>
                this.setState({
                  username: {
                    ...username,
                    value: value.toLowerCase(),
                    error: "",
                  },
                })
              }
              onKeyDown={this.handleKeyDown}
            />
            {!!username.error && (
              <FormHelperText>{username.error}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth margin="dense" error={!!password.error}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type={"password"}
              value={password.value}
              onChange={(event) =>
                this.setState({
                  password: {
                    ...this.state.password,
                    value: event.target.value,
                    error: "",
                  },
                })
              }
              onKeyDown={this.handleKeyDown}
            />
            {!!password.error && (
              <FormHelperText>{password.error}</FormHelperText>
            )}
          </FormControl>
          <Box pl={1} pr={1} pt={4} pb={5}>
            <Button
              variant="contained"
              color="primary"
              disabled={loading}
              fullWidth
              onClick={this.onNextClick}
            >
              Next
            </Button>
          </Box>
        </Box>
      </React.Fragment>
    );
  };
}

const mapStateToProps = (state) => {
  return { authorization: state.authorization };
};

export default connect(mapStateToProps, {
  createSession,
  setError,
})(SignIn);