import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import HelpIcon from "@material-ui/icons/Help";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Chip from "@material-ui/core/Chip";
import SearchIcon from "@material-ui/icons/Search";
import NewReleasesIcon from "@material-ui/icons/NewReleases";

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput type="text" placeholder={"Search Directory"} />
    </SearchContainer>
  );
};
function AppBar() {
  return (
    <Banner elevation={8}>
      <UserInfo>
        <AcctIcon />
        <UserName>
          <div>Username</div>
          <div>
            My Extension: 1234567 <KeyboardArrowDownIcon />
          </div>
        </UserName>
        <CenterContent>
          <Chip
            style={{ background: "#5650d7", color: "white" }}
            avatar={<NewReleasesIcon style={{ color: "white" }} />}
            label="Upgrade Button"
          />
        </CenterContent>
        <SearchAndOptions>
          <SearchBar />
          <HelpIcon />
          <MoreVert />
        </SearchAndOptions>
      </UserInfo>
    </Banner>
  );
}

const AcctIcon = styled(AccountCircleIcon)`
  font-size: 3em !important;
  margin: 0 10px 0 0px;
`;

const MoreVert = styled(MoreVertIcon)`
  margin: 0 5px 0 5px;
`;
const Banner = styled(Paper)``;
const CenterContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
`;
const UserInfo = styled.div`
  display: flex;
  border: dotted 2px;
  align-items: center;
`;
const UserName = styled.div`
  display: flex;
  flex-direction: column;
`;
const SearchAndOptions = styled.div`
  display: flex;
  align-items: center;
`;
const SearchContainer = styled.div`
  padding: 5px;
  margin: 0 10px 0 10px;
  display: flex;
  align-items: center;
  border-radius: 2em;
  background: silver;
  width: 35vw;
`;
const SearchInput = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
`;

export default AppBar;
