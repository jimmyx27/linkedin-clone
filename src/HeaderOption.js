import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
  return (
    <div className="headerOption" onClick={onClick}>
      {/* {avatar && <Avatar className="headerOption__icon" src={avatar} />} */}
      {Icon && <Icon className="headerOption__icon;" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
