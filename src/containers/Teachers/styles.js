import styled from "styled-components";
import ReactFancyBox from "react-fancybox";

export const TeachContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const TeachContent = styled.div`
  width: 80%;
`;

export const TeachCard = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  margin-left: 30px;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;

  border-bottom: 1px solid ${({ theme }) => theme.border};

  &:hover {
    background: #6c5dd3;
    color: white;
  }

  background: ${({ isActive }) => (isActive ? "#6c5dd3" : "")};
  color: ${({ isActive }) => (isActive ? "white" : "")};
`;

export const TeacAvatar = styled(ReactFancyBox)`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  object-fit: cover;
  cursor: pointer !important;
`;

export const TeacLeftAvatar = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 5px;
  height: 140px;
  border-radius: 10px;
  object-fit: cover;
`;

export const TeacCity = styled.p``;

export const TeachName = styled.div`
  text-transform: uppercase;
  margin-left: 30px;
`;
export const TeachLeftName = styled.div`
  text-transform: uppercase;
  text-align: center;
`;
export const TeachSpec = styled.div`
  margin-left: 20px;
`;

export const TeachSpecLeft = styled.div`
margin-bottom: 10px;
margin-top: 10px;
overflow-y: auto;
max-height: 120px;
`;

export const TeachNum = styled.a`
  display: block;
  color: ${({ theme }) => theme.text};
  text-align: left;
`;

export const TeacImage = styled.div`
  width: 300px;
  height: 380px;
  padding: 10px;
  border-radius: 8px;

  background: ${({ theme }) => theme.cardImgBg};
  color: ${({ theme }) => theme.text};
  margin: 40px 0 0 50px;
`;

export const AllCards = styled.div`
  /* padding: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.cardBg}; */
`;
