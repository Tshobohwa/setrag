import React from "react";
import SideBar from "../components/navigation/SideBar";

const Tickets = () => {
  return (
    <SideBar>
      <div className="w-full max-w-[900px]">
        <header className="w-full justify-between flex">
          <h1 className="text-blue-950 font-semibold text-3xl">Tickets</h1>
          <button className="h-[2.5rem] bg-blue-950 flex items-center justify-center rounded-lg font-semibold text-white px-6">
            New Ticket
          </button>
        </header>
      </div>
    </SideBar>
  );
};

export default Tickets;
