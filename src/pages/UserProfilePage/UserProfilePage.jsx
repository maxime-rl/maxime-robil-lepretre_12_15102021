import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { getUserInfos } from "../../store/middlewares/userInfos";
import { UserAccountCard } from "../../components";
import * as S from "./UserProfilePage.styled";

/**
 * Create a UserProfilePage component
 * UserAccountCard content below the function
 * @function UserProfilePage
 */
export default function UserProfilePage() {
  const user = (state) => state.userReducer;
  const currentUser = useSelector(user);
  const dispatch = useDispatch();

  const [editName, setEditName] = useState(false);

  useEffect(() => {
    dispatch(getUserInfos(currentUser.token));
  }, [dispatch, currentUser.token]);

  useEffect(() => {
    document.title = "Profile";
  }, []);

  if (!currentUser.isLogged) return <Redirect to="/" />;

  return (
    <>
      <S.Header>
        <S.H1>
          <span>Welcome back</span>
          {!editName ? (
            <span>
              {currentUser.firstName} {currentUser.lastName}
            </span>
          ) : null}
        </S.H1>
        {!editName ? (
          <S.Btn onClick={() => setEditName(true)}>Edit Name</S.Btn>
        ) : (
          <form>
            <S.InputsContainer>
              <label htmlFor="firstname"></label>
              <input
                id="firstname"
                name="firstname"
                placeholder={currentUser.firstName}
                type="text"
              />
              <label htmlFor="lastname"></label>
              <input
                id="lastname"
                name="lastname"
                placeholder={currentUser.lastName}
                type="text"
              />
            </S.InputsContainer>
            <S.BtnContainer>
              <S.Btn type="submit">Save</S.Btn>
              <S.Btn onClick={() => setEditName(false)}>Cancel</S.Btn>
            </S.BtnContainer>
          </form>
        )}
      </S.Header>
      <S.Main>
        <h2 className="sr-only">Account</h2>
        {userAccounts.map((account, index) => (
          <UserAccountCard
            key={index}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </S.Main>
    </>
  );
}

const userAccounts = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];
