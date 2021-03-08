import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import ComputerIcon from "@material-ui/icons/Computer";
import PanToolIcon from "@material-ui/icons/PanTool";
import CallEndIcon from "@material-ui/icons/CallEnd";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import InfoIcon from "@material-ui/icons/Info";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ForumIcon from "@material-ui/icons/Forum";
import SettingsIcon from "@material-ui/icons/Settings";

import Mountain from "../images/clouds.jpg";

const Conference = (props) => {
  const { setOpenConf } = props;
  const [videoMuted, setVideoMuted] = useState(true);
  const [audioMuted, setAudioMuted] = useState(true);
  const [handRaised, setHandRaised] = useState(false);
  const [screenShare, setScreenshare] = useState(false);
  const constraints = { audio: false, video: true };
  let localStream = null;
  let screenStream = null;

  const ToggleHand = () => {
    setHandRaised(!handRaised);
  };

  const ToggleVideo = () => {
    setVideoMuted(!videoMuted);
  };

  const ToggleAudio = () => {
    setAudioMuted(!audioMuted);
  };

  const ToggleScreenshare = () => {
    setScreenshare(!screenShare);
  };

  const EndCall = () => {
    if (localStream && localStream.getTracks()) {
      localStream.getTracks().forEach((track) => track.stop());
    }
    setOpenConf(false);
  };

  const ScreenShare = () => {
    ToggleScreenshare();
    navigator.mediaDevices.getDisplayMedia().then((stream) => {
      document.querySelector("video").srcObject = stream;
      screenStream = stream;
    });
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      document.querySelector("video").srcObject = stream;
      screenStream = stream;
    });
  }, []);

  return (
    <>
      <ConferenceContainer>
        <NameTag>Name</NameTag>
        <WindowsContainer>
          <Window></Window>
          <Window></Window>
          <Window></Window>
          <Window></Window>
        </WindowsContainer>
        {/* <MainWindow></MainWindow> */}
        <UserVideo autoPlay />
        <Controls>
          <PrimaryControls>
            {!audioMuted && <Mic onClick={ToggleAudio} />}
            {audioMuted && <MicOff onClick={ToggleAudio} />}
            {!videoMuted && <Cam onClick={ToggleVideo} />}
            {videoMuted && <CameraOff onClick={ToggleVideo} />}
            <VDivider />
            <Computer onClick={ScreenShare} />
            <Hand raised={handRaised} onClick={ToggleHand} />
          </PrimaryControls>
          <SecondaryControls>
            <div>00:00</div>
            <Hangup onClick={EndCall} />
            <MenuDots />
          </SecondaryControls>
        </Controls>
      </ConferenceContainer>
      <Sidebar>
        <SidebarInnerContainer>
          <PersonPlus />
          <Info />
          <Peoples />
          <Chat />
          <Settings />
        </SidebarInnerContainer>
      </Sidebar>
    </>
  );
};

const UserVideo = styled.video`
  flex: 1;
  border-radius: 0.5em;
  margin: 15px;
  object-fit: cover;
`;

const SidebarInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

const PersonPlus = styled(PersonAddIcon)`
  font-size: 2.5em !important;
  cursor: pointer;
`;
const Info = styled(InfoIcon)`
  font-size: 2.5em !important;
  cursor: pointer;
`;
const Peoples = styled(PeopleAltIcon)`
  font-size: 2.5em !important;
  cursor: pointer;
`;
const Chat = styled(ForumIcon)`
  font-size: 2.5em !important;
  cursor: pointer;
`;
const Settings = styled(SettingsIcon)`
  border-top: 1px white solid;

  font-size: 2.5em !important;
  padding-top: 25px;
  cursor: pointer;
`;

const Sidebar = styled.div`
  background: gray;
  height: 100vh;
  width: 3vw;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  height: 100vh;
  width: 97vw;
  position: fixed;
`;

const Computer = styled(ComputerIcon)`
  font-size: 3em !important;
  margin: 10px;
  border: solid white 2px;
  padding: 10px;
  border-radius: 50em;
  align-self: center;
  cursor: pointer;
`;
const Hand = styled(PanToolIcon)`
  font-size: 3em !important;
  border: solid white 2px;
  margin: 10px;
  border: ${(props) => (props.raised ? "green" : "white ")} solid 2px;
  padding: 10px;
  border-radius: 50em;
  align-self: center;
  cursor: pointer;
  color: ${(props) => (props.raised ? "green" : "white")};
`;
const VDivider = styled.div`
  position: relative;
  width: 1px;
  border-left: solid 1px;
  margin: 5px;
  cursor: pointer;
`;

const MenuDots = styled(MoreVertIcon)`
  font-size: 3em !important;
  cursor: pointer;
`;

const Hangup = styled(CallEndIcon)`
  font-size: 3em !important;
  margin: 10px;
  border: solid white 2px;
  padding: 10px;
  border-radius: 50em;
  align-self: center;
  cursor: pointer;
`;

const Cam = styled(VideocamIcon)`
  font-size: 3em !important;
  margin: 10px;
  border: solid white 2px;
  padding: 10px;
  border-radius: 50em;
  align-self: center;
  cursor: pointer;
`;

const CameraOff = styled(VideocamOffIcon)`
  font-size: 3em !important;
  margin: 10px;
  border: solid red 2px;
  padding: 10px;
  border-radius: 50em;
  align-self: center;
  cursor: pointer;
  color: red;
`;

const Mic = styled(MicIcon)`
  font-size: 3em !important;
  margin: 10px;
  border: solid white 2px;
  padding: 10px;
  border-radius: 50em;
  align-self: center;
  cursor: pointer;
`;
const MicOff = styled(MicOffIcon)`
  font-size: 3em !important;
  margin: 10px;
  border: solid red 2px;
  padding: 10px;
  border-radius: 50em;
  align-self: center;
  cursor: pointer;
  color: red;
`;

const SecondaryControls = styled.div`
  display: flex;
  align-items: center;
`;
const PrimaryControls = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
const Window = styled.div`
  background: blue;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5em;
`;

const NameTag = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  padding: 10px;
`;

const Controls = styled.div`
  flex: 0 0 20%;
  color: white;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 5px;
`;

const WindowsContainer = styled.div`
  flex: 0 0 10%;
  display: grid;
  grid-template-columns: repeat(6, 175px);
  grid-gap: 10px;
  padding: 10px;
`;
const MainWindow = styled.div`
  flex: 1;
  border-radius: 0.5em;
  margin: 15px;
  background-image: url(${Mountain});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #3f308a;
  background-blend-mode: screen;
  filter: blur(20px);
`;
export default Conference;
