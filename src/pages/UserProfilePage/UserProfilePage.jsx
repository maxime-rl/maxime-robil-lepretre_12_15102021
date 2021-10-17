import React, { useState } from "react";
import { UserAccountCard } from "../../components";
import * as S from "./UserProfilePage.styled";

/**
 * Create a UserProfilePage component
 * UserAccountCard content below the function
 * @function UserProfilePage
 */
export default function UserProfilePage() {
  const [editName, setEditName] = useState(false);

  // WIP => test while waiting for data state
  const user = {
    firstName: "Tony",
    lastName: "Jarvis",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
    };
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
    setEditName(false);
  };

  return (
    <>
      <S.Header>
        <S.H1>
          <span>Welcome back</span>
          {!editName ? (
            <span>
              {user.firstName} {user.lastName}
            </span>
          ) : null}
        </S.H1>
        {!editName ? (
          <S.Btn onClick={() => setEditName(true)}>Edit Name</S.Btn>
        ) : (
          <form onSubmit={handleSubmit}>
            <S.InputsContainer>
              <label htmlFor="firstname"></label>
              <input
                id="firstname"
                name="firstname"
                placeholder={user.firstName}
                type="text"
              />
              <label htmlFor="lastname"></label>
              <input
                id="lastname"
                name="lastname"
                placeholder={user.lastName}
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
