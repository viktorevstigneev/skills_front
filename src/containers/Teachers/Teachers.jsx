import React, { useState } from "react";
import "react-fancybox/lib/fancybox.css";

import TopPanel from "../../components/TopPanel";
import Header from "../../components/Header";

import {
  TeachContainer,
  TeachContent,
  TeachCard,
  TeacAvatar,
  TeachName,
  TeachSpec,
  TeachNum,
  TeacImage,
  AllCards,
  TeacLeftAvatar,
  TeacCity,
  TeachLeftName,
  TeachSpecLeft,
} from "./styles";

import { TEACH_ARR } from "./data";

const Teachers = () => {
  const [active, setActive] = useState(TEACH_ARR[0]);

  return (
    <>
      <TeachContainer>
        <Header />
        <TeachContent>
          <TopPanel />
          <div style={{ display: "flex" }}>
            <AllCards>
              {TEACH_ARR.map((item) => (
                <TeachCard
                  isActive={JSON.stringify(active) === JSON.stringify(item)}
                  onClick={() => {
                    setActive(item);
                  }}
                >
                  <TeacAvatar thumbnail={item.thumbnail} image={item.image} />
                  <TeachName>{item.name}</TeachName>
                  <TeachSpec>{item.spec}</TeachSpec>
                </TeachCard>
              ))}
            </AllCards>
            <TeacImage>
              <TeacLeftAvatar src={active.image} />
              <TeachLeftName>{active.name}</TeachLeftName>
              <TeacCity>{active.city}</TeacCity>
              <TeachSpecLeft>{active.spec}</TeachSpecLeft>
              <TeachNum href={`tel:${active.tel}`}>{active.tel}</TeachNum>

              <TeachSpecLeft>{active.description}</TeachSpecLeft>
            </TeacImage>
          </div>
        </TeachContent>
      </TeachContainer>
    </>
  );
};

export default Teachers;
