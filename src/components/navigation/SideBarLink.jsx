import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarLink = ({ to, name }) => {
  const { pathname } = useLocation();
  return (
    <Link to={to}>
      <div
        className={`w-[220px] h-[3rem] rounded-md flex items-center pl-4 ${
          pathname === to ? "text-white bg-blue-950" : "bg-white text-blue-950"
        }`}
      >
        <p className="font-semibold">{name}</p>
      </div>
    </Link>
  );
};

export default SideBarLink;
