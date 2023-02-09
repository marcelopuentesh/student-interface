import React from "react";
import { SidebarData } from "./SidebarData";
import "../App.css";
function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList-student">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon"> {val.icon}</div>
              <div id="tittle"> {val.tittle} </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
