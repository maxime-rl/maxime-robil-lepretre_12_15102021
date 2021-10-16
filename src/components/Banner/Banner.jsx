import React from "react";
import PropTypes from "prop-types";
import * as S from "./Banner.styled";

/**
 * Create a Banner component
 * @function Banner
 * @param {string} backgroundImg
 * @param {string} title
 * @param {string} subtitle
 * @param {string} text
 */
export default function Banner({ backgroundImg, title, subtitle, text }) {
  return (
    <S.BannerContainer backgroundImg={backgroundImg}>
      <h2 className="sr-only">{title}</h2>
      {subtitle ? (
        <S.BannerContent>
          <S.H3>{subtitle}</S.H3>
          <S.P>{text}</S.P>
        </S.BannerContent>
      ) : null}
    </S.BannerContainer>
  );
}

/**
 * PropTypes for the Banner component
 */
Banner.propTypes = {
  backgroundImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
