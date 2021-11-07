import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/userAuthActions";
import * as S from "./NavBar.styled";
import logo from "../../assets/images/argentBankLogo.png";

/**
 * Create a NavBar component
 * @function NavBar
 */
export default function NavBar() {
  const user = (state) => state.userReducer;
  const currentUser = useSelector(user);
  const dispatch = useDispatch();

  return (
    <S.Nav>
      <S.A to="/">
        <S.Img src={logo} alt="logo Argent Bank" />
      </S.A>
      {currentUser.isLogged ? (
        <S.Ul>
          <S.Li>
            <S.A to="/profile">
              <S.I className="fa fa-user-circle"></S.I>
              {currentUser.firstName}
            </S.A>
          </S.Li>
          <S.Li>
            <S.A to="/" onClick={() => dispatch(logout())}>
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
