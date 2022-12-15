import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import {
  TopContainer,
  Avatar,
  TopName,
  StyledSkeletonImg,
  StyledSkeletonName,
} from "./styles";
import { API_URL } from "../../constants";

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
    <TopContainer to="/profile">
      {user?.avatar ? (
        <Avatar src={`${API_URL}/getImage/${user?.avatar}`} />
      ) : (
        <StyledSkeletonImg variant="circular" width={30} height={30} />
      )}
      <TopName>
        {user?.username ? (
          user?.username
        ) : (
          <StyledSkeletonName variant="text" width={110} height={40} />
        )}
      </TopName>
    </TopContainer>
  );
};

export default TopPanel;
