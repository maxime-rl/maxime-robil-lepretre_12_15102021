import React from "react";
import * as S from "./Footer.styled";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <S.Footer>
      <S.P>Copyright {currentYear} Argent Bank</S.P>
    </S.Footer>
  );
}
