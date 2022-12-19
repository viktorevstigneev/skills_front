import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ProfileContent = styled.div`
  width: 80%;
`;

export const ProfileMain = styled.div`
  margin: 20px 0 0 20px;
`;

export const ProfileAvatar = styled.img`
  margin-left: auto;
  margin-right: 20px;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer;
`;

export const ProfileUserName = styled.p`
  text-transform: uppercase;
`;

export const ProfileLabel = styled.label``;

export const ProfileInput = styled.input`
  height: 1px;
  width: 1px;
`;

export const ProfileButton = styled.button`
  display: block;

  border-radius: 20px;
  padding: 10px;

  color: ${({theme})=> theme.text};
  border:1px solid #6c5dd3;
  background: transparent;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #6c5dd1;
    color: ${({theme})=> theme.skeleton};
  }
`;
