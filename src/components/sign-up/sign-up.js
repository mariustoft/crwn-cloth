import React from "react";

import "./sign-up.scss";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName } = this.state;

    if (this.state.password !== this.state.confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="text"
            name="displayName"
            value={this.state.displayName}
            label="displayName"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            label="Password"
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
