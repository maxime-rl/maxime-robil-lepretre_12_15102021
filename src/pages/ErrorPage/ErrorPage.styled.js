import styled from "styled-components";
import { styleColor } from "../../utils/style/variables";
import { Link } from "react-router-dom";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: calc(100vh - 128px);
`;

export const H1 = styled.h1`
  color: ${styleColor.colorGrayDarken};
  font-size: 4rem;
`;

export const P = styled.p`
  text-align: center;
  font-size: 2.2rem;
`;

export const A = styled(Link)`
  text-decoration: underline;
  margin-bottom: 80px;
`;
