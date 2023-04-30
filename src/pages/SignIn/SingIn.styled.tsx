import styled from "styled-components";

export const StyledSignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const StyledSignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #797979;
  color: black;
  width: 500px;
  border-radius: 20px;
`;

export const StyledSignInTitle = styled.h2`
  font-size: 40px;
  width: 100%;
  text-align: center;
  padding: 50px 0;
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: white;
  }
`;

export const StyledInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  &:focus {
    border: none;
    background-color: ${(props) => props.theme.colors.interaction};
  }
`;

export const StyledSubmitForm = styled.input`
  background-color: #ffffff;
  border: none;
  width: 80px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.interaction};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.interaction};
    transform: scale(0.9);
  }
`;
