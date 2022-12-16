import styled from "styled-components";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

export const TopContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const TopLogout = styled(Link)`
  border: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 5px;
  transition: 0.5s;

  &:hover {
    background: ${({ theme }) => theme.skeleton};
    color: ${({ theme }) => theme.skeleton};
  }
`;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;

export const StyledSkeletonImg = styled(Skeleton)`
  margin-left: auto;
  margin-right: 20px;
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.skeleton} !important;
  border-radius: 100px;
`;

export const StyledSkeletonName = styled(Skeleton)`
  background: ${({ theme }) => theme.skeleton} !important;
`;

export const TopName = styled(Link)`
  margin-right: 30px;
  font-size: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;
