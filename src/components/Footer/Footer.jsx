import React from "react";
import * as S from "./Footer.styled";

/**
 * Create a Footer component
 * @function Footer
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <S.Footer>
      <S.P>Copyright {currentYear} Argent Bank</S.P>
    </S.Footer>
  );
}
