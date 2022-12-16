import React, {useState, useEffect} from "react";
import axios from "axios";


import {
  ProfileContainer,
  ProfileContent,
  ProfileMain,
  ProfileAvatar,
  ProfileUserName,
} from "./styles";

import TopPanel from "../../components/TopPanel";
import Header from "../../components/Header";
import { API_URL } from "../../constants";

const Profile = ({ theme }) => {
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
    <ProfileContainer>
      <Header />
      <ProfileContent>
        <TopPanel />
        <ProfileMain>
          <ProfileAvatar src={`${API_URL}/getImage/${user?.avatar}`} />
          <ProfileUserName>{user?.username ? user.username : "не загружено"}</ProfileUserName>
        </ProfileMain>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;
