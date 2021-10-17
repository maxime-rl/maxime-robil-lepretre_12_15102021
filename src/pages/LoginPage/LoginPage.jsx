import React from "react";
import * as S from "./LoginPage.styled";

/**
 * Create a LoginPage component
 * @function LoginPage
 */
export default function LoginPage() {
  // WIP => test while waiting for data state
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };

  return (
    <S.Main>
      <S.Section>
        <S.I className="fa fa-user-circle"></S.I>
        <S.H1>Sign In</S.H1>
        <form onSubmit={handleSubmit}>
          <S.InputContainer>
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" required />
          </S.InputContainer>
          <S.InputContainer>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="text" required />
          </S.InputContainer>
          <S.CheckboxContainer>
            <input id="remember-me" name="remember-me" type="checkbox" />
            <label htmlFor="remember-me">Remember me</label>
          </S.CheckboxContainer>
          <S.BtnSubmit type="submit">Sign In</S.BtnSubmit>
        </form>
      </S.Section>
    </S.Main>
  );
}
