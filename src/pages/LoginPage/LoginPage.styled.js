import styled from "styled-components";
import { styleColor } from "../../utils/style/variables";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 128px);
  background: ${styleColor.colorSecondary};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 230px;
  width: 100%;
  background: ${styleColor.colorWhite};
  @media (min-width: 576px) {
    padding: 35px;
  }
`;

export const I = styled.i`
  text-align: center;
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  input {
    padding: 10px;
    font-size: 1.2rem;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  margin-bottom: 15px;

  input {
    margin-left: 0;
  }

  label {
    margin-left: 5px;
  }
`;

export const BtnSubmit = styled.button`
  margin-top: 10px;
  padding: 9.2px;
  width: 100%;
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

export const ErrorMessage = styled.p`
  font-size: 1rem;
  color: red;
`;
