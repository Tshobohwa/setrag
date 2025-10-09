import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Tickets from "./pages/Tickets";
import Destinations from "./pages/Destinations";
import { DataProvider } from "./data/dataContext";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <DataProvider>
        <Login onLogin={handleLogin} />
      </DataProvider>
    );
  }

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tickets onLogout={handleLogout} />} />
          <Route
            path="/Destinations"
            element={<Destinations onLogout={handleLogout} />}
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
