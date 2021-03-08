import React from 'react';
import './SidebarOption.css';
import TwitterIcon from "@material-ui/icons/Twitter";

function SidebarOption({active,text,Icon}){
  return(
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2 className="nospace">{text}</h2>
    </div>
  )
};

export default SidebarOption;