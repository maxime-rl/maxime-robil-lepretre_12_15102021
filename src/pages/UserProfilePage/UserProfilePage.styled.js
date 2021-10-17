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

export const Btn = styled.button`
  margin-top: 10px;
  padding: 9.2px;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${styleColor.colorWhite};
  border: 0;
  background-color: ${styleColor.colorPrimary};
  cursor: pointer;

  &:hover {
    background-color: ${styleColor.colorPrimaryDarken};
  }
`;
