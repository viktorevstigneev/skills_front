import styled from "styled-components";
import { Link } from "react-router-dom";

export const TranslatorContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const TranslatorBlock = styled.div`
  width: 40%;
`;

export const TranslatorText = styled.textarea`
  display: block;
  width: 95%;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  padding: 10px;

  background: transparent;
  color: ${({ theme }) => theme.text};

  resize: none;
`;

export const StyledSwitchButton = styled.button`
  width: 35px;
  height: 35px;
  z-index: 1000;
  background: transparent;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

// ----------------------- course

export const StyledCourseMainContent = styled.div`
  margin: 30px;
`;

export const StyledCourseTitle = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: bold;
`;

export const StyledCoursesFilterWrapper = styled.div`
  display: flex;
`;

export const StyledCoursesFilterName = styled.p`
  border: 1px solid #6c5dd3;
  border-radius: 4px;
  padding: 10px;
  margin: 5px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  background: ${({ quickSort, id }) => {
    return quickSort === id ? "#adade5" : "";
  }};

  &:hover {
    background: #adade5;
  }
`;

export const StyledCoursesSortingButtonsBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 40%;
  align-items: center;
`;

export const StyledCoursesSortingButton = styled.div`
  padding: 5px;
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0 2px 5px rgba(184, 184, 184, 0.25);
  border-radius: 2px;
  margin-left: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #adade5;
  }
`;

export const StyledCourses = styled.ul`
  margin-top: 60px;
  padding: 0;
  padding-bottom: 50px;
  ${({ view }) => {
    if (view === "grid") {
      return `
					display: grid;
					grid-template-columns: repeat(3, 270px);
  				grid-gap: 40px;
				`;
    } else {
      return `
					display: block;
				`;
    }
  }};

  list-style: none;
`;

export const StyledCourseCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;

  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.cardBg};
  ${({ view }) => {
    if (view === "flex") {
      return `
					flex-direction: row;
				`;
    }
  }};
`;

export const StyledCoursCardImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  background-color: ${({ theme }) => theme.cardImgBg};

  ${({ view }) => {
    if (view === "flex") {
      return `
					height: 50px;
					width: 50px;
					margin: 0 20px 0 20px;
				`;
    }
  }};
`;

export const StyledCoursName = styled(Link)`
  margin: 15px 0 15px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  display: inline-block;
  &::after {
    content: "";
    width: 0px;
    height: 1px;
    display: block;
    background: ${({ theme }) => theme.text};
    transition: 0.8s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const StyledCoursFind = styled.input`
  padding: 5px 10px;
  border: 1px solid #6c5dd3;
`;
