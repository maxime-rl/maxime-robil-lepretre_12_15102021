import styled from "styled-components";
import { Link } from "react-router-dom";
import { styleColor } from "../../utils/style/variables";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px 5px 10px;
  background: ${styleColor.colorWhite};
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Li = styled.li`
  margin-right: 5px;
`;

export const A = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

export const I = styled.i`
  margin-right: 5px;
`;

export const Img = styled.img`
  max-width: 100%;
  width: 150px;
  @media (min-width: 768px) {
    width: 200px;
  }
`;
