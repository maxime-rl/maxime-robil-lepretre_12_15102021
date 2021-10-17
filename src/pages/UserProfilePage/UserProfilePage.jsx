import React from "react";
import { UserAccountCard } from "../../components";
import * as S from "./UserProfilePage.styled";

/**
 * Create a UserProfilePage component
 * UserAccountCard content below the function
 * @function UserProfilePage
 */
export default function UserProfilePage() {
  // WIP => test while waiting for data state
  const user = {
    userName: "Tony",
    lastName: "Jarvis",
  };

  return (
    <>
      <S.Header>
        <S.H1>
          <span>Welcome back</span>
          <span>
            {user.userName} {user.lastName}
          </span>
        </S.H1>
        <S.Btn>Edit Name</S.Btn>
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
