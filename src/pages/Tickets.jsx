import React, { useContext, useState } from "react";
import SideBar from "../components/navigation/SideBar";
import NewTicket from "../components/popups/NewTicket";
import DataContext from "../data/dataContext";

const Tickets = () => {
  const [addingTicket, setAddingTicket] = useState(false);
  const { tickets } = useContext(DataContext);
  return (
    <SideBar>
      {addingTicket && <NewTicket close={() => setAddingTicket(false)} />}
      <div className="w-full max-w-[900px]">
        <header className="w-full justify-between flex">
          <h1 className="text-blue-950 font-semibold text-3xl">Tickets</h1>
          <button
            className="h-[2.5rem] bg-blue-950 flex items-center justify-center rounded-lg font-semibold text-white px-6"
            onClick={() => setAddingTicket(true)}
          >
            New Ticket
          </button>
        </header>
        <section className="w-full flex flex-col gap-4 py-4">
          {tickets.map((ticket) => (
            <div className="w-full h-[200px] flex">
              <div
                className={`h-full w-[80px] ${
                  ticket.cathegory === "vip" ? "bg-yellow-500" : " bg-blue-950"
                }`}
              >
                <p className="text-4xl font-bold writing-mode-vertical p-3 text-white">
                  {ticket.cathegory}
                </p>
              </div>
              <div className="w-full  border-dashed border-2 h-[200px] border-l-0 border-blue-950 px-4 py-6 flex flex-col justify-between">
                <div className="w-full flex justify-between">
                  <p className="h-[3rem] px-6 rounded-md bg-blue-950/20 flex items-center w-fit font-semibold text-lg">
                    Name: {ticket.name}
                  </p>
                  <p className="h-[3rem] px-6 rounded-md flex items-center w-fit font-semibold text-lg">
                    Date: {new Date(ticket.date).toLocaleString()}
                  </p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="h-[3rem] px-6 rounded-md bg-blue-950/20 flex items-center w-fit font-semibold text-lg">
                    Destination: {ticket.destination}
                  </p>
                  <p className="h-[3rem] px-6 rounded-md bg-blue-950/20 flex items-center w-fit font-semibold text-lg">
                    Price: {ticket.price} FCFA
                  </p>
                </div>
                <p className="bg-yellow-400 w-fit px-2 rounded-md">
                  payed with {ticket.payementMethod}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </SideBar>
  );
};

export default Tickets;
