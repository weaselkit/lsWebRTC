import React, { useState } from "react";
import styled from "styled-components";

import PeopleIcon from "@material-ui/icons/People";
import ForumIcon from "@material-ui/icons/Forum";
import TodayIcon from "@material-ui/icons/Today";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

function SideBar() {
  const SidebarItems = [
    { label: "Home", icon: <HomeIcon /> },
    { label: "Upcoming", icon: <TodayIcon /> },
    { label: "Chat", icon: <ForumIcon /> },
    { label: "Contacts", icon: <PersonIcon /> },
    { label: "Meetings", icon: <PeopleIcon /> },
  ];

  const DisplayItems = () => {
    const [SelectionIndex, setSelectionIndex] = useState(0);
    return SidebarItems.map((item, index) => {
      return (
        <SidebarItem key={index}>
          <div style={{ margin: "10px" }}>{item.icon}</div>
          <div style={{ flex: 1, margin: "10px" }}>{item.label}</div>
          {SelectionIndex == index && <NSelectArrow />}
        </SidebarItem>
      );
    });
  };

  return (
    <Sidebar>
      <DisplayItems />
      <SidebarFiller>Company Logo</SidebarFiller>
    </Sidebar>
  );
}

const NSelectArrow = styled.div`
  height: 15px;
  width: 15px;
  background: white;
  transform: rotate(45deg);
  position: relative;
  right: -5%;
`;

const SidebarFiller = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 18vw;
  background: #5650d7;
  height: 100%;
`;

const SidebarItem = styled.div`
  display: flex;
  height: 50px;
  font-size: 1.5em !important;
  align-items: center;
  color: white;
  overflow: hidden;
`;

export default SideBar;
