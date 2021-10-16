import React from "react";
import * as S from "./ErrorPage.styled";

/**
 * Create a ErrorPage component
 * @function ErrorPage
 */
export default function ErrorPage() {
  return (
    <S.Section>
      <S.H1>Error</S.H1>
      <S.P>The page you are requesting cannot be found</S.P>
      <S.A to="/">Back to the homepage</S.A>
    </S.Section>
  );
}
