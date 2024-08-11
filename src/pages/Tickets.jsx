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
        <section className="w-full flex flex-col gap-4 py-4">
          <div className="w-full h-[200px] flex">
            <div className="h-full bg-blue-950 w-[80px]"></div>
            <div className="w-full  border-dashed border-2 h-[200px] border-l-0 border-blue-950 px-4 py-6 flex flex-col justify-between">
              <div className="w-full flex justify-between">
                <p className="h-[3rem] px-6 rounded-md bg-blue-950/20 flex items-center w-fit font-semibold text-lg">
                  Name: John Doe
                </p>
                <p className="h-[3rem] px-6 rounded-md flex items-center w-fit font-semibold text-lg">
                  Date: 13 Mai 2023
                </p>
              </div>
              <div className="w-full flex justify-between">
                <p className="h-[3rem] px-6 rounded-md bg-blue-950/20 flex items-center w-fit font-semibold text-lg">
                  Destination: Libreville
                </p>
                <p className="h-[3rem] px-6 rounded-md bg-blue-950/20 flex items-center w-fit font-semibold text-lg">
                  Price:5000 FCFA
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SideBar>
  );
};

export default Tickets;
