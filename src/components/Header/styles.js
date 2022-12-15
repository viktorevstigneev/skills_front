import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  width: 20%;
  background: ${({ theme }) => theme.headerBackground};
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  transition: 0.4s;
`;

export const HeaderContainer = styled.div`
  height: 5em;
  margin: 0 auto;
  margin-left: 50px;
`;

export const HeaderNav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  margin-top: 50px;
`;

export const HeaderLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  text-transform: uppercase;
  margin-top: 6px;

  padding: 12px 12px 12px 8px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  &:hover {
    background: #6c5dd3;
    color: white;
  }

  background: ${({ isActive }) => (isActive ? "#6c5dd3" : "")};
  color: ${({ isActive }) => (isActive ? "white" : "")};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;
