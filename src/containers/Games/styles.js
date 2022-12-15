import styled from "styled-components";

export const GameContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const GameContent = styled.div`
  width: 80%;
`;

export const GameTabs = styled.div`
  margin-left: 30px;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  height: 100%;
`;

export const GameTab = styled.iframe`
  width: 60%;
  height: 100%;
`;

export const GameUl = styled.div`
margin: 40px 0 0 40px;
`;
export const GameName = styled.p`
  cursor: pointer;
  padding: 15px;
  border-radius: 5px;
  &:hover {
    background: #6c5dd3;
    color: white;
  }

  background: ${({ isActive }) => (isActive ? "#6c5dd3" : "")};
  color: ${({ isActive }) => (isActive ? "white" : "")};
`;
