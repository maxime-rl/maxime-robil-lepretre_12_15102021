import React from "react";
import * as S from "./NavBar.styled";
import logo from "../../assets/images/argentBankLogo.png";

export default function NavBar() {
  const isLogged = false;
  const userName = "Tony";

  return (
    <S.Nav>
      <S.A to="/">
        <S.Img src={logo} alt="logo Argent Bank" />
      </S.A>
      {isLogged ? (
        <S.Ul>
          <S.Li>
            <S.A to="/profile">
              <S.I className="fa fa-user-circle"></S.I>
              {userName}
            </S.A>
          </S.Li>
          <S.Li>
            <S.A to="/">
              <S.I className="fa fa-sign-out"></S.I>
              Sign Out
            </S.A>
          </S.Li>
        </S.Ul>
      ) : (
        <S.Ul>
          <S.Li>
            <S.A to="/login">
              <S.I className="fa fa-user-circle"></S.I>
              Sign In
            </S.A>
          </S.Li>
        </S.Ul>
      )}
    </S.Nav>
  );
}
