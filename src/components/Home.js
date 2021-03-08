import React, { useState } from "react";
import styled from "styled-components";
import VideocamIcon from "@material-ui/icons/Videocam";
import TodayIcon from "@material-ui/icons/Today";

function Home(props) {
  const { openConf, setOpenConf } = props;

  const startCall = () => {
    setOpenConf(true);
  };

  return (
    <HomeContainer>
      <LabelContainer>
        <PrimaryLabel>Welcome, User Name</PrimaryLabel>
        <SecondaryLabel>What would you like to do?</SecondaryLabel>
      </LabelContainer>
      <VideoIcon onClick={startCall} />
      <CalendarIcon />
      <CameraLabel>Call</CameraLabel>
      <CalendarLabel>Schedule</CalendarLabel>
    </HomeContainer>
  );
}

export default Home;

const PrimaryLabel = styled.div`
  font-weight: 500;
  font-size: 2em;
`;
const SecondaryLabel = styled.div`
  font-size: 1.2em;
  margin: 5px 0 5px 0;
`;
const CameraLabel = styled.div`
  grid-area: text;
  justify-content: center;
  display: flex;
  font-weight: bold;
  font-size: 1.3em;
`;
const CalendarLabel = styled.div`
  grid-area: text2;
  justify-content: center;
  display: flex;
  font-weight: bold;
  font-size: 1.3em;
`;
const LabelContainer = styled.div`
  grid-area: labels;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoIcon = styled(VideocamIcon)`
  grid-area: icons;
  border: solid blue;
  color: blue;
  justify-self: center;
  font-size: 5em;
  border-radius: 50em;
  padding: 20px;
  cursor: pointer;
  font-size: 3.5em !important;
  cursor: pointer;
  &:hover {
    background: #5650d7;
    color: white;
  }
`;

const CalendarIcon = styled(TodayIcon)`
  grid-area: icons2;
  border: solid blue;
  color: blue;
  justify-self: center;
  font-size: 5em;
  border-radius: 50em;
  padding: 20px;
  cursor: pointer;
  font-size: 3.5em !important;
  cursor: pointer;
  &:hover {
    background: #5650d7;
    color: white;
  }
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 15vw 15vw;
  grid-template-rows: 25vh 110px 110px;
  grid-template-areas:
    "labels labels"
    "icons icons2"
    "text text2";
`;
