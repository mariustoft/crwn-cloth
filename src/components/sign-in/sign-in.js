import React from "react";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.scss";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have and account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton isGoogleSignInButton onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
