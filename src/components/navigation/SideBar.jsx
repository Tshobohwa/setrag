import React from "react";
import setragLogo from "../../images/setrag-logo.png";
import SideBarLink from "./SideBarLink";

const SideBar = ({ children }) => {
  return (
    <main className="w-[100vw] h-[100vh] py-4 pr-4 pl-[260px]">
      <nav className=" w-[240px] border-r border-r-blue-950 flex flex-col gap-4 items-center fixed top-0 left-0 bottom-0">
        <img src={setragLogo} alt="logo" className="w-[200px] mx-4" />
        <ul className="flex flex-col gap-4">
          <li>
            <SideBarLink to={"/"} name={"Dashboard"} />
          </li>
          <li>
            <SideBarLink to={"/tickets"} name={"Tickets"} />
          </li>
          <li>
            <SideBarLink to={"/destinations"} name={"Destinations"} />
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
};

export default SideBar;
