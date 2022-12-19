import React, { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

import {
  TranslatorContainer,
  StyledCourseTitle,
  StyledCourseMainContent,
  StyledCoursesFilterWrapper,
  StyledCoursesFilterName,
  StyledCoursesSortingButton,
  StyledCoursesSortingButtonsBlock,
  StyledCourses,
  StyledCourseCard,
  StyledCoursCardImg,
  StyledCoursName,
  StyledCoursFind,
} from "./styles";
import TopPanel from "../TopPanel";

import {filters, COURSES_ARR} from './data';

const TranslatorContent = ({
  translator,
  postTranslateText,
  languages,
  theme,
}) => {

	const [searchValue, setSearchValue] = useState('');
	const [view, setView] = useState("grid");
  const [quickSort, setQuickSort] = useState("all");

	const handleSearhChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const handleQuickSortChange = (evt) => {
    setQuickSort(evt.target.getAttribute("id"));
  }


  return (
    <TranslatorContainer>
      <TopPanel />
      <StyledCourseMainContent>
        <StyledCourseTitle> Разработка, Популярные Темы </StyledCourseTitle>
        <StyledCoursesFilterWrapper>
          {filters.map((item) => (
            <StyledCoursesFilterName
              quickSort={quickSort}
              id={item.id}
              key={item.id}
              onClick={handleQuickSortChange}
            >
              {item.id}
            </StyledCoursesFilterName>
          ))}
        </StyledCoursesFilterWrapper>

        <StyledCoursesSortingButtonsBlock>
          Вид:
          <StyledCoursesSortingButton
            onClick={() => {
              setView("grid");
            }}
          >
            <svg width="21" height="13" viewBox="0 0 21 13" fill="#6c5dd3">
              <rect x="16" y="8" width="5" height="5" rx="1"></rect>
              <rect x="8" y="8" width="5" height="5" rx="1"></rect>
              <rect y="8" width="5" height="5" rx="1"></rect>
              <rect x="16" width="5" height="5" rx="1"></rect>
              <rect x="8" width="5" height="5" rx="1"></rect>
              <rect width="5" height="5" rx="1"></rect>
            </svg>
          </StyledCoursesSortingButton>
          <StyledCoursesSortingButton
            onClick={() => {
              setView("flex");
            }}
          >
            <svg width="30" height="13" viewBox="0 0 30 13" fill="#6c5dd3">
              <rect x="8" y="8" width="22" height="5" rx="1"></rect>
              <rect y="8" width="5" height="5" rx="1"></rect>
              <rect x="8" width="22" height="5" rx="1"></rect>
              <rect width="5" height="5" rx="1"></rect>
            </svg>
          </StyledCoursesSortingButton>
          <StyledCoursFind
            type="text"
            placeholder="Поиск"
            onChange={handleSearhChange}
          />
        </StyledCoursesSortingButtonsBlock>

        <StyledCourses view={view}>
          {COURSES_ARR.filter((item) => item?.filter === quickSort || quickSort === "all")
            .filter(
              (item) =>
                searchValue == "" ||
                item?.name.toUpperCase().includes(searchValue.toUpperCase())
            )
            .map((item, index) => (
              <StyledCourseCard key={index} view={view}>
                <StyledCoursCardImg src={item.imageSrc} view={view} />
                <StyledCoursName to={item.pushUrl}>{item.name}</StyledCoursName>
              </StyledCourseCard>
            ))}
        </StyledCourses>
      </StyledCourseMainContent>
    </TranslatorContainer>
  );
};

export default TranslatorContent;
