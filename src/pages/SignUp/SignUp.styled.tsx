import styled from "styled-components";

export const StyledSignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    ${(props) => props.theme.colors.backgroundSecond},
    ${(props) => props.theme.colors.background},
    ${(props) => props.theme.colors.background}
  );
`;

export const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  width: 500px;
  border-radius: 20px;
  position: relative;
`;

export const StyledSignUpTitle = styled.h2`
  font-size: 40px;
  width: 100%;
  text-align: center;
  padding: 50px 0 50px;
  background-color: ${(props) => props.theme.colors.interaction};
  border-radius: 20px;
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: ${(props) => props.theme.colors.interaction};
  }
`;

export const StyledSignUp = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const StyledInputOrSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  gap: 16px;
  width: 100%;
  min-height: 96px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  height: 40px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: ${(props) => props.theme.boxShadow.purple};
  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.colors.interaction};
  }
`;

export const StyledSubmitForm = styled.input`
  width: 100%;
  background-color: #ffffff;
  border: none;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: 0.2s;
  box-shadow: ${(props) => props.theme.boxShadow.purple};
  &:hover {
    background-color: ${(props) => props.theme.colors.interaction};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.interaction};
    transform: scale(0.9);
  }
`;
