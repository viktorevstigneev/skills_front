import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import {
  TopContainer,
  Avatar,
  TopName,
  StyledSkeletonImg,
  StyledSkeletonName,
  TopLogout,
} from "./styles";
import { API_URL } from "../../constants";
import { Redirect } from "react-router-dom";

const TopPanel = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getCurrentUser = async () => {
      const responseData = await axios
        .get(`${API_URL}/profile`, { withCredentials: true })
        .then((response) => setUser(response.data));
    };
    getCurrentUser();
  }, []);

  return (
    <TopContainer>
      {user?.avatar ? (
        <Avatar src={`${API_URL}/getImage/${user?.avatar}`} />
      ) : (
        <StyledSkeletonImg variant="circular" width={30} height={30} />
      )}
      <TopName to="/profile">
        {user?.username ? (
          user?.username
        ) : (
          <StyledSkeletonName variant="text" width={110} height={40} />
        )}
      </TopName>
      <TopLogout
        to="/signin"
        onClick={(evt) => {
          axios.post(`${API_URL}/logout`);
        }}
      >
        Выйти
      </TopLogout>
    </TopContainer>
  );
};

export default TopPanel;
