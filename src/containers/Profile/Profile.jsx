import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  ProfileContainer,
  ProfileContent,
  ProfileMain,
  ProfileAvatar,
  ProfileUserName,
  ProfileLabel,
  ProfileInput,
  ProfileButton,
} from "./styles";

import TopPanel from "../../components/TopPanel";
import Header from "../../components/Header";
import { API_URL } from "../../constants";

const Profile = ({ theme }) => {
  const [user, setUser] = useState();
  const [file, setFile] = useState("");

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
          <form
            encType="multipart/form-data"
            method="POST"
            onSubmit={async (evt) => {
              evt.preventDefault();
              const formData = new FormData(evt.target);

              if (file) {
                const responseData = await axios({
                  method: "POST",
                  url: `${API_URL}/upload?id=${user._id}`,
                  data: formData,
                  withCredentials: true,
                });
                window.location.reload();
              } else {
                alert("Фото не выбрано");
              }
            }}
          >
            <ProfileLabel htmlFor="avatar">
              <ProfileAvatar
                className="profile-editor__avatar"
                src={
                  file
                    ? URL.createObjectURL(file)
                    : `${API_URL}/getImage/${user?.avatar}`
                }
                alt="profile avatar"
              />
              <ProfileInput
                id="avatar"
                name="avatar"
                type="file"
                onChange={(evt) => setFile(evt.target.files[0])}
              />
            </ProfileLabel>

            <ProfileButton type="submit">Change Avatar</ProfileButton>
          </form>
          <ProfileUserName>Пользователь: {user?.username}</ProfileUserName>
          <hr />
          <ProfileUserName>Результ теста 1: {user?.test_one} из 7</ProfileUserName>
          <ProfileUserName>Результ теста 2: {user?.test_two} из 5</ProfileUserName>
          <ProfileUserName>Результ теста 2: {user?.test_third} из 5</ProfileUserName>
        </ProfileMain>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;
