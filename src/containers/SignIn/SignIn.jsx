import React, { Fragment, useCallback, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import { signIn } from "./utils";
import {
  SignInMainBlock,
  SignInTitle,
  SignInForm,
  SignInLabel,
  SignInInput,
  SignInButton,
  SignInBlockRight,
} from "./styles";
import { API_URL } from "../../store/constants";

import SignInImg from "../../img/signin.png";

const SignIn = () => {
  const [user, setUser] = useState({});
  console.log("user: ", user);

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
    const formData = Object.fromEntries(new FormData(evt.target));

    signIn({ formData, setUser });
  });

  return user._id ? (
    <Redirect push to={`/profile/${user._id}`} />
  ) : (
    <Fragment>
      <SignInTitle>Войти</SignInTitle>
      <SignInMainBlock>
        <SignInForm action={API_URL} method="POST" onSubmit={handleFormSubmit}>
          <SignInLabel htmlFor="username">Логин</SignInLabel>
          <SignInInput
            name="username"
            id="username"
            placeholder="Login"
            type="text"
            required={true}
          />
          <SignInLabel htmlFor="password">Пароль</SignInLabel>
          <SignInInput
            name="password"
            id="password"
            placeholder="Password"
            type="password"
            required={true}
          />
          <SignInButton type="submit">отправить</SignInButton>
        </SignInForm>
        <SignInBlockRight src={SignInImg} />
      </SignInMainBlock>
    </Fragment>
  );
};

export default SignIn;
