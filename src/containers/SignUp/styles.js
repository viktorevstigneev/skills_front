import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInMainBlock = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;


export const SignInTitle = styled.h3`
  text-align: center;
  margin-top: 10%;
  font-size: 28px;
`;

export const SignInForm = styled.form`
  padding: 20px;
  width: 40%;
`;

export const SignInLabel = styled.label`
  margin-top: 10px;
  display: block;
  text-transform: uppercase;
`;

export const SignInInput = styled.input`
  display: block;
  margin-top: 20px;
  padding: 10px;
  width: 80%;
  border-radius: 5px;

  border: 1px solid #6c5dd3;
`;

export const SignInButton = styled.button`
  display: block;
  width: 85%;
  margin-top: 20px;
  padding: 10px 20px;
  background: #6c5dd3;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #6c5da7;
    color: #fff8ff;
  }
`;

export const SignInBlockRight = styled.img`
  width: 40%;
  height: 300px;
`;


export const SignUP = styled(Link)`
  display: block;
  color: ${({theme})=> theme.text};
  text-decoration: none;
  margin-top: 20px;
  font-size: 18px;
`;