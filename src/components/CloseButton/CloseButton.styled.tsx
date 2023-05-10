import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledCloseButton = styled.img`
  transition: 0.2s;
  cursor: pointer;
  width: 20px;
  &:hover {
    transform: scale(0.9);
  }
  @media ${devices.tablet} {
    width: 32px;
  }
`;
