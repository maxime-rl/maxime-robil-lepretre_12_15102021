import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../../store/middlewares/userAuthMiddleware";
import * as S from "./LoginPage.styled";

/**
 * Create a LoginPage component
 * @function LoginPage
 */
export default function LoginPage() {
  const user = (state) => state.userReducer;
  const currentUser = useSelector(user);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Sign In";
  }, []);

  const handleInputChange = (e) => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userAuth(email, password));
  };

  if (currentUser.isLogged) return <Redirect to="/profile" />;

  return (
    <S.Main>
      <S.Section>
        <S.I className="fa fa-user-circle"></S.I>
        <S.H1>Sign In</S.H1>
        <form onSubmit={handleSubmit}>
          <S.InputContainer>
            <label htmlFor="userEmail">Useremail</label>
            <input
              id="userEmail"
              name="email"
              type="text"
              onChange={handleInputChange}
              required
            />
          </S.InputContainer>
          <S.InputContainer>
            <label htmlFor="userPassword">Password</label>
            <input
              id="userPassword"
              name="password"
              type="password"
              onChange={handleInputChange}
              required
            />
          </S.InputContainer>
          {(currentUser.error === "Error: User not found!" ||
            currentUser.error === "Error: Password is invalid") && (
            <S.ErrorMessage>{currentUser.error}</S.ErrorMessage>
          )}
          <S.CheckboxContainer>
            <input id="rememberMe" name="remember" type="checkbox" />
            <label htmlFor="rememberMe">Remember me</label>
          </S.CheckboxContainer>
          <S.BtnSubmit type="submit">Sign In</S.BtnSubmit>
        </form>
      </S.Section>
    </S.Main>
  );
}
