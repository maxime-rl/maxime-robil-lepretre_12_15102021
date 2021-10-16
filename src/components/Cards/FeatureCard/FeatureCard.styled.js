import styled from "styled-components";
import { styleColor } from "../../../utils/style/variables";

export const FeatureCard = styled.div`
  flex: 1;
  text-align: center;
  padding: 40px;
`;

export const Icon = styled.img`
  padding: 10px;
  width: 100px;
  border: 10px solid ${styleColor.colorPrimary};
  border-radius: 50%;
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  color: ${styleColor.colorGrayDarken};
  font-size: 2rem;
  font-weight: bold;
`;
