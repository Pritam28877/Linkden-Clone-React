import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import LinkdenLogo from "./assets/linkedin.png"
import "./Header.css"
import HeaderOption from "./HeaderOption";
import { Home } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
         <img src={LinkdenLogo} alt="logo" />
      </div>
      <div className="header__search">
        <SearchIcon/>
        <input type="text" />
      </div>
      <div className="header-right">
        <HeaderOption title='Home'/>
      </div>
    </div>
  );
}

export default Header;
