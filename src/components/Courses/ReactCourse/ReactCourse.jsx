import React from "react";
import { Skeleton } from "@mui/material";

import { CourseContainer, CourseContent, CourseTabs } from "./styles";
import TopPanel from "../../TopPanel";
import Header from "../../Header";
import HiddenContent from "../../HiddenContent";

import { DATA_ARRAY } from "./data";

const ReactCourse = ({}) => {
  const renderTabs = () =>
    DATA_ARRAY.map((item, index) => (
      <HiddenContent key={index} tabData={item} inx={index} />
    ));

  return (
    <CourseContainer>
      <Header />
      <CourseContent>
        <TopPanel />
        <CourseTabs>{renderTabs()}</CourseTabs>
      </CourseContent>
    </CourseContainer>
  );
};

export default ReactCourse;
