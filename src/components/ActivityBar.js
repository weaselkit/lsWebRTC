import React, { useState } from "react";
import styled from "styled-components";
import VideocamIcon from "@material-ui/icons/Videocam";
import TodayIcon from "@material-ui/icons/Today";
import CallMadeIcon from "@material-ui/icons/CallMade";

function ActivityBar() {
  return (
    <Bar>
      <Label>Activity</Label>
      <Recent>
        <RLabel>Recent</RLabel>
        <RecentItem>
          <div style={{ display: "flex" }}>
            <CalledArrow />
            <div>Name</div>
          </div>
          <div>Day</div>
        </RecentItem>
      </Recent>
      <Favorites>Favorites</Favorites>
    </Bar>
  );
}

export default ActivityBar;

const CalledArrow = styled(CallMadeIcon)`
  margin: 0 10px 0 5px;
`;
const Recent = styled.div`
  padding: 5px;
  flex: 1;
`;

const Favorites = styled.div`
  flex: 1;
  padding: 10px;
`;
const RLabel = styled.div`
  border-bottom: 1px solid;
  text-align: center;
  margin: 10px;
  padding: 10px;
`;
const RecentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Label = styled.div`
  text-align: center;
  margin: 20px;
`;
const Bar = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f1f1f2;
`;
