import React, { Fragment, useCallback, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import { signUp } from "./utils";
import {
  SignInMainBlock,
  SignInTitle,
  SignInForm,
  SignInLabel,
  SignInInput,
  SignInButton,
  SignInBlockRight,
  SignUP,
} from "./styles";
import { API_URL } from "../../store/constants";

import SignInImg from "../../img/signin.png";

const SignIn = () => {
  const [user, setUser] = useState({});
  console.log("user: ", user);

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
    const formData = Object.fromEntries(new FormData(evt.target));

    signup({ formData, setUser });
  });

  return user._id ? (
    <Redirect push to={`/courses`} />
  ) : (
    <Fragment>
      <SignInTitle>Зарегистироваться</SignInTitle>
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
      <SignUP to='/signin'>Есть аккаунт? Войти</SignUP>
    </Fragment>
  );
};

export default SignIn;
