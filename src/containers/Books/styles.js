import styled from "styled-components";

export const BookContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const BookContent = styled.div`
  width: 80%;
`;

export const BookTabs = styled.div`
  margin-left: 30px;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  height: 100%;
`;

export const BookTab = styled.iframe`
  width: 60%;
  height: 100%;
`;

export const BookUl = styled.div``;
export const BookName = styled.p`
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
