import styled from "styled-components";

export const StyledSignInContainer = styled.div`
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

export const StyledSignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  width: 500px;
  border-radius: 20px;
  position: relative;
`;

export const StyledSignInTitle = styled.h2`
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

export const StyledSignIn = styled.div`
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
export const StyledWithGoogle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
  img {
    height: 30px;
  }
`;
export const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 30px 0 20px;
`;

export const StyledSignUpNavigate = styled.div`
  cursor: pointer;
  transition: 0.2s;
  color: ${(props) => props.theme.colors.backgroundSecond};
  &:hover {
    transform: translateY(2px);
    text-shadow: 0.4px 0.4px 1px rgb(101, 67, 250);
  }
  &:active {
    transform: translateY(4px);
    transition: 0.2s;
  }
`;
