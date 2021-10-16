import React from "react";
import PropTypes from "prop-types";
import * as S from "./FeatureCard.styled";

/**
 * Create a FeatureCard component
 * @function FeatureCard
 * @param {string} icon
 * @param {string} alt
 * @param {string} title
 * @param {string} text
 */
export default function FeatureCard({ icon, alt, title, text }) {
  return (
    <S.FeatureCard>
      <S.Icon src={icon} alt={alt} />
      <S.Title>{title}</S.Title>
      <p>{text}</p>
    </S.FeatureCard>
  );
}

/**
 * PropTypes for the FeatureCard component
 */
FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
