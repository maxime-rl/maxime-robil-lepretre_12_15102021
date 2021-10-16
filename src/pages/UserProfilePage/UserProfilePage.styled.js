import styled from "styled-components";
import { styleColor } from "../../utils/style/variables";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  color: ${styleColor.colorWhite};
  background: ${styleColor.colorSecondary};
`;

export const H1 = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: calc(100vh - 307px);
  background: ${styleColor.colorSecondary};
`;
