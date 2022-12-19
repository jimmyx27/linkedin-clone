import React from "react";
import "./Header.css";
// import SearchIcon from "@mui/icons/Search";
import { IoMdSearch } from "react-icons/io";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { GrGroup, GrNotification, GrBriefcase, GrHome } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import HeaderOption from "./HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./features/userSlice";
import { autoBatchEnhancer } from "@reduxjs/toolkit";
import { auth } from "./firebase";
import { selectUser } from "./features/userSlice";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
          alt=""
        />

        <div className="header__search">
          <IoMdSearch />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={GrHome} title="Home" />
        <HeaderOption Icon={GrGroup} title="Network" />
        <HeaderOption Icon={GrBriefcase} title="Jobs" />
        <HeaderOption Icon={BiMessageRoundedDetail} title="Messaging" />
        <HeaderOption Icon={GrNotification} title="Notifications" />
        <HeaderOption Icon={RxAvatar} title="Logout" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
