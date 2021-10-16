import styled from "styled-components";
import { styleColor } from "../../utils/style/variables";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 15px;
  border-top: 2px solid ${styleColor.colorGrayLighten};
`;

export const P = styled.p`
  margin: 0;
`;
