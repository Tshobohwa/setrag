import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Tickets from "./pages/Tickets";
import Destinations from "./pages/Destinations";
import { DataProvider } from "./data/dataContext";

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Tickets />} />
          <Route path="/Destinations" element={<Destinations />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
