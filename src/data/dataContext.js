import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tickets, setTickets] = useState();
  const [destinations, setDestinations] = useState();
  return (
    <DataContext.Provider
      value={{ tickets, destinations, setTickets, setDestinations }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
