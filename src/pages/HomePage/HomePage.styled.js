import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 920px) {
    flex-direction: row;
  }
`;
