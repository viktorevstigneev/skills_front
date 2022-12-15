import styled from "styled-components";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

export const TopContainer = styled(Link)`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  align-items: center;
  text-decoration: none;
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
  background: ${({theme})=> theme.skeleton} !important;
  border-radius: 100px;
`;

export const StyledSkeletonName = styled(Skeleton)`
  background: ${({ theme }) => theme.skeleton} !important;
`;

export const TopName = styled.p`
  margin-right: 30px;
  font-size: 20px;
	color: black;
	
`;
