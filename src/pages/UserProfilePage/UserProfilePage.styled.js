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

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 576px) {
    flex-direction: row;
  }

  input {
    margin: 10px;
    padding: 10px;
    font-size: 1.2rem;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 77px;

    &:first-child {
      margin-right: 7px;
      @media (min-width: 576px) {
        margin-right: 10px;
      }
    }

    &:last-child {
      margin-left: 7px;
      @media (min-width: 576px) {
        margin-left: 10px;
      }
    }
  }
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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: calc(100vh - 307px);
  background: ${styleColor.colorSecondary};
`;
