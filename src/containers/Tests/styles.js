import styled from "styled-components";

export const TestContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const TestContent = styled.div`
  width: 80%;
`;

export const TestTabs = styled.div`
  margin-left: 30px;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  height: 100%;
`;

export const TestTab = styled.iframe`
  width: 60%;
  height: 100%;
`;

export const TestUl = styled.div``;
export const TestName = styled.p`
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
