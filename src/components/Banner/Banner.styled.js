import styled from "styled-components";
import { styleColor } from "../../utils/style/variables";

export const BannerContainer = styled.div`
  background-image: url(${(props) => props.backgroundImg});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;
  @media only screen and (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  top: 20px;
  width: 200px;
  background: ${styleColor.colorWhite};
  padding: 30px;
  text-align: left;
  margin: 0 auto;
  @media only screen and (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 50px;
  }
`;

export const H3 = styled.h3`
  margin: 0;
  white-space: break-spaces;
  font-size: 1.6rem;
  @media only screen and (min-width: 920px) {
    font-size: 2.4rem;
  }
`;

export const P = styled.p`
  margin-bottom: 0;
  font-size: 1.4rem;
  @media only screen and (min-width: 920px) {
    font-size: 1.8rem;
  }
`;
