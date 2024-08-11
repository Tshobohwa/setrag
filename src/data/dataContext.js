import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tickets, setTickets] = useState();
  const [destinations, setDestinations] = useState();
  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
    localStorage.setItem("tickets", JSON.stringify([...tickets, ticket]));
  };
  const addDestination = (destination) => {
    setDestinations([...destinations, destination]);
    localStorage.setItem([...destinations, destination]);
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
