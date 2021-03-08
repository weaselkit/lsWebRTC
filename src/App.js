import React, { useState } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";
import SideBar from "./components/Sidebar";
import ActivityBar from "./components/ActivityBar";
import Home from "./components/Home";
import Conference from "./components/Conference";

function App() {
  const [openConf, setOpenConf] = useState(false);

  return (
    <div>
      <Banner />
      {openConf && <Conference setOpenConf={setOpenConf} />}
      {!openConf && (
        <ContentContainer>
          <SideBar />
          <Content>
            <Home setOpenConf={setOpenConf} />
          </Content>
          <ActivityBar />
        </ContentContainer>
      )}
    </div>
  );
}

const Content = styled.div`
  width: 60vw;
`;
const ContentContainer = styled.div`
  height: 95vh;
  display: flex;
`;
export default App;
