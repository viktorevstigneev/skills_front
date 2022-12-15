import React from "react";
import { Skeleton } from "@mui/material";
import { useState } from "react";

import {
  GameContainer,
  GameContent,
  GameTabs,
  GameTab,
  GameUl,
  GameName,
} from "./styles";

import TopPanel from "../../components/TopPanel";
import Header from "../../components/Header";

import { Games_ARRAY } from "./data";

const Games = ({ theme }) => {
  const [active, setActive] = useState(Games_ARRAY[7].game);

  function checkOnlineState() {
    if (navigator.onLine) {
      return true;
    } else {
      return false;
    }
  }
  window.addEventListener("online", checkOnlineState);

  return (
    <GameContainer>
      <Header />
      <GameContent>
        <TopPanel />
        {checkOnlineState() ? (
          <GameTabs>
            <GameUl>
              {Games_ARRAY.map((item, index) => {
                return (
                  <GameName
                    key={index}
                    isActive={active === item.game}
                    onClick={() => {
                      setActive(item.game);
                    }}
                  >
                    {item.name}
                  </GameName>
                );
                <a href={active.game}>перейти</a>;
              })}
            </GameUl>
            <GameTab
              id="fred"
              // style="border:1px solid #666CCC"
              title="Game in an i-Frame"
              src={active}
              frameborder="1"
              scrolling="auto"
              // height="300"
              // width="350"
            ></GameTab>
          </GameTabs>
        ) : (
          <GameUl> Нет доступа к сети, чтобы загрузить игры нужен доступ в интернет</GameUl>
        )}
      </GameContent>
    </GameContainer>
  );
};

export default Games;
