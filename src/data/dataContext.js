import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tickets, setTickets] = useState(
    JSON.parse(localStorage.getItem("tickets")) || []
  );
  const [destinations, setDestinations] = useState(
    JSON.parse(localStorage.getItem("destinations")) || []
  );

  const addTicket = (ticket) => {
    const updatedTickets = [...tickets, ticket];
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };

  const addDestination = (destination) => {
    const updatedDestinations = [...destinations, destination];
    setDestinations(updatedDestinations);
    localStorage.setItem("destinations", JSON.stringify(updatedDestinations)); // Fix: added JSON.stringify here
  };

  return (
    <DataContext.Provider
      value={{ tickets, destinations, addTicket, addDestination }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
