import React, { useState, useCallback } from "react";

import {
  CourseTabItem,
  CourseTabHeader,
  CourseTabContent,
  CourseTabName,
  CourseShowBtn,
  CourseTabTaskContent,
} from "./styles";

const HiddenContent = ({ tabData, inx }) => {
  const [isDescriptionShowed, setDescriptionShowed] = useState(false);

  const handleTaskOpenButtonClick = useCallback(() => {
    setDescriptionShowed((state) => !state);
  }, []);

  return (
    <CourseTabItem>
      <CourseTabHeader onClick={handleTaskOpenButtonClick}>
        <CourseTabName>
          {inx}. {tabData.title}
        </CourseTabName>
        <CourseShowBtn>
          {isDescriptionShowed ? <>&#9660;</> : <>&#9668;</>}
        </CourseShowBtn>
      </CourseTabHeader>
      {isDescriptionShowed && (
        <>
          <CourseTabContent>{tabData?.description}</CourseTabContent>
          <CourseTabTaskContent>{tabData?.task}</CourseTabTaskContent>
        </>
      )}
    </CourseTabItem>
  );
};

export default HiddenContent;
