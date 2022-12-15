import React from "react";
import { Skeleton } from "@mui/material";
import { useState } from "react";

import {
  BookContainer,
  BookContent,
  BookTabs,
  BookTab,
  BookUl,
  BookName,
} from "./styles";

import TopPanel from "../../components/TopPanel";
import Header from "../../components/Header";

import { BOOKS_ARRAY } from "./data";

const books = ({ theme }) => {
  const [active, setActive] = useState(BOOKS_ARRAY[0].book);


  return (
    <BookContainer>
      <Header />
      <BookContent>
        <TopPanel />
        <BookTabs>
          <BookUl>
            {BOOKS_ARRAY.map((item, index) => {
              return (
                <BookName
                  key={index}
                  isActive={active === item.book}
                  onClick={() => {
                    setActive(item.book);
                  }}
                >
                  {item.name}
                </BookName>
              );
            })}
          </BookUl>
          <BookTab
            id="fred"
            // style="border:1px solid #666CCC"
            title="PDF in an i-Frame"
            src={active}
            frameborder="1"
            scrolling="auto"
            // height="300"
            // width="350"
          ></BookTab>
        </BookTabs>
      </BookContent>
    </BookContainer>
  );
};

export default books;
