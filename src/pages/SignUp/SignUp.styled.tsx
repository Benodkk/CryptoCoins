import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledSignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 54px);
  background: linear-gradient(
    ${(props) => props.theme.colors.backgroundSecond},
    ${(props) => props.theme.colors.background},
    ${(props) => props.theme.colors.background}
  );
  @media ${devices.tablet} {
    height: calc(100vh - 60px);
  }
`;

export const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  width: 70%;
  border-radius: 12px;
  position: relative;
  transform: translateY(24px);
  @media ${devices.tablet} {
    border-radius: 20px;
    width: 500px;
    transform: translateY(30px);
  }
`;

export const StyledSignUpTitle = styled.h2`
  font-size: 24px;
  width: 100%;
  text-align: center;
  padding: 24px 0;
  background-color: ${(props) => props.theme.colors.interaction};
  border-radius: 12px;
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
  @media ${devices.tablet} {
    padding: 50px 0;
    border-radius: 20px;
    font-size: 40px;
  }
`;

export const StyledSignUp = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media ${devices.tablet} {
    padding: 50px;
    gap: 16px;
  }
`;

export const StyledInputOrSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 58px;
  @media ${devices.tablet} {
    gap: 16px;
    min-height: 96px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 6px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: ${(props) => props.theme.boxShadow.purple};
  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.colors.interaction};
  }
  -webkit-appearance: none;
  @media ${devices.tablet} {
    border-radius: 10px;
    font-size: 18px;
    height: 40px;
    padding: 10px;
  }
`;

export const StyledSubmitForm = styled.input`
  width: 100%;
  background-color: #ffffff;
  color: black;
  border: none;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
  -webkit-appearance: none;
  box-shadow: ${(props) => props.theme.boxShadow.purple};
  &:hover {
    background-color: ${(props) => props.theme.colors.interaction};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.interaction};
    transform: scale(0.9);
  }
  @media ${devices.tablet} {
    height: 50px;
    border-radius: 10px;
    font-size: 18px;
  }
`;
