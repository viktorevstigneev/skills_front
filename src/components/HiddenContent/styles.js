import styled from "styled-components";

export const CourseTabItem = styled.div``;

export const CourseTabHeader = styled.div`
  display: flex;
  cursor: pointer;
`;

export const CourseShowBtn = styled.button`
  background: transparent;
  border: none;
  color: #6c5dd3;
`;

export const CourseTabName = styled.p``;

export const CourseTabContent = styled.p`
  margin-top: 0;
  border-top: 1px solid ${({ borderColor }) => borderColor};
  padding-top: 10px;
`;

export const CourseTabTaskContent = styled.p`
  margin-top: 0;
  padding-top: 10px;
  position: relative;
  margin-left: 25px;

  &::before{
    content: "!?";
    color: green;
    font-size: 28px;
    position: absolute;
    top: 10px;
    left: -29px;
  }
`;

