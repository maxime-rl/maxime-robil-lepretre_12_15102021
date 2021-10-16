import React from "react";
import PropTypes from "prop-types";
import * as S from "./UserAccountCard.styled";

/**
 * Create a UserAccountCard component
 * @function UserAccountCard
 * @param {string} title
 * @param {string} amount
 * @param {string} description
 */
export default function UserAccountCard({ title, amount, description }) {
  return (
    <S.Section>
      <S.AccountContainer>
        <S.H3>{title}</S.H3>
        <S.AccountAmount>{amount}</S.AccountAmount>
        <S.AccountDescription>{description}</S.AccountDescription>
      </S.AccountContainer>
      <button>View transactions</button>
    </S.Section>
  );
}

/**
 * PropTypes for the UserAccountCard component
 */
UserAccountCard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
