import styled from "styled-components";

interface Props {
  visible: boolean;
}

export const StyledErrorContainer = styled.div<Props>`
  z-index: 2;
  display: grid;
  grid-template-columns: 4fr 1fr;
  row-gap: 10px;
  position: absolute;
  top: 125px;
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  background-color: #ff0000d8;
  transition: 0.5s;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

export const StyledCloseBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  justify-self: flex-end;
  cursor: pointer;
  img {
    height: 32px;
    color: black;
  }
`;
